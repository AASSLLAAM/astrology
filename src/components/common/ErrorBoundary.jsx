import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Crash:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-[#0f0a1e] flex flex-col items-center justify-center p-6 text-center z-50">
          <div className="text-6xl mb-6">🌑</div>
          <h2 className="text-2xl font-bold text-white mb-2">Something aligned wrong</h2>
          <p className="text-gray-400 mb-8 max-w-xs">
            The cosmic energies encountered an error. Let's try realigning.
          </p>
          <button
            onClick={this.handleReload}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Restart Journey
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
