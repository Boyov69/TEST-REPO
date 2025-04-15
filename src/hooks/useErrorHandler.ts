import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { logger } from '../utils/logger';

type ErrorState = {
  message: string;
  code?: string | number;
  isError: boolean;
};

type ErrorHandlerReturn = {
  error: ErrorState;
  handleError: (error: unknown) => void;
  clearError: () => void;
};

/**
 * Hook voor het consistent afhandelen en weergeven van fouten in de applicatie
 */
export const useErrorHandler = (): ErrorHandlerReturn => {
  const [error, setError] = useState<ErrorState>({
    message: '',
    isError: false
  });

  const handleError = useCallback((err: unknown) => {
    let errorMessage = 'Er is een onbekende fout opgetreden';
    let errorCode: string | number | undefined;

    // Axios error handling
    if (err instanceof AxiosError) {
      const status = err.response?.status;
      const data = err.response?.data;
      
      errorCode = status;
      
      if (data?.message) {
        errorMessage = data.message;
      } else if (status === 401) {
        errorMessage = 'U bent niet geautoriseerd. Log opnieuw in.';
      } else if (status === 403) {
        errorMessage = 'U heeft geen toegang tot deze functionaliteit.';
      } else if (status === 404) {
        errorMessage = 'De opgevraagde gegevens zijn niet gevonden.';
      } else if (status && status >= 500) {
        errorMessage = 'Er is een probleem met de server. Probeer het later opnieuw.';
      }
    } 
    // Standaard JavaScript Error
    else if (err instanceof Error) {
      errorMessage = err.message;
    }

    // Log de fout voor debugging
    logger.error('Application error:', {
      message: errorMessage,
      code: errorCode,
      originalError: err
    });

    // Update error state
    setError({
      message: errorMessage,
      code: errorCode,
      isError: true
    });
  }, []);

  const clearError = useCallback(() => {
    setError({
      message: '',
      isError: false
    });
  }, []);

  return { error, handleError, clearError };
};
