import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { ToastContainer,toast } from 'react-toastify';
import api from '../services/api';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const history = useNavigate();
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(username, email, password);
      toast.success('Registration successful! Please login to continue.');
      history('/login');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="flex items-center  justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h1 className="text-xl font-bold text-left  text-slate-600">Signup</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="bg-gray-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              className=" bg-gray-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="bg-gray-200 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-gray-400 border border-transparent rounded-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegistrationForm;
