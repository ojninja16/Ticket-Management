import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">Ticket Management System</Link>
        <div className="flex items-center">
          {currentUser ? (
            <div className="flex items-center">
              <span className="text-white mr-4">{currentUser.email}</span>
              <button onClick={logout} className="text-white border border-white rounded px-4 py-2 transition duration-300 hover:bg-white hover:text-gray-800">Logout</button>
            </div>
          ) : (
            <div className="flex items-center mx-auto ">
              <Link to="/login" className="text-white mr-4 mx-2">Login</Link>
              <Link to="/register" className="text-white border border-white rounded px-4 py-2 transition duration-300 hover:bg-white hover:text-gray-800">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
