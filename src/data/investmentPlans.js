export const investmentPlans = [
  {
    id: 1,
    name: 'Starter Plan',
    amount: 2,
    currency: 'USDC',
    duration: 7,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 7, // 1.4%
    status: 'active',
    invested: true,
    color: '#FF8C42'
  },
  {
    id: 2,
    name: 'Basic Plan',
    amount: 5,
    currency: 'USDC',
    duration: 15,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 15, // 3%
    status: 'active',
    invested: true,
    color: '#00D9FF'
  },
  {
    id: 3,
    name: 'Growth Plan',
    amount: 10,
    currency: 'USDC',
    duration: 30,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 30, // 6%
    status: 'active',
    invested: false,
    color: '#00D9FF'
  },
  {
    id: 4,
    name: 'Advanced Plan',
    amount: 100,
    currency: 'USDC',
    duration: 60,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 60, // 12%
    status: 'active',
    invested: false,
    color: '#00D9FF'
  },
  {
    id: 5,
    name: 'Pro Plan',
    amount: 1000,
    currency: 'USDC',
    duration: 120,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 120, // 24%
    status: 'active',
    invested: false,
    color: '#9D4EDD'
  },
  {
    id: 6,
    name: 'Premium Plan',
    amount: 5000,
    currency: 'USDC',
    duration: 180,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 180, // 36%
    status: 'active',
    invested: false,
    color: '#9D4EDD'
  },
  {
    id: 7,
    name: 'Elite Plan',
    amount: 10000,
    currency: 'USDC',
    duration: 240,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 240, // 48%
    status: 'active',
    invested: false,
    color: '#E61FD0'
  },
  {
    id: 8,
    name: 'Platinum Plan',
    amount: 100000,
    currency: 'USDC',
    duration: 365,
    dailyReturn: 0.20,
    totalReturn: 0.20 * 365, // 73%
    status: 'status',
    invested: false,
    color: '#E61FD0'
  }
];

export const calculateReturns = (amount, dailyReturn, duration) => {
  return (amount * dailyReturn * duration) / 100;
};

export const calculateDailyReturns = (amount, dailyReturn) => {
  return (amount * dailyReturn) / 100;
};
