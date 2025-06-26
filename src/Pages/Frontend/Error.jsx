import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/Json/Animation - 1750921702803.json'; // or use online URL method
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EAECED] text-center px-4">
      <div className="max-w-md w-full">
        <Lottie animationData={animationData} loop={true} />
        <h1 className="text-4xl font-bold text-error mt-4">Oops! Page not found</h1>
        <p className="text-gray-600 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">
          <button className="btn btn-primary mt-6">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
