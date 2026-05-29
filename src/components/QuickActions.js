import React from 'react';
import '../styles/QuickActions.css';

const QuickActions = () => {
  const actions = [
    { id: 1, icon: '💰', label: 'Deposit', color: '#1DB854' },
    { id: 2, icon: '💳', label: 'Withdraw', color: '#0066FF' },
    { id: 3, icon: '➕', label: 'New Investment', color: '#9D4EDD' },
    { id: 4, icon: '🏆', label: 'Support', color: '#FFB84D' }
  ];

  const handleAction = (action) => {
    alert(`${action} clicked!`);
  };

  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action) => (
          <button
            key={action.id}
            className="action-button"
            style={{ backgroundColor: action.color }}
            onClick={() => handleAction(action.label)}
          >
            <div className="action-icon">{action.icon}</div>
            <div className="action-label">{action.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
