// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-900 text-amber-300">
      <h1 className="text-9xl font-bold text-indigo-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-2 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
        <Link to="/">Go back Home</Link>
      </Button>
    </div>
  );
}