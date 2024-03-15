// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';
import isAuthenticated from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token } = response.data;
      // Store token in local storage or cookies for future requests
      localStorage.setItem('token', token);
      toast.success("Successfully logged in!");
      // Set current user based on token (if necessary)
      setCurrentUser(/* user data if needed */);
    } catch (error) {
      // Handle login errors (e.g., display error message from API)
      const errorMessage = error.response.data.message || 'Login failed';
      console.log(errorMessage);
      toast.error(errorMessage);
      throw new Error('Login failed');
    }
  };

  const register = async (username, email, password) => {
    try {
      console.log('Registration Data:', { username, email, password });
      const response = await api.post('/auth/register', { username, email, password });
      const { token } = response.data;
      // Store token in local storage or cookies for future requests
      localStorage.setItem('token', token);
      toast.success("Registration successful!");
      // Set current user based on token (if necessary)
      setCurrentUser(/* user data if needed */);
    } catch (error) {
      // Handle registration errors (e.g., display error message from API)
      const errorMessage = error.response.data.message || 'Registration failed';
      toast.error(errorMessage);
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    // Remove token from local storage or cookies
    localStorage.removeItem('token');
    // Set current user to null
    setCurrentUser(null);
    navigate('/');
  };

  // Encapsulate JSX within a React component
  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;