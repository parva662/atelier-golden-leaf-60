import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Main App component sets up global providers and routing for the site.
 *
 * - Wraps the app in React Query, Tooltip, and Toaster providers.
 * - Uses React Router for all navigation.
 * - Defines all routes and their corresponding page components.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */

import Index from "./pages/Index";
import ArtisanalPage from "./pages/Artisanal";
import PastaMakingPage from "./pages/PastaMaking";
import RequestQuotePage from "./pages/RequestQuote";
import NotFound from "./pages/NotFound";
import EventsPage from "./pages/Events";
import RegionalAdventurePage from "./pages/PastaMaking/RegionalAdventure";
import FamilyWorkshopPage from "./pages/PastaMaking/FamilyWorkshop";
import ClassicItalianPage from "./pages/PastaMaking/ClassicItalian";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import CustomMenusPage from "./pages/Artisanal/CustomMenuPages";
import LocalSourcingPage from "./pages/Artisanal/LocalSourcing";
import PersonalServicePage from "./pages/Artisanal/PersonalService";
import FastPage from "./pages/Artisanal/Fast";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/artisanal" element={<ArtisanalPage />} />
            <Route path="/artisanal/custom-menus" element={<CustomMenusPage />} />
            <Route path="/artisanal/local-sourcing" element={<LocalSourcingPage />} />
            <Route path="/artisanal/personal-service" element={<PersonalServicePage />} />
            <Route path="/artisanal/testpari" element={<FastPage />} />
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


/**
 * Exports the App component for use in main.tsx.
 * @see App
 */
export default App;
