/**
 * ArtisanalHeaderNav.tsx
 * Shared navigation and header for Artisanal Catering pages.
 */
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

const ArtisanalHeaderNav = () => (
  <>
    {/* Top navigation bar for anchor links */}
    <nav className="container mx-auto px-4 mb-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <Link to={route('artisanal.customMenus')} className="px-6 py-3 rounded-full bg-gradient-to-r from-golden to-sage text-background font-semibold shadow hover:scale-105 transition">Custom Menus</Link>
        <Link to={route('artisanal.localSourcing')} className="px-6 py-3 rounded-full bg-gradient-to-r from-sage to-golden text-background font-semibold shadow hover:scale-105 transition">Local Sourcing</Link>
        <Link to={route('artisanal.personalService')} className="px-6 py-3 rounded-full bg-gradient-to-r from-golden to-sage text-background font-semibold shadow hover:scale-105 transition">Personal Service</Link>
        <Link to={route('artisanal.fast')} className="px-6 py-3 rounded-full bg-gradient-to-r from-golden to-sage text-background font-semibold shadow hover:scale-105 transition">Fast</Link>
      </div>
    </nav>
    {/* Header section with main image and intro */}
    <header className="container mx-auto px-4 max-w-4xl text-center mb-16">
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Artisanal Catering for Unforgettable Events</h1>
      <p className="text-xl text-muted-foreground mb-8">Handcrafted menus, locally sourced ingredients, and a personal touch for every occasion. Discover the difference of true artisanal catering—where every dish is a work of art and every event is a celebration of flavor, tradition, and connection.</p>
      <img src="/src/assets/catering.jpg" alt="Artisanal catering table with beautiful dishes" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
    </header>
  </>
);

export default ArtisanalHeaderNav;
