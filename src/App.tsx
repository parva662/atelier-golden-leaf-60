import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import ArtisinalPage from "./pages/Artisinal";
import PastaMakingPage from "./pages/PastaMaking";
import RequestQuotePage from "./pages/RequestQuote";
import NotFound from "./pages/NotFound";
import ClassicItalian from "./pages/PastaMaking/ClassicItalian";
import RegionalAdventure from "./pages/PastaMaking/RegionalAdventure";
import FamilyWorkshop from "./pages/FamilyWorkshop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/artisinal" element={<ArtisinalPage />} />
            <Route path="/pasta-making" element={<PastaMakingPage />} />
            <Route path="/pasta-making/classic-italian" element={<ClassicItalian />} />
            <Route path="/pasta-making/regional-adventure" element={<RegionalAdventure />} />
            <Route path="/pasta-making/family-workshop" element={<FamilyWorkshop />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
