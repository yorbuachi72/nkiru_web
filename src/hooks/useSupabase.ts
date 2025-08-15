import { useState, useEffect } from 'react';
import { supabase, Contact, Project, withRetry, checkSupabaseConnection } from '../lib/supabase';

interface UseSupabaseState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseSupabaseListState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

// Hook for managing contacts
export const useContacts = () => {
  const [state, setState] = useState<UseSupabaseListState<Contact>>({
    data: [],
    loading: false,
    error: null,
  });
  const [connectionStatus, setConnectionStatus] = useState<{ connected: boolean; error?: string }>({ connected: true });

  // Check connection status on mount
  useEffect(() => {
    const checkConnection = async () => {
      const status = await checkSupabaseConnection();
      setConnectionStatus(status);
      if (!status.connected) {
        setState(prev => ({ ...prev, error: `Connection error: ${status.error}` }));
      }
    };
    checkConnection();
  }, []);

  // Fetch all contacts with retry mechanism
  const fetchContacts = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const result = await withRetry(async () => {
        const { data, error } = await supabase
          .from('contacts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw new Error(error.message);
        return data;
      });

      setState({ data: result || [], loading: false, error: null });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch contacts';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      console.error('Failed to fetch contacts:', err);
    }
  };

  // Create a new contact with retry mechanism
  const createContact = async (contactData: Omit<Contact, 'id' | 'created_at'>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const result = await withRetry(async () => {
        const { data, error } = await supabase
          .from('contacts')
          .insert([contactData])
          .select()
          .single();

        if (error) throw new Error(error.message);
        return data;
      });

      setState(prev => ({
        data: [result, ...prev.data],
        loading: false,
        error: null,
      }));
      return { data: result, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create contact';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      console.error('Failed to create contact:', err);
      return { data: null, error: errorMessage };
    }
  };

  // Delete a contact
  const deleteContact = async (id: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await withRetry(async () => {
        const { error } = await supabase
          .from('contacts')
          .delete()
          .eq('id', id);
        
        if (error) throw error;
      });
      
      setState(prev => ({
        data: prev.data.filter(contact => contact.id !== id),
        loading: false,
        error: null,
      }));
      return { error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete contact';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      return { error: errorMessage };
    }
  };

  return {
    ...state,
    fetchContacts,
    createContact,
    deleteContact,
  };
};

// Hook for managing projects
export const useProjects = () => {
  const [state, setState] = useState<UseSupabaseListState<Project>>({
    data: [],
    loading: false,
    error: null,
  });

  // Fetch all projects
  const fetchProjects = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await withRetry(async () => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data;
      });
      
      setState({ data: data || [], loading: false, error: null });
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : 'Failed to fetch projects',
      }));
    }
  };

  // Create a new project
  const createProject = async (projectData: Omit<Project, 'id' | 'created_at'>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await withRetry(async () => {
        const { data, error } = await supabase
          .from('projects')
          .insert([projectData])
          .select()
          .single();
        
        if (error) throw error;
        return data;
      });
      
      setState(prev => ({
        data: [data, ...prev.data],
        loading: false,
        error: null,
      }));
      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create project';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      return { data: null, error: errorMessage };
    }
  };

  // Update a project
  const updateProject = async (id: string, updates: Partial<Omit<Project, 'id' | 'created_at'>>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await withRetry(async () => {
        const { data, error } = await supabase
          .from('projects')
          .update(updates)
          .eq('id', id)
          .select()
          .single();
        
        if (error) throw error;
        return data;
      });
      
      setState(prev => ({
        data: prev.data.map(project => project.id === id ? data : project),
        loading: false,
        error: null,
      }));
      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update project';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      return { data: null, error: errorMessage };
    }
  };

  // Delete a project
  const deleteProject = async (id: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await withRetry(async () => {
        const { error } = await supabase
          .from('projects')
          .delete()
          .eq('id', id);
        
        if (error) throw error;
      });
      
      setState(prev => ({
        data: prev.data.filter(project => project.id !== id),
        loading: false,
        error: null,
      }));
      return { error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete project';
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      return { error: errorMessage };
    }
  };

  return {
    ...state,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};

// Generic hook for single item operations
export const useSupabaseItem = <T>(tableName: string) => {
  const [state, setState] = useState<UseSupabaseState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchItem = async (id: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setState({ data, loading: false, error: null });
      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to fetch ${tableName} item`;
      setState(prev => ({ ...prev, loading: false, error: errorMessage }));
      return { data: null, error: errorMessage };
    }
  };

  return {
    ...state,
    fetchItem,
  };
};

export default { useContacts, useProjects, useSupabaseItem };