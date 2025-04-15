// Mock API service for authentication
export const authService = {
  login: async (credentials: any) => {
    // Simulate API call
    return {
      data: {
        user: {
          id: '1',
          name: 'Dr. Jane Smith',
          email: credentials.email,
          role: 'doctor',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      }
    };
  },
  loginWithGoogle: async () => {
    // Simulate API call
    return {
      data: {
        user: {
          id: '2',
          name: 'Dr. John Doe',
          email: 'john.doe@example.com',
          role: 'doctor',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      }
    };
  },
  loginWithGithub: async () => {
    // Simulate API call
    return {
      data: {
        user: {
          id: '3',
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'admin',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      }
    };
  },
  loginWithApple: async () => {
    // Simulate API call
    return {
      data: {
        user: {
          id: '4',
          name: 'Assistant User',
          email: 'assistant@example.com',
          role: 'assistant',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      }
    };
  },
  logout: async () => {
    // Simulate API call
    return { success: true };
  },
  getCurrentUser: async () => {
    // Simulate API call
    return {
      data: {
        id: '1',
        name: 'Dr. Jane Smith',
        email: 'jane.smith@example.com',
        role: 'doctor',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    };
  }
};
