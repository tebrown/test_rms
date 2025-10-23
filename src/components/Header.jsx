import React from 'react';
import './Header.css';

const Header = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'cad', label: 'CAD Incidents', icon: '🚨' },
    { id: 'nfirs', label: 'NFIRS Reports', icon: '📝' },
    { id: 'apparatus', label: 'Apparatus', icon: '🚒' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">🔥</div>
          <div className="logo-text">
            <h1>Fire RMS</h1>
            <p className="text-muted">Records Management System</p>
          </div>
        </div>
        
        <nav className="nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <div className="user-info">
            <span className="user-name">Chief Rodriguez</span>
            <span className="badge success">Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
