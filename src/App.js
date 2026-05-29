import React, { useState } from 'react';
import './styles/App.css';
import PortfolioOverview from './components/PortfolioOverview';
import InvestmentPlans from './components/InvestmentPlans';
import QuickActions from './components/QuickActions';
import RecentTransactions from './components/RecentTransactions';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">V</span>
            <span className="logo-text">.CON</span>
          </div>
          <span className="investor-hub">INVESTOR HUB</span>
          <div className="header-icons">
            <div className="user-icon">👤</div>
            <div className="notification-icon">🔔</div>
          </div>
        </div>
      </header>

      <main className="app-main">
        {currentPage === 'dashboard' && (
          <div className="dashboard">
            <PortfolioOverview />
            <InvestmentPlans />
            <QuickActions />
            <RecentTransactions />
          </div>
        )}
        {currentPage === 'markets' && <div className="page">Markets Page</div>}
        {currentPage === 'referrals' && <div className="page">Referrals Page</div>}
        {currentPage === 'profile' && <div className="page">Profile Page</div>}
      </main>

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
