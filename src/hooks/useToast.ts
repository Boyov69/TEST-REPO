import { useCallback } from 'react';
import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'warning' | 'info';
type ToastParams = {
  message: string;
  type?: ToastType;
  options?: ToastOptions;
};

/**
 * Hook om consistent toast notificaties te tonen in de applicatie
 */
export const useToast = () => {
  const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const showToast = useCallback(({ message, type = 'info', options = {} }: ToastParams) => {
    const mergedOptions = { ...defaultOptions, ...options };

    switch (type) {
      case 'success':
        toast.success(message, mergedOptions);
        break;
      case 'error':
        toast.error(message, mergedOptions);
        break;
      case 'warning':
        toast.warning(message, mergedOptions);
        break;
      case 'info':
      default:
        toast.info(message, mergedOptions);
        break;
    }
  }, []);

  const success = useCallback((message: string, options?: ToastOptions) => {
    showToast({ message, type: 'success', options });
  }, [showToast]);

  const error = useCallback((message: string, options?: ToastOptions) => {
    showToast({ message, type: 'error', options });
  }, [showToast]);

  const warning = useCallback((message: string, options?: ToastOptions) => {
    showToast({ message, type: 'warning', options });
  }, [showToast]);

  const info = useCallback((message: string, options?: ToastOptions) => {
    showToast({ message, type: 'info', options });
  }, [showToast]);

  return {
    showToast,
    success,
    error,
    warning,
    info
  };
};
