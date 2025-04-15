import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { Stethoscope } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center">
            <Stethoscope size={32} className="text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          AI-Frontdesk Huisartsassistent
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Log in om toegang te krijgen tot het systeem
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
