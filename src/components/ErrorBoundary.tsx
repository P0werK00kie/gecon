import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryClass extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-gray-800 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            <div className="space-x-4">
              <button
                onClick={this.handleRetry}
                className="btn btn-primary"
              >
                Try Again
              </button>
              <a
                href="/"
                className="btn btn-secondary"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const ErrorBoundary = (props: Props) => {
  return <ErrorBoundaryClass {...props} />;
};