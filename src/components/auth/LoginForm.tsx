import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { LoginCredentials } from '../../types/auth';
import { ErrorMessage } from '../common/ErrorMessage';
import { Button } from '../common/Button';
import { TextField } from '../common/TextField';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, Github, Apple } from 'lucide-react';

// Schema voor validatie
const loginSchema = yup.object({
  email: yup
    .string()
    .email('Voer een geldig e-mailadres in')
    .required('E-mail is verplicht'),
  password: yup
    .string()
    .required('Wachtwoord is verplicht')
    .min(8, 'Wachtwoord moet minimaal 8 karakters bevatten'),
}).required();

const LoginForm = () => {
  const { login, loginWithGoogle, loginWithGithub, loginWithApple } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);
      await login(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Er is een onbekende fout opgetreden');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await loginWithGoogle();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Er is een onbekende fout opgetreden');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await loginWithGithub();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Er is een onbekende fout opgetreden');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await loginWithApple();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Er is een onbekende fout opgetreden');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">AI-Frontdesk Login</h2>
        <p className="text-gray-600 mt-2">Log in om toegang te krijgen tot het systeem</p>
      </div>
      
      <div className="flex flex-col space-y-3 mb-6">
        <button 
          onClick={handleGoogleLogin} 
          disabled={loading}
          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
              <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
              <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
              <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
            </g>
          </svg>
          Inloggen met Google
        </button>
        
        <button 
          onClick={handleGithubLogin} 
          disabled={loading}
          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Github size={20} className="mr-2" />
          Inloggen met GitHub
        </button>
        
        <button 
          onClick={handleAppleLogin} 
          disabled={loading}
          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Apple size={20} className="mr-2" />
          Inloggen met Apple
        </button>
      </div>
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">of</span>
        </div>
      </div>
      
      {error && <ErrorMessage className="mb-4">{error}</ErrorMessage>}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <TextField
            label="E-mail"
            type="email"
            leftIcon={<Mail size={18} className="text-gray-400" />}
            fullWidth
            {...register('email')}
            error={errors.email?.message}
          />
        </div>
        
        <div>
          <TextField
            label="Wachtwoord"
            type="password"
            leftIcon={<Lock size={18} className="text-gray-400" />}
            fullWidth
            {...register('password')}
            error={errors.password?.message}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Onthoud mij
            </label>
          </div>
          
          <Link to="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Wachtwoord vergeten?
          </Link>
        </div>
        
        <Button 
          type="submit" 
          fullWidth 
          isLoading={loading}
          rightIcon={<LogIn size={18} />}
        >
          Inloggen
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
