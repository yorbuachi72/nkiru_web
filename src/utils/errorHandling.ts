import { useErrorHandler } from '@/components/ErrorBoundary';

// Error types for better categorization
export enum ErrorType {
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN',
}

// Custom error class with additional context
export class AppError extends Error {
  public readonly type: ErrorType;
  public readonly statusCode?: number;
  public readonly context?: Record<string, any>;
  public readonly timestamp: Date;
  public readonly userMessage: string;

  constructor(
    message: string,
    type: ErrorType = ErrorType.UNKNOWN,
    statusCode?: number,
    context?: Record<string, any>,
    userMessage?: string
  ) {
    super(message);
    this.name = 'AppError';
    this.type = type;
    this.statusCode = statusCode;
    this.context = context;
    this.timestamp = new Date();
    this.userMessage = userMessage || this.getDefaultUserMessage(type);

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }

  private getDefaultUserMessage(type: ErrorType): string {
    switch (type) {
      case ErrorType.NETWORK:
        return 'Network connection failed. Please check your internet connection and try again.';
      case ErrorType.VALIDATION:
        return 'Please check your input and try again.';
      case ErrorType.AUTHENTICATION:
        return 'Please log in to continue.';
      case ErrorType.AUTHORIZATION:
        return 'You do not have permission to perform this action.';
      case ErrorType.NOT_FOUND:
        return 'The requested resource was not found.';
      case ErrorType.SERVER:
        return 'Server error occurred. Please try again later.';
      case ErrorType.CLIENT:
        return 'An error occurred. Please try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  // Convert to a plain object for logging
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      type: this.type,
      statusCode: this.statusCode,
      context: this.context,
      timestamp: this.timestamp.toISOString(),
      userMessage: this.userMessage,
      stack: this.stack,
    };
  }
}

// Error factory functions
export const createNetworkError = (message: string, context?: Record<string, any>) => 
  new AppError(message, ErrorType.NETWORK, undefined, context);

export const createValidationError = (message: string, context?: Record<string, any>) => 
  new AppError(message, ErrorType.VALIDATION, 400, context);

export const createAuthError = (message: string, context?: Record<string, any>) => 
  new AppError(message, ErrorType.AUTHENTICATION, 401, context);

export const createNotFoundError = (message: string, context?: Record<string, any>) => 
  new AppError(message, ErrorType.NOT_FOUND, 404, context);

export const createServerError = (message: string, context?: Record<string, any>) => 
  new AppError(message, ErrorType.SERVER, 500, context);

// Error parsing utilities
export const parseSupabaseError = (error: any): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  const message = error?.message || 'Unknown Supabase error';
  const code = error?.code;
  const details = error?.details;
  const hint = error?.hint;

  const context = {
    code,
    details,
    hint,
    originalError: error,
  };

  // Map common Supabase error codes to our error types
  switch (code) {
    case 'PGRST301':
    case '23505': // unique_violation
      return new AppError(message, ErrorType.VALIDATION, 400, context, 'This data already exists.');
    case 'PGRST116':
    case '42501': // insufficient_privilege
      return new AppError(message, ErrorType.AUTHORIZATION, 403, context);
    case 'PGRST106':
    case '42P01': // undefined_table
      return new AppError(message, ErrorType.NOT_FOUND, 404, context);
    case 'PGRST204':
      return new AppError(message, ErrorType.NOT_FOUND, 404, context, 'The requested item was not found.');
    default:
      if (message.toLowerCase().includes('network')) {
        return new AppError(message, ErrorType.NETWORK, undefined, context);
      }
      return new AppError(message, ErrorType.SERVER, 500, context);
  }
};

export const parseAnalyticsError = (error: any): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  const message = error?.message || 'Analytics tracking failed';
  const context = {
    originalError: error,
    service: 'Google Analytics',
  };

  return new AppError(
    message, 
    ErrorType.CLIENT, 
    undefined, 
    context, 
    'Analytics tracking is temporarily unavailable.'
  );
};

// Error logging utility
export const logError = (error: Error | AppError, context?: Record<string, any>) => {
  const errorData = {
    timestamp: new Date().toISOString(),
    error: error instanceof AppError ? error.toJSON() : {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
    context,
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Application Error:', errorData);
  }

  // Track with analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameters: {
          error_type: error instanceof AppError ? error.type : 'UNKNOWN',
          context: JSON.stringify(context || {}),
        },
      });
    } catch (analyticsError) {
      console.warn('Failed to track error with analytics:', analyticsError);
    }
  }

  // In production, you might want to send to an error tracking service
  // Example: Sentry, LogRocket, etc.
  // if (process.env.NODE_ENV === 'production') {
  //   sendToErrorTrackingService(errorData);
  // }
};

// Hook for handling errors in components
export const useAppErrorHandler = () => {
  const { handleError } = useErrorHandler();

  const handleAppError = (error: Error | AppError, context?: Record<string, any>) => {
    // Log the error
    logError(error, context);
    
    // Handle with error boundary if it's a critical error
    if (error instanceof AppError && error.type === ErrorType.SERVER) {
      handleError(error);
    }
  };

  const handleAsyncError = async <T>(
    asyncFn: () => Promise<T>,
    context?: Record<string, any>
  ): Promise<T | null> => {
    try {
      return await asyncFn();
    } catch (error) {
      const appError = error instanceof AppError ? error : new AppError(
        error instanceof Error ? error.message : 'Unknown error',
        ErrorType.UNKNOWN,
        undefined,
        context
      );
      
      handleAppError(appError, context);
      return null;
    }
  };

  return {
    handleAppError,
    handleAsyncError,
  };
};

// Utility to show user-friendly error messages
export const getErrorMessage = (error: Error | AppError): string => {
  if (error instanceof AppError) {
    return error.userMessage;
  }
  
  // Fallback for regular errors
  return 'An unexpected error occurred. Please try again.';
};

// Utility to check if error should be retried
export const shouldRetryError = (error: Error | AppError): boolean => {
  if (error instanceof AppError) {
    return error.type === ErrorType.NETWORK || error.type === ErrorType.SERVER;
  }
  
  // For regular errors, check message content
  const message = error.message.toLowerCase();
  return message.includes('network') || message.includes('timeout') || message.includes('connection');
};