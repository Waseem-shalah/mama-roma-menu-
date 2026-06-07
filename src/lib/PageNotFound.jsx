import { useLocation, Link } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! We couldn't find the page: <span className="font-mono bg-gray-100 p-1 text-sm">{location.pathname}</span>
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-primary text-white rounded-md hover:opacity-90 transition-opacity"
      >
        Go back to MamaRoma Home
      </Link>
    </div>
  );
}