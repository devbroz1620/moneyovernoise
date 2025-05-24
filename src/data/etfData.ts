
export interface ETFDetails {
  ticker: string;
  name: string;
  description: string;
  aum: string;
  expenseRatio: string;
  navValue: string;
  inceptionDate: string;
  benchmark: string;
  fund_house: string;
  category: string;
  holdings: Array<{
    company: string;
    weight: string;
  }>;
  performance: {
    '1Day': string;
    '1Week': string;
    '1Month': string;
    '3Month': string;
    '6Month': string;
    '1Year': string;
    '3Year': string;
    '5Year': string;
  };
  dividendYield: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  minimumInvestment: string;
}

export const etfData: Record<string, ETFDetails> = {
  'JUNIORBEES': {
    ticker: 'JUNIORBEES',
    name: 'Nippon India Nifty Junior Bees ETF',
    description: 'Tracks the Nifty Next 50 Index — emerging large-cap leaders of India. Provides exposure to the next 50 largest companies after the Nifty 50.',
    aum: '₹8,000+ Cr',
    expenseRatio: '0.22%',
    navValue: '₹412.50',
    inceptionDate: '15-Jan-2003',
    benchmark: 'Nifty Next 50 Index',
    fund_house: 'Nippon India Mutual Fund',
    category: 'Equity - Large Cap',
    holdings: [
      { company: 'Adani Ports and SEZ', weight: '8.2%' },
      { company: 'JSW Steel', weight: '4.8%' },
      { company: 'Bajaj Finserv', weight: '4.5%' },
      { company: 'SBI Life Insurance', weight: '4.1%' },
      { company: 'Grasim Industries', weight: '3.9%' },
      { company: 'ICICI Prudential Life', weight: '3.7%' },
      { company: 'Apollo Hospitals', weight: '3.5%' },
      { company: 'Shree Cement', weight: '3.2%' },
      { company: 'Siemens', weight: '3.1%' },
      { company: 'Jindal Steel & Power', weight: '2.9%' }
    ],
    performance: {
      '1Day': '+0.85%',
      '1Week': '+2.34%',
      '1Month': '+5.67%',
      '3Month': '+12.45%',
      '6Month': '+18.92%',
      '1Year': '+24.78%',
      '3Year': '+15.23%',
      '5Year': '+12.89%'
    },
    dividendYield: '1.45%',
    riskLevel: 'Medium',
    minimumInvestment: '₹1'
  },
  'GOLDBEES': {
    ticker: 'GOLDBEES',
    name: 'Nippon India ETF Gold BeES',
    description: 'Invests in physical gold, offering a hedge against inflation and market volatility. Provides exposure to gold prices without the hassle of physical storage.',
    aum: '₹7,000+ Cr',
    expenseRatio: '0.81%',
    navValue: '₹45.20',
    inceptionDate: '12-Mar-2007',
    benchmark: 'Gold Price',
    fund_house: 'Nippon India Mutual Fund',
    category: 'Commodity - Gold',
    holdings: [
      { company: 'Physical Gold', weight: '100%' }
    ],
    performance: {
      '1Day': '+0.12%',
      '1Week': '+1.56%',
      '1Month': '+3.89%',
      '3Month': '+8.34%',
      '6Month': '+12.67%',
      '1Year': '+15.45%',
      '3Year': '+9.78%',
      '5Year': '+8.12%'
    },
    dividendYield: '0%',
    riskLevel: 'Low',
    minimumInvestment: '₹1'
  },
  'HDFCSMALLCAP250': {
    ticker: 'HDFCSMALLCAP250',
    name: 'HDFC Nifty Smallcap 250 ETF',
    description: 'Exposure to high-growth Indian smallcap companies via the Nifty Smallcap 250 index. Ideal for investors seeking aggressive growth potential.',
    aum: '₹1,500 Cr',
    expenseRatio: '0.30%',
    navValue: '₹28.75',
    inceptionDate: '20-Sep-2019',
    benchmark: 'Nifty Smallcap 250 Index',
    fund_house: 'HDFC Asset Management',
    category: 'Equity - Small Cap',
    holdings: [
      { company: 'Kalyan Jewellers', weight: '1.8%' },
      { company: 'Rail Vikas Nigam', weight: '1.6%' },
      { company: 'Indian Railway Finance', weight: '1.5%' },
      { company: 'SJVN', weight: '1.4%' },
      { company: 'REC', weight: '1.3%' },
      { company: 'NHPC', weight: '1.2%' },
      { company: 'PFC', weight: '1.1%' },
      { company: 'Cochin Shipyard', weight: '1.0%' },
      { company: 'RVNL', weight: '0.9%' },
      { company: 'Garden Reach Shipbuilders', weight: '0.8%' }
    ],
    performance: {
      '1Day': '+1.23%',
      '1Week': '+3.45%',
      '1Month': '+8.92%',
      '3Month': '+18.67%',
      '6Month': '+28.45%',
      '1Year': '+42.78%',
      '3Year': '+22.34%',
      '5Year': 'N/A'
    },
    dividendYield: '0.89%',
    riskLevel: 'High',
    minimumInvestment: '₹1'
  }
};
