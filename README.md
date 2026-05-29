# V.CON Investor Hub

A modern, responsive investment portfolio management application built with React.js. Manage your investment plans, track portfolio performance, and execute quick actions.

## Features

### 📊 Portfolio Overview
- **Total Portfolio Value**: Real-time portfolio valuation with daily gains
- **Performance Chart**: Interactive line chart showing portfolio trends
- **Active Investments & Cash Balance**: Visual breakdown of your holdings

### 💼 Investment Plans
Eight flexible investment plans with fixed **0.20% daily returns**:

| Plan | Amount | Duration | Total Return |
|------|--------|----------|---------------|
| Starter Plan | 2 USDC | 7 days | 1.4% |
| Basic Plan | 5 USDC | 15 days | 3% |
| Growth Plan | 10 USDC | 30 days | 6% |
| Advanced Plan | 100 USDC | 60 days | 12% |
| Pro Plan | 1,000 USDC | 120 days | 24% |
| Premium Plan | 5,000 USDC | 180 days | 36% |
| Elite Plan | 10,000 USDC | 240 days | 48% |
| Platinum Plan | 100,000 USDC | 365 days | 73% |

### ⚡ Quick Actions
- 💰 **Deposit**: Add funds to your account
- 💳 **Withdraw**: Withdraw your earnings
- ➕ **New Investment**: Start a new investment plan
- 🏆 **Support**: Contact support team

### 📝 Recent Transactions
- View recent investment activities
- Track ROI payments received
- Monitor plan renewals
- Check transaction history

### 📱 Bottom Navigation
- Dashboard
- Markets
- Referrals
- Profile

## Technology Stack

- **React 18**: UI library
- **Recharts**: Data visualization
- **CSS3**: Responsive styling with gradients and animations
- **JavaScript (ES6+)**: Modern JavaScript features

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srinathtudu1472-bit/v-con-project.git
   cd v-con-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
v-con-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PortfolioOverview.js
│   │   ├── InvestmentPlans.js
│   │   ├── QuickActions.js
│   │   ├── RecentTransactions.js
│   │   └── Navigation.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── PortfolioOverview.css
│   │   ├── InvestmentPlans.css
│   │   ├── QuickActions.css
│   │   ├── RecentTransactions.css
│   │   └── Navigation.css
│   ├── data/
│   │   └── investmentPlans.js
│   ├── App.js
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Key Components

### PortfolioOverview
Displays total portfolio value with daily gains and a performance chart using Recharts.

### InvestmentPlans
Shows available investment plans with details like amount, duration, and returns.

### QuickActions
Quick action buttons for common operations (Deposit, Withdraw, etc.).

### RecentTransactions
Lists recent investment activities and transactions.

### Navigation
Bottom navigation bar for switching between pages.

## Styling Features

- **Dark Theme**: Professional dark gradient background
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Color Gradients**: Eye-catching cyan and magenta gradients
- **Smooth Animations**: Hover effects and transitions

## Return Calculation

All plans offer a fixed **0.20% daily return**:

```javascript
Total Return (%) = Daily Return (0.20%) × Duration (days)
Daily Earnings = Investment Amount × 0.20% / 100
```

### Example:
- **Investment**: 1,000 USDC for 120 days
- **Total Return**: 0.20% × 120 = 24%
- **Daily Earnings**: 1,000 × 0.20 / 100 = $2 USDC per day
- **Total Earnings**: $240 USDC

## Responsive Design

The app is fully responsive:
- **Mobile**: Optimized for 320px - 480px
- **Tablet**: Optimized for 480px - 768px
- **Desktop**: Optimized for 768px and above

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time portfolio updates
- [ ] Advanced analytics
- [ ] Push notifications
- [ ] Multi-currency support
- [ ] Transaction history export

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For support, email support@vcon.com or open an issue in the GitHub repository.

## Author

**V.CON Team**
- GitHub: [@srinathtudu1472-bit](https://github.com/srinathtudu1472-bit)

---

**Built with ❤️ by V.CON Team**
