import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-green-600">404</h1>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=300&auto=format&fit=crop"
            alt="Confused farmer"
            className="w-64 h-64 object-cover rounded-full mx-auto opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
