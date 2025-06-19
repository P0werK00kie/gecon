import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for could not be found."
        canonicalUrl="https://gecon.com/404"
        noindex={true}
      />
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-[#075f2c] mb-4">404</h1>
        <h2 className="text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="btn btn-primary"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;