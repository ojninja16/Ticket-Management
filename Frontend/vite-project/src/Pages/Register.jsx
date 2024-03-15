import React from 'react';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-6">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
