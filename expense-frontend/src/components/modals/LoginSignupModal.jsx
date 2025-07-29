import React, { useState } from 'react';

export function LoginSignupModal({ onAuth, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful auth
    onAuth({
      id: 1,
      name: isLogin ? 'Demo User' : formData.name,
      email: isLogin ? 'demo@example.com' : formData.email,
      profileImage: null
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto flex items-center justify-center">
            <span className="text-white font-bold text-2xl">E</span>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">ExpenseFlow</h1>
          <p className="mt-2 text-gray-600">Track your expenses with ease</p>
        </div>

        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`pb-2 px-4 ${
              isLogin
                ? 'border-b-2 border-teal-500 text-teal-600'
                : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`pb-2 px-4 ${
              !isLogin
                ? 'border-b-2 border-teal-500 text-teal-600'
                : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {isLogin && (
          <p className="mt-4 text-center text-sm text-gray-600">
            For demo purposes, you can login without entering credentials
          </p>
        )}
      </div>
    </div>
  );
}
