import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/Json/Login.json'; // Replace with your Register animation JSON

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }

    alert(`Registering with Email: ${email} and Password: ${password}`);
  };

  const handleGoogleRegister = () => {
    alert('Google register clicked');
  };

  const handleGithubRegister = () => {
    alert('GitHub register clicked');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>

        <form onSubmit={handleFormSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Register with Email
          </button>
        </form>

        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500 font-semibold">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleRegister}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-17.5-1.5-34.3-4.3-50.6H272v95.8h146.9c-6.3 34.2-25.7 63.2-54.8 82.6v68h88.7c51.9-47.9 81.7-118.3 81.7-195.8z"
              />
              <path
                fill="#34A853"
                d="M272 544.3c73.8 0 135.8-24.5 181-66.4l-88.7-68c-24.6 16.5-56.1 26.3-92.3 26.3-70.9 0-131-47.9-152.5-112.2H29.9v70.4c45.4 90.4 138.6 150 242.1 150z"
              />
              <path
                fill="#FBBC05"
                d="M119.5 323.9c-10.6-31.9-10.6-66.4 0-98.3V155.2H29.9c-37.8 75.7-37.8 165.3 0 241l89.6-72.3z"
              />
              <path
                fill="#EA4335"
                d="M272 107.7c39.9 0 75.7 13.7 103.9 40.5l77.8-77.8C407.8 24.5 345.8 0 272 0 168.6 0 75.4 59.6 29.9 150.1l89.6 70.4c21.5-64.3 81.6-112.8 152.5-112.8z"
              />
            </svg>
            Google
          </button>

          <button
            onClick={handleGithubRegister}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0.297C5.37 0.297 0 5.667 0 12.297c0 5.293 3.438 9.79 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.832 2.807 1.302 3.492.996.108-.775.42-1.302.762-1.602-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.403c1.02.005 2.045.138 3 .403 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.922.435.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.21.695.825.575C20.565 22.08 24 17.584 24 12.297c0-6.63-5.37-12-12-12" />
            </svg>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
