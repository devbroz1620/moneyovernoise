
import { toast } from "sonner";

export interface ETF {
  name: string;
  ticker: string;
  amc: string;
  category: string;
  subcategory: string;
  launchDate: string;
  nav: number;
  marketPrice: number;
  returns1Y: number;
  returns3Y: number;
  returns5Y: number;
  expenseRatio: number;
  volume: number;
  aum: number;
  trackingError: number;
  bidAskSpread: number;
  risk: string;
  useCase: string;
  tags: string[];
  amcLink: string;
  factSheetLink: string;
  topHoldings: string[];
  sectorAllocation: Record<string, number>;
}

// Google Sheets ID
const SPREADSHEET_ID = '1q2K-jlJHApVIGbc_FDiZsJfd0_78ZwpzUyn1KghbcJk';
// Sheet name or GID
const SHEET_NAME = 'ETFs';

export const fetchETFData = async (): Promise<ETF[]> => {
  try {
    // Using Google Sheets API v4 with public spreadsheet
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=AIzaSyBwGDKAMYtHg7dN9BgQPDfNvDY0x1PdGWw`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch ETF data');
    }
    
    const data = await response.json();
    const rows = data.values;
    
    if (!rows || rows.length === 0) {
      return [];
    }
    
    // First row contains headers
    const headers = rows[0];
    
    // Transform the data into ETF objects
    const etfs: ETF[] = rows.slice(1).map((row: any[]) => {
      const mapValue = (index: number): any => {
        if (index >= row.length) return '';
        return row[index];
      };

      const parseNumber = (value: string): number => {
        if (!value || value === 'N/A' || value === '-') return 0;
        // Remove any % signs and convert to number
        return parseFloat(value.replace('%', ''));
      };

      // Find indices for each field
      const nameIndex = headers.findIndex((h: string) => h === 'ETF Name');
      const tickerIndex = headers.findIndex((h: string) => h === 'Ticker');
      const amcIndex = headers.findIndex((h: string) => h === 'AMC');
      const categoryIndex = headers.findIndex((h: string) => h === 'Category');
      const subcategoryIndex = headers.findIndex((h: string) => h === 'Subcategory');
      const launchDateIndex = headers.findIndex((h: string) => h === 'Launch Date');
      const navIndex = headers.findIndex((h: string) => h === 'NAV');
      const marketPriceIndex = headers.findIndex((h: string) => h === 'Market Price');
      const returns1YIndex = headers.findIndex((h: string) => h === '1Y Return');
      const returns3YIndex = headers.findIndex((h: string) => h === '3Y Return');
      const returns5YIndex = headers.findIndex((h: string) => h === '5Y Return');
      const expenseRatioIndex = headers.findIndex((h: string) => h === 'Expense Ratio');
      const volumeIndex = headers.findIndex((h: string) => h === 'Volume');
      const aumIndex = headers.findIndex((h: string) => h === 'AUM');
      const trackingErrorIndex = headers.findIndex((h: string) => h === 'Tracking Error');
      const bidAskSpreadIndex = headers.findIndex((h: string) => h === 'Bid-Ask Spread');
      const riskIndex = headers.findIndex((h: string) => h === 'Risk');
      const useCaseIndex = headers.findIndex((h: string) => h === 'Suggested Use Case');
      const tagsIndex = headers.findIndex((h: string) => h === 'Tags');
      const amcLinkIndex = headers.findIndex((h: string) => h === 'AMC Link');
      const factSheetLinkIndex = headers.findIndex((h: string) => h === 'Fact Sheet Link');
      const topHoldingsIndex = headers.findIndex((h: string) => h === 'Top Holdings');
      const sectorAllocationIndex = headers.findIndex((h: string) => h === 'Sector Allocation');
      
      // Parse tags from comma-separated string
      const tags = mapValue(tagsIndex).split(',').map((tag: string) => tag.trim()).filter(Boolean);
      
      // Parse top holdings
      const topHoldings = mapValue(topHoldingsIndex).split(',').map((holding: string) => holding.trim()).filter(Boolean);
      
      // Parse sector allocation (simplified for now)
      let sectorAllocation: Record<string, number> = {};
      try {
        const sectorData = mapValue(sectorAllocationIndex);
        if (sectorData && sectorData.includes(':')) {
          const sectors = sectorData.split(',');
          sectors.forEach((sector: string) => {
            const [name, valueStr] = sector.split(':');
            if (name && valueStr) {
              sectorAllocation[name.trim()] = parseFloat(valueStr.trim());
            }
          });
        }
      } catch (err) {
        console.error('Error parsing sector allocation', err);
      }
      
      return {
        name: mapValue(nameIndex),
        ticker: mapValue(tickerIndex),
        amc: mapValue(amcIndex),
        category: mapValue(categoryIndex),
        subcategory: mapValue(subcategoryIndex),
        launchDate: mapValue(launchDateIndex),
        nav: parseNumber(mapValue(navIndex)),
        marketPrice: parseNumber(mapValue(marketPriceIndex)),
        returns1Y: parseNumber(mapValue(returns1YIndex)),
        returns3Y: parseNumber(mapValue(returns3YIndex)),
        returns5Y: parseNumber(mapValue(returns5YIndex)),
        expenseRatio: parseNumber(mapValue(expenseRatioIndex)),
        volume: parseNumber(mapValue(volumeIndex)),
        aum: parseNumber(mapValue(aumIndex)),
        trackingError: parseNumber(mapValue(trackingErrorIndex)),
        bidAskSpread: parseNumber(mapValue(bidAskSpreadIndex)),
        risk: mapValue(riskIndex),
        useCase: mapValue(useCaseIndex),
        tags,
        amcLink: mapValue(amcLinkIndex),
        factSheetLink: mapValue(factSheetLinkIndex),
        topHoldings,
        sectorAllocation,
      };
    });
    
    return etfs;
  } catch (error) {
    console.error('Error fetching ETF data:', error);
    toast.error("Failed to load ETF data. Please try again later.");
    return [];
  }
};

export const getETFByTicker = async (ticker: string): Promise<ETF | undefined> => {
  const etfs = await fetchETFData();
  return etfs.find(etf => etf.ticker.toLowerCase() === ticker.toLowerCase());
};

export const getUniqueValues = (etfs: ETF[], field: keyof ETF): string[] => {
  const valuesSet = new Set<string>();
  
  etfs.forEach(etf => {
    let value = etf[field];
    
    // Handle array fields differently
    if (Array.isArray(value)) {
      value.forEach(v => valuesSet.add(v));
    } else if (typeof value === 'string' && value) {
      valuesSet.add(value);
    }
  });
  
  return Array.from(valuesSet).sort();
};
