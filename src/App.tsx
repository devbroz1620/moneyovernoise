
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const ETFs = lazy(() => import("./pages/ETFs"));
const ETFList = lazy(() => import("./pages/ETFList"));
const ETFDetail = lazy(() => import("./pages/ETFDetail"));
const ETFLearn = lazy(() => import("./pages/ETFLearn"));
const ETFLearnArticle = lazy(() => import("./pages/ETFLearnArticle"));
const Learn = lazy(() => import("./pages/Learn"));
const LearnArticle = lazy(() => import("./pages/LearnArticle"));
const Psychology = lazy(() => import("./pages/Psychology"));
const PsychologyArticle = lazy(() => import("./pages/PsychologyArticle"));
const Debt = lazy(() => import("./pages/Debt"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/etfs" element={<Suspense fallback={<div>Loading...</div>}><ETFs /></Suspense>} />
          <Route path="/etfs/list" element={<Suspense fallback={<div>Loading...</div>}><ETFList /></Suspense>} />
          <Route path="/etfs/screener" element={<Suspense fallback={<div>Loading...</div>}><ETFList /></Suspense>} />
          <Route path="/etfs/:id" element={<Suspense fallback={<div>Loading...</div>}><ETFDetail /></Suspense>} />
          <Route path="/etfs/learn" element={<Suspense fallback={<div>Loading...</div>}><ETFLearn /></Suspense>} />
          <Route path="/etfs/learn/:slug" element={<Suspense fallback={<div>Loading...</div>}><ETFLearnArticle /></Suspense>} />
          <Route path="/learn" element={<Suspense fallback={<div>Loading...</div>}><Learn /></Suspense>} />
          <Route path="/learn/:slug" element={<Suspense fallback={<div>Loading...</div>}><LearnArticle /></Suspense>} />
          <Route path="/psychology" element={<Suspense fallback={<div>Loading...</div>}><Psychology /></Suspense>} />
          <Route path="/psychology/:slug" element={<Suspense fallback={<div>Loading...</div>}><PsychologyArticle /></Suspense>} />
          <Route path="/debt" element={<Suspense fallback={<div>Loading...</div>}><Debt /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
          <Route path="/privacy" element={<Suspense fallback={<div>Loading...</div>}><Privacy /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={<div>Loading...</div>}><Terms /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
