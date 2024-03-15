import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex items-center justify-center mx-2 ">
      <div className="text-center  w-full mx-2">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          <span className="text-blue-900">Welcome</span> to Ticket Management System
        </h1>
        <p className="text-lg text-gray-700 mb-4">A simplified solution for managing your tickets</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-4 transition duration-300">Easy To Use </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Efficient</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
