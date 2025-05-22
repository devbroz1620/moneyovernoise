
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
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
import { fetchETFData, ETF, getUniqueValues } from '@/services/etfService';
import { Skeleton } from '@/components/ui/skeleton';

type SortField = 'name' | 'returns1Y' | 'returns3Y' | 'returns5Y' | 'expenseRatio' | 'aum';
type SortDirection = 'asc' | 'desc';

const ETFList = () => {
  // Fetch ETF data
  const { data: etfs, isLoading, error } = useQuery({
    queryKey: ['etfs'],
    queryFn: fetchETFData,
  });

  // State for filters and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAMCs, setSelectedAMCs] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRisks, setSelectedRisks] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [minExpenseRatio, setMinExpenseRatio] = useState(0);
  const [maxExpenseRatio, setMaxExpenseRatio] = useState(2); // Reasonable maximum for India
  const [minAUM, setMinAUM] = useState(0);
  const [maxAUM, setMaxAUM] = useState(50000); // In crores, adjust if needed
  const [showFilters, setShowFilters] = useState(false);
  const [sortField, setSortField] = useState<SortField>('returns1Y');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  
  // Derived values
  const [uniqueAMCs, setUniqueAMCs] = useState<string[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [uniqueRisks, setUniqueRisks] = useState<string[]>([]);
  
  // Initialize unique values when data is loaded
  useEffect(() => {
    if (etfs?.length) {
      setUniqueAMCs(getUniqueValues(etfs, 'amc'));
      setUniqueCategories(getUniqueValues(etfs, 'category'));
      setUniqueRisks(getUniqueValues(etfs, 'risk'));
      
      // For tags, we need to flatten the array
      const tagSet = new Set<string>();
      etfs.forEach(etf => {
        if (etf.tags?.length) {
          etf.tags.forEach(tag => tagSet.add(tag));
        }
      });
      setUniqueTags(Array.from(tagSet).sort());
    }
  }, [etfs]);
  
  // Helper function to toggle value in array
  const toggleArrayValue = (array: string[], value: string): string[] => {
    return array.includes(value) 
      ? array.filter(item => item !== value) 
      : [...array, value];
  };

  // Apply filters and sorting to ETF data
  const filteredETFs = etfs
    ? etfs.filter(etf => {
        // Search term filter
        const matchesSearch = searchTerm === '' || 
          etf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          etf.ticker.toLowerCase().includes(searchTerm.toLowerCase());

        // AMC filter
        const matchesAMC = selectedAMCs.length === 0 || selectedAMCs.includes(etf.amc);

        // Category filter
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(etf.category);

        // Risk filter
        const matchesRisk = selectedRisks.length === 0 || selectedRisks.includes(etf.risk);

        // Tags filter
        const matchesTags = selectedTags.length === 0 || 
          (etf.tags && selectedTags.some(tag => etf.tags.includes(tag)));

        // Expense ratio filter
        const matchesExpenseRatio = etf.expenseRatio >= minExpenseRatio && etf.expenseRatio <= maxExpenseRatio;

        // AUM filter
        const matchesAUM = etf.aum >= minAUM && etf.aum <= maxAUM;

        return matchesSearch && matchesAMC && matchesCategory && matchesRisk && 
               matchesTags && matchesExpenseRatio && matchesAUM;
      })
    : [];

  // Apply sorting
  const sortedETFs = [...filteredETFs].sort((a, b) => {
    let comparison = 0;
    
    // Handle sort field
    if (sortField === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else {
      const aValue = a[sortField] || 0;
      const bValue = b[sortField] || 0;
      comparison = aValue - bValue;
    }
    
    // Apply direction
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
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
      return `₹${(value / 1000).toFixed(2)}k Cr`;
    }
    return `₹${value.toFixed(2)} Cr`;
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
          <div className="p-4 md:p-6">
            {/* Search and filter controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search ETFs by name or ticker..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
                {(selectedAMCs.length > 0 || selectedCategories.length > 0 || 
                  selectedRisks.length > 0 || selectedTags.length > 0 ||
                  minExpenseRatio > 0 || maxExpenseRatio < 2 || 
                  minAUM > 0 || maxAUM < 50000) && (
                  <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {selectedAMCs.length + selectedCategories.length + selectedRisks.length + 
                     selectedTags.length + (minExpenseRatio > 0 ? 1 : 0) + 
                     (maxExpenseRatio < 2 ? 1 : 0) + (minAUM > 0 ? 1 : 0) + 
                     (maxAUM < 50000 ? 1 : 0)}
                  </Badge>
                )}
              </Button>
              
              <Select
                value={sortField}
                onValueChange={(value) => handleSort(value as SortField)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="returns1Y">1Y Return</SelectItem>
                  <SelectItem value="returns3Y">3Y Return</SelectItem>
                  <SelectItem value="returns5Y">5Y Return</SelectItem>
                  <SelectItem value="expenseRatio">Expense Ratio</SelectItem>
                  <SelectItem value="aum">AUM</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
              >
                {sortDirection === 'asc' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            {showFilters && (
              <div className="space-y-6 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* AMC Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">AMC</h4>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {uniqueAMCs.map((amc) => (
                        <div key={amc} className="flex items-center space-x-2">
                          <Checkbox
                            id={`amc-${amc}`}
                            checked={selectedAMCs.includes(amc)}
                            onCheckedChange={() => setSelectedAMCs(toggleArrayValue(selectedAMCs, amc))}
                          />
                          <label
                            htmlFor={`amc-${amc}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {amc}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Category Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Category</h4>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {uniqueCategories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => setSelectedCategories(toggleArrayValue(selectedCategories, category))}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Risk Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Risk Level</h4>
                    <div className="space-y-2">
                      {uniqueRisks.map((risk) => (
                        <div key={risk} className="flex items-center space-x-2">
                          <Checkbox
                            id={`risk-${risk}`}
                            checked={selectedRisks.includes(risk)}
                            onCheckedChange={() => setSelectedRisks(toggleArrayValue(selectedRisks, risk))}
                          />
                          <label
                            htmlFor={`risk-${risk}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {risk}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tags Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Tags</h4>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {uniqueTags.map((tag) => (
                        <div key={tag} className="flex items-center space-x-2">
                          <Checkbox
                            id={`tag-${tag}`}
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={() => setSelectedTags(toggleArrayValue(selectedTags, tag))}
                          />
                          <label
                            htmlFor={`tag-${tag}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {tag}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Expense Ratio Slider */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="text-sm font-medium">Expense Ratio</h4>
                      <span className="text-sm text-muted-foreground">
                        {minExpenseRatio.toFixed(2)}% - {maxExpenseRatio.toFixed(2)}%
                      </span>
                    </div>
                    <Slider
                      min={0}
                      max={2}
                      step={0.01}
                      value={[minExpenseRatio, maxExpenseRatio]}
                      onValueChange={([min, max]) => {
                        setMinExpenseRatio(min);
                        setMaxExpenseRatio(max);
                      }}
                      className="my-6"
                    />
                  </div>
                  
                  {/* AUM Slider */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="text-sm font-medium">AUM (in Crores)</h4>
                      <span className="text-sm text-muted-foreground">
                        ₹{minAUM} Cr - ₹{maxAUM} Cr
                      </span>
                    </div>
                    <Slider
                      min={0}
                      max={50000}
                      step={100}
                      value={[minAUM, maxAUM]}
                      onValueChange={([min, max]) => {
                        setMinAUM(min);
                        setMaxAUM(max);
                      }}
                      className="my-6"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedAMCs([]);
                      setSelectedCategories([]);
                      setSelectedRisks([]);
                      setSelectedTags([]);
                      setMinExpenseRatio(0);
                      setMaxExpenseRatio(2);
                      setMinAUM(0);
                      setMaxAUM(50000);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
        
        {/* Results count and table */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {sortedETFs.length} of {etfs?.length || 0} ETFs
        </div>
        
        <div className="rounded-md border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[250px]">
                    <button 
                      className="flex items-center font-medium"
                      onClick={() => handleSort('name')}
                    >
                      ETF Name {getSortIcon('name')}
                    </button>
                  </TableHead>
                  <TableHead>AMC</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">
                    <button 
                      className="flex items-center font-medium ml-auto"
                      onClick={() => handleSort('returns1Y')}
                    >
                      1Y Return {getSortIcon('returns1Y')}
                    </button>
                  </TableHead>
                  <TableHead className="text-right">
                    <button 
                      className="flex items-center font-medium ml-auto"
                      onClick={() => handleSort('expenseRatio')}
                    >
                      Expense Ratio {getSortIcon('expenseRatio')}
                    </button>
                  </TableHead>
                  <TableHead className="text-right">
                    <button 
                      className="flex items-center font-medium ml-auto"
                      onClick={() => handleSort('aum')}
                    >
                      AUM {getSortIcon('aum')}
                    </button>
                  </TableHead>
                  <TableHead>Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedETFs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                      No ETFs found matching your filters. Try adjusting your criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedETFs.map((etf) => (
                    <TableRow key={etf.ticker} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <Link to={`/list/etfs/${etf.ticker}`} className="hover:text-primary">
                          <div>{etf.name}</div>
                          <div className="text-xs text-muted-foreground">{etf.ticker}</div>
                        </Link>
                      </TableCell>
                      <TableCell>{etf.amc}</TableCell>
                      <TableCell>{etf.category}</TableCell>
                      <TableCell className={`text-right ${etf.returns1Y > 0 ? 'text-green-600' : etf.returns1Y < 0 ? 'text-red-600' : ''}`}>
                        {formatPercent(etf.returns1Y)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatPercent(etf.expenseRatio)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(etf.aum)}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          etf.risk === 'High' ? 'border-red-200 bg-red-50 text-red-700' :
                          etf.risk === 'Moderate' ? 'border-yellow-200 bg-yellow-50 text-yellow-700' :
                          'border-green-200 bg-green-50 text-green-700'
                        }>
                          {etf.risk}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ETFList;
