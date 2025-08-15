import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path: string;
}

export const useAnalytics = () => {
  const location = useLocation();
  const [isGALoaded, setIsGALoaded] = useState(false);

  // Check if Google Analytics is loaded
  useEffect(() => {
    const checkGALoaded = () => {
      if (typeof window !== 'undefined' && window.gtag && window.dataLayer) {
        setIsGALoaded(true);
      } else {
        // Retry checking after a short delay
        setTimeout(checkGALoaded, 1000);
      }
    };
    checkGALoaded();
  }, []);

  // Track page views automatically
  useEffect(() => {
    if (isGALoaded && typeof window !== 'undefined' && window.gtag) {
      try {
        const pageView: PageViewEvent = {
          page_title: document.title,
          page_location: window.location.href,
          page_path: location.pathname,
        };

        window.gtag('event', 'page_view', pageView);
      } catch (error) {
        console.warn('Failed to track page view:', error);
      }
    }
  }, [location, isGALoaded]);

  // Track page views manually
  const trackPageView = (path: string) => {
    if (!isGALoaded || typeof window === 'undefined' || !window.gtag) {
      console.warn('Google Analytics not loaded, skipping page view:', path);
      return;
    }

    try {
      const pageView: PageViewEvent = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: path,
      };

      window.gtag('event', 'page_view', pageView);
    } catch (error) {
      console.warn('Failed to track page view:', path, error);
    }
  };

  // Track custom events with error handling (supports both old and new format)
  const trackEvent = (eventNameOrEvent: string | AnalyticsEvent, eventData?: Record<string, any>) => {
    if (!isGALoaded || typeof window === 'undefined' || !window.gtag) {
      console.warn('Google Analytics not loaded, skipping event:', eventNameOrEvent);
      return;
    }

    try {
      if (typeof eventNameOrEvent === 'string') {
        // New format: trackEvent('event_name', { data })
        window.gtag('event', eventNameOrEvent, eventData || {});
      } else {
        // Old format: trackEvent({ action, category, label, value })
        const event = eventNameOrEvent;
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      }
    } catch (error) {
      console.warn('Failed to track event:', eventNameOrEvent, error);
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent({
      action: 'click',
      category: 'engagement',
      label: `${buttonName}${location ? ` - ${location}` : ''}`,
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent({
      action: success ? 'form_submit_success' : 'form_submit_error',
      category: 'form',
      label: formName,
    });
  };

  // Track contact interactions
  const trackContact = (method: 'email' | 'phone' | 'form' | 'chat') => {
    trackEvent({
      action: 'contact_attempt',
      category: 'lead_generation',
      label: method,
    });
  };

  // Track service interest
  const trackServiceInterest = (serviceName: string) => {
    trackEvent({
      action: 'service_interest',
      category: 'engagement',
      label: serviceName,
    });
  };

  // Track project views
  const trackProjectView = (projectName: string) => {
    trackEvent({
      action: 'project_view',
      category: 'engagement',
      label: projectName,
    });
  };

  // Track scroll depth
  const trackScrollDepth = (percentage: number) => {
    trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackContact,
    trackServiceInterest,
    trackProjectView,
    trackScrollDepth,
  };
};

export default useAnalytics;