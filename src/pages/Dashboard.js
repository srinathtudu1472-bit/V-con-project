import React from 'react';
import useAuth from '../hooks/useAuth';
import PortfolioOverview from '../components/PortfolioOverview';
import InvestmentPlans from '../components/InvestmentPlans';
import QuickActions from '../components/QuickActions';
import RecentTransactions from '../components/RecentTransactions';
import Navigation from '../components/Navigation';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [currentPage, setCurrentPage] = React.useState('dashboard');

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
            <div className="user-menu">
              <button className="user-button" title={user?.email}>
                👤
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <p className="user-email">{user?.email}</p>
                </div>
                <div className="dropdown-divider"></div>
                <button onClick={logout} className="dropdown-item logout-btn">
                  Logout
                </button>
              </div>
            </div>
            <button className="notification-button">🔔</button>
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
};

export default Dashboard;
