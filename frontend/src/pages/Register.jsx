import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded-md" type="text" placeholder="Username" />
          <input className="w-full p-3 border rounded-md" type="email" placeholder="Email" />
          <input className="w-full p-3 border rounded-md" type="password" placeholder="Password" />
          <button className="btn btn-purple w-full">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
