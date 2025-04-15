import React from 'react';
import NavigationBar from './NavigationBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      <main className="pt-20 pb-12 px-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
};
