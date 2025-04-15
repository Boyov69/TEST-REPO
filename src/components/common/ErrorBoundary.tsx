import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '../../utils/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component om fouten in de React component boom af te vangen en te tonen
 * Dit voorkomt dat de hele applicatie crasht bij een fout in een component
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state zodat de volgende render het fallback UI toont
    return {
      hasError: true,
      error
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log de fout naar een foutregistratiedienst
    logger.error('ErrorBoundary caught an error', {
      error: error.toString(),
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 bg-red-50 border border-red-100 rounded-lg text-center flex flex-col items-center justify-center min-h-[200px]">
          <div className="text-4xl text-red-500 mb-4">
            <i className="fas fa-exclamation-circle" />
          </div>
          <h3 className="text-xl font-semibold text-red-600 mb-2">Er is iets misgegaan</h3>
          <p className="text-gray-600 mb-6">
            {this.state.error?.message || 'Een onverwachte fout is opgetreden bij het laden van deze component.'}
          </p>
          <button 
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded font-medium transition-colors"
            onClick={() => this.setState({ hasError: false })}
          >
            Probeer opnieuw
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
