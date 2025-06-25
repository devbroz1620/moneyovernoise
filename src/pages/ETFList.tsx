import { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { fetchETFData, ETF, getUniqueValues, getETFByTicker } from '@/services/etfService';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type SortField = 'name' | 'lastPrice' | 'pChange' | 'expenseRatio' | 'aum';
type SortDirection = 'asc' | 'desc';

const ETFList = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedETF, setSelectedETF] = useState<string | null>(null);
  const API_BASE_URL = 'https://nse-server.vercel.app';
  // Fetch all ETFs for search suggestions
  const { data: allETFs } = useQuery({
    queryKey: ['all-etfs'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/api/etfs`);
      if (!response.ok) throw new Error('Failed to fetch ETFs');
      const data = await response.json();
      console.log('Fetched ETFs:', data); // Debug log
      // Transform the data to match the expected format
      const transformed = {
        etfs: data.map((etf: { symbol: string; name: string }) => ({
          ticker: etf.symbol,
          name: etf.name,
          searchText: `${etf.symbol} ${etf.name}`.toLowerCase() // Convert to lowercase once
        }))
      };
      console.log('Transformed ETFs:', transformed); // Debug log
      return transformed;
    },
  });

  // Fetch paginated ETF data
  const { data, isLoading, error } = useQuery({
    queryKey: ['etfs', currentPage],
    queryFn: () => fetchETFData(currentPage),
  });

  // Fetch selected ETF details if one is selected
  const { data: selectedETFData } = useQuery({
    queryKey: ['etf', selectedETF],
    queryFn: () => selectedETF ? getETFByTicker(selectedETF) : null,
    enabled: !!selectedETF,
  });

  // Filter ETFs based on search
  const filteredETFs = useMemo(() => {
    if (!allETFs?.etfs) return [];
    if (!searchValue) return [];
    
    const searchLower = searchValue.toLowerCase().trim();
    console.log('Searching for:', searchLower); // Debug log
    const filtered = allETFs.etfs.filter(etf => 
      etf.searchText.includes(searchLower)
    );
    console.log('Filtered results:', filtered); // Debug log
    return filtered;
  }, [allETFs?.etfs, searchValue]);

  // Update total pages when data is loaded
  useEffect(() => {
    if (data?.total) {
      setTotalPages(Math.ceil(data.total / 20));
    }
  }, [data?.total]);

  // Handle ETF selection
  const handleETFSelect = (ticker: string) => {
    setSelectedETF(ticker);
    setSearchValue(ticker);
    setOpen(false);
  };

  // Get the ETFs to display in the table
  const displayETFs = useMemo(() => {
    if (selectedETFData) {
      return [selectedETFData];
    }
    return data?.etfs || [];
  }, [selectedETFData, data?.etfs]);

  // State for filters and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortField, setSortField] = useState<SortField>('lastPrice');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  
  // Derived values
  const [uniqueCompanies, setUniqueCompanies] = useState<string[]>([]);
  const [uniqueSectors, setUniqueSectors] = useState<string[]>([]);
  const [uniqueIndustries, setUniqueIndustries] = useState<string[]>([]);
  
  // Initialize unique values when data is loaded
  useEffect(() => {
    if (data?.etfs) {
      setUniqueCompanies(getUniqueValues(data.etfs, 'info.companyName'));
      setUniqueSectors(getUniqueValues(data.etfs, 'industryInfo.sector'));
      setUniqueIndustries(getUniqueValues(data.etfs, 'info.industry'));
    }
  }, [data?.etfs]);
  
  // Helper function to toggle value in array
  const toggleArrayValue = (array: string[], value: string): string[] => {
    return array.includes(value) 
      ? array.filter(item => item !== value) 
      : [...array, value];
  };

  // Apply filters and sorting to ETF data
  const sortedETFs = useMemo(() => {
    return [...displayETFs].sort((a, b) => {
      let comparison = 0;
      
      // Handle sort field
      if (sortField === 'name') {
        comparison = a.info.companyName.localeCompare(b.info.companyName);
      } else {
        const aValue = a.priceInfo[sortField] || 0;
        const bValue = b.priceInfo[sortField] || 0;
        comparison = aValue - bValue;
      }
      
      // Apply direction
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [displayETFs, sortField, sortDirection]);
  
  // Handle sort change
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new field and default to descending for metrics (ascending for name)
      setSortField(field);
      setSortDirection(field === 'name' ? 'asc' : 'desc');
    }
  };
  
  // Format values for display
  const formatPercent = (value: number): string => {
    return `${value.toFixed(2)}%`;
  };
  
  const formatCurrency = (value: number): string => {
    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(2)}k `;
    }
    return `₹${value.toFixed(2)} `;
  };

  // Get sort icon
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    
    return sortDirection === 'asc' 
      ? <ChevronUp className="inline-block h-4 w-4 ml-1" /> 
      : <ChevronDown className="inline-block h-4 w-4 ml-1" />;
  };
  
  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <PageHeader
            title="ETF Screener"
            description="Find the perfect ETF for your investment goals"
            breadcrumbs={[
              { href: "/", label: "Home" },
              { href: "/list", label: "Explore", isCurrent: true },
            ]}
          />
          <Card className="p-6">
            <div className="space-y-6">
              <Skeleton className="h-10 w-full" />
              <div className="grid gap-4 md:grid-cols-3">
                {Array(3).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
              <Skeleton className="h-[400px] w-full" />
            </div>
          </Card>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="container py-8">
          <PageHeader
            title="ETF Screener"
            description="Find the perfect ETF for your investment goals"
            breadcrumbs={[
              { href: "/", label: "Home" },
              { href: "/list", label: "Explore", isCurrent: true },
            ]}
          />
          <div className="bg-red-50 p-4 rounded border border-red-200 text-red-800">
            Unable to load ETF data. Please try again later.
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="ETF Screener"
          description="Find the perfect ETF for your investment goals"
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/list", label: "Explore", isCurrent: true },
          ]}
        />
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              {/* Search with suggestions */}
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Search ETFs</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between text-foreground"
                    >
                      {searchValue || "Search ETFs..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput 
                        placeholder="Search by symbol or name..." 
                        value={searchValue}
                        onValueChange={(value) => {
                          console.log('Search value:', value); // Debug log
                          setSearchValue(value);
                        }}
                        className="text-foreground"
                      />
                      <CommandList>
                        <CommandEmpty>No ETFs found.</CommandEmpty>
                        <CommandGroup>
                          {filteredETFs.map((etf) => (
                            <CommandItem
                              key={etf.ticker}
                              value={etf.ticker}
                              onSelect={handleETFSelect}
                              className="text-foreground"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  searchValue === etf.ticker ? "opacity-100" : "opacity-0"
                                )}
                              />
                              <div className="flex flex-col">
                                <span className="text-foreground">{etf.name}</span>
                                <span className="text-sm text-muted-foreground">{etf.ticker}</span>
                              </div>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Commented out filters temporarily
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                ... existing filter controls ...
              </div>
              */}
            </div>
          </CardContent>
        </Card>
        
        {/* Results count and table */}
        <div className="mb-4 text-sm text-muted-foreground">
          {isLoading ? (
            "Loading ETFs..."
          ) : error ? (
            "Error loading ETFs. Please try again."
          ) : (
            `Showing ${displayETFs.length} of ${selectedETF ? 1 : data?.total || 0} ETFs`
          )}
        </div>
        
        <div className="rounded-md border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="text-foreground">ETF</TableHead>
                  <TableHead className="text-right text-foreground">Last Price</TableHead>
                  <TableHead className="text-right text-foreground">52 Week High</TableHead>
                  <TableHead className="text-right text-foreground">52 Week Low</TableHead>
                  <TableHead className="text-right text-foreground">Change %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-10">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                        <span>Loading ETFs...</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-10 text-red-600">
                      Error loading ETFs. Please try again.
                    </TableCell>
                  </TableRow>
                ) : displayETFs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                      No ETFs found matching your filters. Try adjusting your criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedETFs.map((etf) => (
                    <TableRow key={etf.info.symbol} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <Link to={`/etfs/screener/${etf.info.symbol}`} className="hover:text-primary text-foreground">
                          {etf.info.symbol}
                        </Link>
                      </TableCell>
                      <TableCell className="text-right text-foreground">
                        {formatCurrency(etf.priceInfo.lastPrice)}
                      </TableCell>
                      <TableCell className="text-right text-foreground">
                        {etf.priceInfo.weekHighLow.max ? etf.priceInfo.weekHighLow.max.toFixed(2) : 'N/A'}
                      </TableCell>
                      <TableCell className="text-right text-foreground">
                        {etf.priceInfo.weekHighLow.min ? etf.priceInfo.weekHighLow.min.toFixed(2) : 'N/A'}
                      </TableCell>
                      <TableCell className={`text-right ${etf.priceInfo.pChange > 0 ? 'text-green-600' : etf.priceInfo.pChange < 0 ? 'text-red-600' : 'text-foreground'}`}> 
                        {formatPercent(etf.priceInfo.pChange)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination - Only show if not showing search results */}
        {!selectedETF && !isLoading && !error && totalPages > 1 && (
          <div className="mt-4 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        onClick={() => setCurrentPage(pageNum)}
                        isActive={currentPage === pageNum}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                {totalPages > 5 && (
                  <>
                    <PaginationEllipsis />
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => setCurrentPage(totalPages)}
                        isActive={currentPage === totalPages}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ETFList;
