import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h1 className="text-9xl font-extrabold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#008264] hover:bg-[#008264]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008264]"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};
