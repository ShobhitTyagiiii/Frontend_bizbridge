import React from 'react';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Freelance World!</h1>
          <p className="text-lg text-gray-600">
            Find talented freelancers or showcase your skills to clients worldwide.
          </p>
    
       <button onClick={()=>{
        window.location.href = '/signup';
       }} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
