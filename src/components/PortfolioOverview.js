import React, { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import '../styles/PortfolioOverview.css';

const PortfolioOverview = () => {
  const [portfolioValue, setPortfolioValue] = useState(10500.75);
  const [dailyGain, setDailyGain] = useState(320.10);
  const [gainPercentage, setGainPercentage] = useState(3.15);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Generate chart data
    const data = [];
    for (let i = 0; i < 30; i++) {
      data.push({
        day: i,
        value: 8000 + Math.random() * 3000 + i * 80
      });
    }
    setChartData(data);
  }, []);

  return (
    <div className="portfolio-overview">
      <div className="portfolio-header">
        <h2>Portfolio Overview</h2>
      </div>

      <div className="portfolio-stats">
        <div className="stat">
          <label>Total Portfolio Value:</label>
          <div className="stat-value">${portfolioValue.toFixed(2)}</div>
          <div className="stat-change positive">
            ↑ +${dailyGain.toFixed(2)} ({gainPercentage.toFixed(2)}%) Today
          </div>
        </div>

        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot active"></span>
            <span>Active Investments</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot cash"></span>
            <span>Cash Balance</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#gradient)"
              strokeWidth={2}
              dot={false}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D9FF" />
                <stop offset="100%" stopColor="#E61FD0" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioOverview;
