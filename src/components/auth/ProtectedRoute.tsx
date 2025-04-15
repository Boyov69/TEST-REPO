import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LoadingSpinner } from '../common/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRoles 
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size={60} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRoles && requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.includes(user.role);
    if (!hasRequiredRole) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Toegang geweigerd</h1>
            <p className="text-gray-600 mb-6">
              U heeft niet de juiste rechten om deze pagina te bekijken.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Ga terug
            </button>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
