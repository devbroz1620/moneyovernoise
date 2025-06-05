import Index from '@/pages/Index';
import ETFs from '@/pages/ETFs';
import ETFDetail from '@/pages/ETFDetail';
import Learn from '@/pages/Learn';
import LearnArticle from '@/pages/LearnArticle';
import Psychology from '@/pages/Psychology';
import Debt from '@/pages/Debt';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';
import PsychologyArticle from '@/pages/PsychologyArticle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/etfs" element={<ETFs />} />
        <Route path="/etfs/:slug" element={<ETFDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/etfs/:slug" element={<LearnArticle />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/psychology/:slug" element={<PsychologyArticle />} />
        <Route path="/debt" element={<Debt />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
