import React from 'react';
import { investmentPlans } from '../data/investmentPlans';
import '../styles/InvestmentPlans.css';

const InvestmentPlans = () => {
  // Show only first 3 plans in main view
  const displayPlans = investmentPlans.slice(0, 3);

  return (
    <div className="investment-plans">
      <h3>My Investment Plans</h3>
      <div className="plans-grid">
        {displayPlans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${plan.invested ? 'invested' : ''}`}
            style={{ borderColor: plan.color }}
          >
            <div className="plan-header">
              <h4>{plan.name}</h4>
            </div>

            <div className="plan-body">
              <div className="plan-amount">
                ${plan.amount}
                <span className="plan-currency">{plan.currency}</span>
              </div>

              <div className="plan-details">
                <div className="detail-row">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{plan.duration} days</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Daily Return:</span>
                  <span className="detail-value">{plan.dailyReturn}%</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Total Return:</span>
                  <span className="detail-value highlight">{plan.totalReturn.toFixed(1)}%</span>
                </div>
              </div>

              <div className="plan-status">
                {plan.invested ? (
                  <span className="status-badge invested">INVESTED</span>
                ) : (
                  <span className="status-badge status">STATUS</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-plans">
        <a href="#all-plans">View All Plans ({investmentPlans.length}) →</a>
      </div>
    </div>
  );
};

export default InvestmentPlans;
