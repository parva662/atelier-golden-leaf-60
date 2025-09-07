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
import EventsPage from "./pages/Events";
import RegionalAdventurePage from "./pages/PastaMaking/RegionalAdventure";
import FamilyWorkshopPage from "./pages/PastaMaking/FamilyWorkshop";
import ClassicItalianPage from "./pages/PastaMaking/ClassicItalian";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";

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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/artisinal" element={<ArtisinalPage />} />
            <Route path="/pasta-making" element={<PastaMakingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/pasta-making/classic-italian" element={<ClassicItalianPage />} />
            <Route path="/pasta-making/regional-adventure" element={<RegionalAdventurePage />} />
            <Route path="/pasta-making/family-workshop" element={<FamilyWorkshopPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
