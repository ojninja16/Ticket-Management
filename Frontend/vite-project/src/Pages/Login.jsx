import React from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className=" max-w-full w-full bg-white shadow-md rounded-md p-8">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
