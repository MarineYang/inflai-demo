import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Analyze from './pages/Analyze';
import Result from './pages/Result';
import InstagramResult from './pages/InstagramResult';
import WeeklyPlan from './pages/WeeklyPlan';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/result" element={<Result />} />
          <Route path="/instagram-result" element={<InstagramResult />} />
          <Route path="/weekly-plan" element={<WeeklyPlan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;