import { Link, useRouteError } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError() as { statusText?: string }; // Using optional chaining
  console.error(error);
  
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600 lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{" "}
              {error?.statusText || 'Not Found'} 
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to="/"
              className="px-5 py-2 text-blue-100 bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
