import { Link, useLocation, useRouteError } from "react-router-dom";

function NotFound() {
  const location = useLocation(); 
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <div className="text-red-500 italic mb-4">
        {error && (
            <p>
              Error Details: <span>{error.statusText || error.message}</span>
            </p>
        )}
      </div>

      <p className="text-lg text-gray-600 mb-6">
        The URL <span className="text-red-700 font-bold">{location.pathname}</span> does not exist.
      </p>

      <Link
        to="/"
        className="bg-[#3bc4e1] text-white px-6 py-3 rounded-lg shadow hover:bg-[#289bb5] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
