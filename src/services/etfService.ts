import { toast } from "sonner";

export interface ETF {
  info: {
    symbol: string;
    companyName: string;
    industry?: string;
    activeSeries: string[];
    debtSeries: any[]; // Assuming it can be various types based on context
    isFNOSec: boolean;
    isCASec: boolean;
    isSLBSec: boolean;
    isDebtSec: boolean;
    isSuspended: boolean;
    tempSuspendedSeries: any[];
    isETFSec: boolean;
    isDelisted: boolean;
    isin: string;
    slb_isin: string;
    listingDate: string;
    isMunicipalBond: boolean;
    isHybridSymbol: boolean;
    isTop10: boolean;
    identifier: string;
  };
  metadata: {
    series: string;
    symbol: string;
    isin: string;
    status: string;
    listingDate: string;
    industry: string;
    lastUpdateTime: string;
    pdSectorPe: string;
    pdSymbolPe: string;
    pdSectorInd: string;
    pdSectorIndAll: string;
  };
  securityInfo: {
    boardStatus: string;
    tradingStatus: string;
    tradingSegment: string;
    sessionNo: string;
    slb: string;
    classOfShare: string;
    derivatives: string;
    surveillance: {
      surv: string | null;
      desc: string | null;
    };
    faceValue: number;
    issuedSize: number;
  };
  sddDetails: {
    SDDAuditor: string;
    SDDStatus: string;
  };
  currentMarketType: string;
  priceInfo: {
    lastPrice: number;
    change: number;
    pChange: number;
    previousClose: number;
    open: number;
    close: number;
    vwap: number;
    stockIndClosePrice: number;
    lowerCP: string;
    upperCP: string;
    pPriceBand: string;
    basePrice: number;
    intraDayHighLow: {
      min: number;
      max: number;
      value: number;
    };
    weekHighLow: {
      min: number;
      minDate: string;
      max: number;
      maxDate: string;
      value: number;
    };
    iNavValue?: string;
    checkINAV: boolean;
    tickSize: number;
    ieq: string;
  };
  industryInfo: {
    macro: string;
    sector: string;
    industry: string;
    basicIndustry: string;
  };
  preOpenMarket: {
    preopen: any[];
    ato: {
      buy: number;
      sell: number;
    };
    IEP: number;
    totalTradedVolume: number;
    finalPrice: number;
    finalQuantity: number;
    lastUpdateTime: string | null;
    totalBuyQuantity: number;
    totalSellQuantity: number;
    atoBuyQty: number;
    atoSellQty: number;
    Change: number;
    perChange: number;
    prevClose: number;
  };
}

const API_BASE_URL = 'https://nse-server.vercel.app';
const ITEMS_PER_PAGE = 20;

export const fetchETFData = async (page: number = 1): Promise<{ etfs: ETF[]; total: number }> => {
  try {
    // Fetch list of all ETFs
    const response = await fetch(`${API_BASE_URL}/api/etfs`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch ETF list');
    }
    
    const etfList = await response.json();
    console.log('ETF List Response:', etfList);
    const total = etfList.length;
    
    // Calculate start and end indices for pagination
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedList = etfList.slice(startIndex, endIndex);
    console.log('Paginated List:', paginatedList);
    
    // Fetch detailed data for paginated ETFs
    const etfDetails = await Promise.all(
      paginatedList.map(async (etf: { symbol: string; name: string }) => {
        try {
          // Skip invalid symbols
          if (!etf.symbol || etf.symbol === '"') {
            console.warn(`Skipping invalid symbol: ${etf.symbol}`);
            return null;
          }

          const detailResponse = await fetch(`${API_BASE_URL}/api/equity/${etf.symbol}`);
          if (!detailResponse.ok) {
            console.error(`Failed to fetch details for ${etf.symbol}`);
            return null;
          }
          const detail = await detailResponse.json();
          console.log(`Details for ${etf.symbol}:`, detail);
          
          // Validate required fields
          if (!detail?.info?.companyName) {
            console.warn(`Missing company name for ${etf.symbol}`);
            return null;
          }

          return detail;
        } catch (error) {
          console.error(`Error fetching details for ${etf.symbol}:`, error);
          return null;
        }
      })
    );
    
    // Filter out any failed fetches
    const validEtfs = etfDetails.filter((etf): etf is ETF => etf !== null);
    console.log('Final valid ETFs:', validEtfs);
    
    if (validEtfs.length === 0) {
      toast.error("No valid ETF data found. Please try again later.");
    }
    
    return { etfs: validEtfs, total };
  } catch (error) {
    console.error('Error fetching ETF data:', error);
    toast.error("Failed to load ETF data. Please try again later.");
    return { etfs: [], total: 0 };
  }
};

export const getETFByTicker = async (ticker: string): Promise<ETF | undefined> => {
  try {
    // Skip invalid symbols
    if (!ticker || ticker === '"') {
      console.warn(`Invalid ticker symbol: ${ticker}`);
      return undefined;
    }

    const response = await fetch(`${API_BASE_URL}/api/etfs`);
    if (!response.ok) {
      throw new Error('Failed to fetch ETF list');
    }
    
    const etfList = await response.json();
    const etfInfo = etfList.find((etf: { symbol: string; name: string }) => etf.symbol === ticker);
    
    if (!etfInfo) {
      console.warn(`ETF not found in list: ${ticker}`);
      return undefined;
    }

    const detailResponse = await fetch(`${API_BASE_URL}/api/equity/${ticker}`);
    if (!detailResponse.ok) {
      throw new Error('Failed to fetch ETF details');
    }
    
    const detail = await detailResponse.json();
    
    // Validate required fields
    if (!detail?.info?.companyName) {
      console.warn(`Missing company name for ${ticker}`);
      return undefined;
    }

    return detail;
  } catch (error) {
    console.error('Error fetching ETF details:', error);
    toast.error("Failed to load ETF details. Please try again later.");
    return undefined;
  }
};

export const getUniqueValues = (etfs: ETF[], path: string): string[] => {
  const valuesSet = new Set<string>();
  
  etfs.forEach(etf => {
    const value = path.split('.').reduce((obj, key) => obj?.[key], etf as any);
    
    if (Array.isArray(value)) {
      value.forEach(v => valuesSet.add(v));
    } else if (typeof value === 'string' && value) {
      valuesSet.add(value);
    }
  });
  
  return Array.from(valuesSet).sort();
};
