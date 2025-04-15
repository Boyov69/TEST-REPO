import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserRole } from '../../types/auth';
import { 
  LayoutDashboard, 
  Calendar, 
  Phone, 
  Stethoscope, 
  Users, 
  Settings, 
  ShieldCheck,
  LogOut,
  User
} from 'lucide-react';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  // Effect voor het detecteren van scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Bepaal welke navigatie-items getoond moeten worden op basis van gebruikersrol
  const getNavigationItems = () => {
    const items = [
      { 
        to: '/dashboard', 
        label: 'Dashboard', 
        icon: <LayoutDashboard size={18} />,
        roles: ['doctor', 'assistant', 'admin', 'super-admin'] 
      },
      { 
        to: '/appointments', 
        label: 'Afspraken', 
        icon: <Calendar size={18} />,
        roles: ['doctor', 'assistant', 'admin', 'super-admin'] 
      },
      { 
        to: '/calls', 
        label: 'Telefoon', 
        icon: <Phone size={18} />,
        roles: ['doctor', 'assistant', 'admin', 'super-admin'] 
      },
      { 
        to: '/triage', 
        label: 'Triage', 
        icon: <Stethoscope size={18} />,
        roles: ['doctor', 'assistant', 'admin', 'super-admin'] 
      },
      { 
        to: '/patients', 
        label: 'Patiënten', 
        icon: <Users size={18} />,
        roles: ['doctor', 'assistant', 'admin', 'super-admin'] 
      },
      { 
        to: '/settings', 
        label: 'Instellingen', 
        icon: <Settings size={18} />,
        roles: ['admin', 'super-admin'] 
      },
      { 
        to: '/admin', 
        label: 'Beheer', 
        icon: <ShieldCheck size={18} />,
        roles: ['super-admin'] 
      },
    ];

    return items.filter(item => 
      user?.role && item.roles.includes(user.role as UserRole)
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md' 
        : 'bg-white/70 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="text-xl font-bold text-indigo-600">AI-Frontdesk</div>
        </div>
        
        <div className="flex space-x-6">
          {getNavigationItems().map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                flex items-center text-base font-medium px-1 py-2 border-b-2 
                ${isActive 
                  ? 'text-indigo-600 border-indigo-600' 
                  : 'text-gray-700 border-transparent hover:text-indigo-600 hover:border-indigo-300'}
                transition-colors
              `}
            >
              <span className="mr-1.5">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-700">{user?.name || 'Gebruiker'}</div>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {user?.avatar ? (
              <img src={user.avatar} alt={user?.name || 'Gebruiker'} className="w-full h-full object-cover" />
            ) : (
              <User size={16} className="text-gray-500" />
            )}
          </div>
          <button 
            onClick={logout}
            className="text-gray-500 hover:text-indigo-600 transition-colors"
            aria-label="Uitloggen"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
