import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200">
        {/* Navbar removed all links */}
        <nav className="flex justify-end px-6 py-4 bg-white shadow-md">
          {/* Navigation buttons removed as requested */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
