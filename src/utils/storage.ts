/**
 * Utility for handling localStorage with type safety and error handling
 */
export const storage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return null;
    }
  },

  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error('Error writing to localStorage:', error);
      return false;
    }
  },

  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  },

  clear: (): boolean => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },

  // Get object with type safety
  getObject: <T>(key: string): T | null => {
    const item = storage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
        return null;
      }
    }
    return null;
  },

  // Set object with serialization
  setObject: <T>(key: string, value: T): boolean => {
    try {
      const serialized = JSON.stringify(value);
      return storage.setItem(key, serialized);
    } catch (error) {
      console.error('Error stringifying object for localStorage:', error);
      return false;
    }
  }
};
