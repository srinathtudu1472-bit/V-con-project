import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'markets', icon: '📈', label: 'Markets' },
    { id: 'referrals', icon: '👥', label: 'Referrals' },
    { id: 'profile', icon: '👤', label: 'Profile' }
  ];

  return (
    <nav className="bottom-navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => setCurrentPage(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
