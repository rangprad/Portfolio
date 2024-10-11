import React from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"> {/* Darker overlay */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 relative"> {/* Dark modal background */}
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-white transition" onClick={onClose}>
          &times;
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Email</label>
            <input 
              type="email" 
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-500" 
              placeholder="Enter your email" 
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Password</label>
            <input 
              type="password" 
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-500" 
              placeholder="Enter your password" 
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
