// src/pages/Dashboard.jsx
import React from 'react';
import '../styles/Dashboard.css';
import TimerCard from '../components/TimerCard';
import StatsCard from '../components/StatsCard';
import QuoteCard from '../components/QuoteCard';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <Link to="/" className="home-link" title="Home">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div className="dashboard-header-center">
          <img
            src="https://img.icons8.com/color/96/000000/brainstorm-skill.png"
            alt="FocusHuddle Logo"
            className="dashboard-logo"
          />
          <h1 className="dashboard-title">FocusHuddle</h1>
          <p className="dashboard-subtitle">Your productivity, reimagined.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div className="dashboard-card purple">
            <TimerCard />
          </div>
          <div className="dashboard-card pink">
            <StatsCard />
          </div>
          <div className="dashboard-card blue">
            <QuoteCard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>
          &copy; {new Date().getFullYear()} FocusHuddle — Stay productive and inspired!
        </p>
        <div className="dashboard-footer-icons">
          <a href= "https://github.com/Vishal21042004" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:vishalkadalagi2004@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
