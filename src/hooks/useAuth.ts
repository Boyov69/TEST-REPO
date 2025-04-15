import { useState, useEffect, useContext, createContext } from 'react';
import { 
  User, 
  LoginCredentials, 
  AuthContextType,
  UserRole 
} from '../types/auth';
import { authService } from '../services/api';

// Create auth context
const AuthContext = createContext<AuthContextType | null>(null);

// Provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check active session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  // Login with email and password
  const login = async (credentials: LoginCredentials) => {
    const response = await authService.login(credentials);
    setUser(response.data.user);
    return response.data.user;
  };

  // Login with Google
  const loginWithGoogle = async () => {
    const response = await authService.loginWithGoogle();
    setUser(response.data.user);
    return response.data.user;
  };

  // Login with GitHub
  const loginWithGithub = async () => {
    const response = await authService.loginWithGithub();
    setUser(response.data.user);
    return response.data.user;
  };

  // Login with Apple
  const loginWithApple = async () => {
    const response = await authService.loginWithApple();
    setUser(response.data.user);
    return response.data.user;
  };

  // Logout
  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  // Check if user has a specific role
  const hasRole = (role: UserRole | UserRole[]) => {
    if (!user) return false;
    
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    
    return user.role === role;
  };

  const contextValue: AuthContextType = {
    user,
    loading,
    login,
    loginWithGoogle,
    loginWithGithub,
    loginWithApple,
    logout,
    hasRole
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
