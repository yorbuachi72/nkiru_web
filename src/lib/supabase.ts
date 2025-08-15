import { createClient, SupabaseClient as BaseSupabaseClient } from '@supabase/supabase-js'

// Supabase configuration with validation
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Enhanced error handling for missing environment variables
if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL environment variable is required')
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY environment variable is required')
}

// Validate URL format
try {
  new URL(supabaseUrl)
} catch {
  throw new Error('VITE_SUPABASE_URL must be a valid URL')
}

// Create Supabase client with enhanced configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  global: {
    headers: {
      'X-Client-Info': 'nkiru-web@1.0.0'
    }
  }
})

// Connection status checker
export const checkSupabaseConnection = async (): Promise<{ connected: boolean; error?: string }> => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('count', { count: 'exact', head: true })
      .limit(1)
    
    if (error) {
      return { connected: false, error: error.message }
    }
    
    return { connected: true }
  } catch (err) {
    return { 
      connected: false, 
      error: err instanceof Error ? err.message : 'Unknown connection error'
    }
  }
}

// Retry wrapper for Supabase operations
export const withRetry = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error')
      
      if (attempt === maxRetries) {
        throw lastError
      }
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt - 1)))
    }
  }
  
  throw lastError!
}

// Database types (extend as needed)
export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          company?: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company?: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string
          message?: string
          created_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          image_url?: string
          technologies: string[]
          client?: string
          status: 'active' | 'completed' | 'archived'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url?: string
          technologies: string[]
          client?: string
          status?: 'active' | 'completed' | 'archived'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          technologies?: string[]
          client?: string
          status?: 'active' | 'completed' | 'archived'
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Enhanced type definitions
export type Contact = Database['public']['Tables']['contacts']['Row']
export type ContactInsert = Database['public']['Tables']['contacts']['Insert']
export type ContactUpdate = Database['public']['Tables']['contacts']['Update']

export type Project = Database['public']['Tables']['projects']['Row']
export type ProjectInsert = Database['public']['Tables']['projects']['Insert']
export type ProjectUpdate = Database['public']['Tables']['projects']['Update']

// Typed Supabase client
export type SupabaseClient = typeof supabase

// Export connection utilities
export { supabaseUrl, supabaseAnonKey }