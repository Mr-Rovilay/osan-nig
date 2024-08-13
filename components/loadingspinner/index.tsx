"use client"
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <FaSpinner className="animate-spin h-5 w-5 text-white inline-block" />
    </div>
  );
};

export default LoadingSpinner;
