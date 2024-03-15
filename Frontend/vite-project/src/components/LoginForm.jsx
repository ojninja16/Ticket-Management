import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import isAuthenticated from '../utils/auth';
import { ToastContainer,toast } from 'react-toastify';

function LoginForm() {
  const { login } = useAuth();
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      var res=await login(email, password);
      if (isAuthenticated()) {
        toast.success("Successfully logged in!" );
        history('/tickets');
      }
    } catch (error) {
      // Handle login errors
      console.error('Login error:',res.msg );
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" max-w-xs mx-auto">
        <div className="bg-gray-200 shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold text-left mb-4 text-black">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-gray-400 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-400 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="bg-gray-400 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;