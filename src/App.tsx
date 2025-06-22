import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ETFList from "./pages/ETFList";
import ETFDetails from "./pages/ETFDetails";
import ETFLearn from "./pages/ETFLearn";
import ETFLearnArticle from "./pages/ETFLearnArticle";
import Learn from "./pages/Learn";
import LearnArticle from "./pages/LearnArticle";
import Psychology from "./pages/Psychology";
import PsychologyArticle from "./pages/PsychologyArticle";
import Debt from "./pages/Debt";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import MoneyBasics from "./pages/MoneyBasics";
import MoneyBasicsCategoryPage from "./pages/MoneyBasicsCategoryPage";
import MoneyBasicsPostPage from "./pages/MoneyBasicsPostPage";
import Debts from "./pages/Debts";
import DebtsCategoryPage from "./pages/DebtsCategoryPage";
import DebtPostPage from "./pages/DebtPostPage";
import Etfs from "./pages/ETFs";
import EtfPostPage from "./pages/EtfPostPage";
import MindOverMoney from "./pages/MindOverMoney";
import MindOverMoneyPostPage from "./pages/MindOverMoneyPostPage";
import PostDetailPage from "./pages/PostDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/money-basics" element={<MoneyBasics />} />
          <Route path="/money-basics/categories/:categoryName" element={<MoneyBasicsCategoryPage />} />
          <Route path="/posts/:id" element={<MoneyBasicsPostPage />} />
          <Route path="/etfs" element={<Etfs />} />
          <Route path="/etfs/list" element={<ETFList />} />
          <Route path="/etfs/screener" element={<ETFList />} />
          <Route path="/etfs/screener/:symbol" element={<ETFDetails />} />
          <Route path="/etfs/posts/:id" element={<EtfPostPage />} />
          <Route path="/etfs/learn" element={<ETFLearn />} />
          <Route path="/etfs/learn/:slug" element={<ETFLearnArticle />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:slug" element={<LearnArticle />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/psychology/:slug" element={<PsychologyArticle />} />
          <Route path="/debt" element={<Debt />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/debts" element={<Debts />} />
          <Route path="/debts/categories/:categoryName" element={<DebtsCategoryPage />} />
          <Route path="/debts/posts/:id" element={<DebtPostPage />} />
          <Route path="/mind-over-money" element={<MindOverMoney />} />
          <Route path="/mind-over-money/:id" element={<MindOverMoneyPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
