import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Ensure this file exists

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <img
          src="https://img.icons8.com/color/96/000000/brainstorm-skill.png"
          alt="FocusHuddle Logo"
          className="home-logo"
        />
        <h1 className="home-title">FocusHuddle</h1>
        <p className="home-subtitle">Your space to focus, grow, and stay productive.</p>
      </header>

      {/* Main Content */}
      <main className="home-main">
        <div className="home-buttons">
          <Link to="/dashboard" className="home-btn purple">Go to Dashboard</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>
          &copy; {new Date().getFullYear()} FocusHuddle — Stay focused, stay strong!
        </p>
      </footer>
    </div>
  );
}

export default Home;
