
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ETFs from "./pages/ETFs";
import Learn from "./pages/Learn";
import LearnArticle from "./pages/LearnArticle";
import ETFList from "./pages/ETFList";
import ETFDetail from "./pages/ETFDetail";
import Psychology from "./pages/Psychology";
import Debt from "./pages/Debt";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/etfs" element={<ETFs />} />
          <Route path="/etfs/learn" element={<Learn />} />
          <Route path="/etfs/learn/:slug" element={<LearnArticle />} />
          <Route path="/etfs/screener" element={<ETFList />} />
          <Route path="/etfs/screener/:ticker" element={<ETFDetail />} />
          <Route path="/etfs/compare" element={<ETFList />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/debt" element={<Debt />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Legacy routes for backwards compatibility */}
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/etfs/:slug" element={<LearnArticle />} />
          <Route path="/list" element={<ETFList />} />
          <Route path="/list/etfs" element={<ETFList />} />
          <Route path="/list/etfs/:ticker" element={<ETFDetail />} />
          <Route path="/list/compare" element={<ETFList />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
