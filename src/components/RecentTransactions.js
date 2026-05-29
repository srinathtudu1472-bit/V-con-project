import React from 'react';
import '../styles/RecentTransactions.css';

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      type: 'ROI Payment Received',
      date: 'May 15, 2023',
      amount: -1500.00,
      icon: '💚',
      color: '#1DB854'
    },
    {
      id: 2,
      type: 'Plan Renewed',
      date: 'May 13, 2023',
      amount: null,
      status: 'Renewed',
      icon: '🔄',
      color: '#0066FF'
    },
    {
      id: 3,
      type: 'ROI Payment Received',
      date: 'May 1, 2023',
      amount: -500.00,
      icon: '💜',
      color: '#9D4EDD'
    }
  ];

  return (
    <div className="recent-transactions">
      <div className="transactions-header">
        <h3>Recent Transactions</h3>
        <a href="#all-transactions" className="see-all">See all</a>
      </div>

      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon" style={{ backgroundColor: transaction.color }}>
              {transaction.icon}
            </div>

            <div className="transaction-info">
              <div className="transaction-type">{transaction.type}</div>
              <div className="transaction-date">{transaction.date}</div>
            </div>

            <div className="transaction-amount">
              {transaction.amount !== null ? (
                <span className={transaction.amount < 0 ? 'negative' : 'positive'}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
              ) : (
                <span className="status-text">{transaction.status}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
