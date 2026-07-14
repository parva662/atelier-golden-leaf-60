import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import catering from "@/assets/catering.jpg";

const ArtisanalHeaderNav = () => (
  <>
    <nav className="container mx-auto px-4 mb-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Link to={route('artisanal.customMenus')} className="px-6 py-3 rounded-full bg-gradient-to-r from-golden to-sage text-background font-semibold shadow hover:scale-105 transition">Custom Menus</Link>
        <Link to={route('artisanal.localSourcing')} className="px-6 py-3 rounded-full bg-gradient-to-r from-sage to-golden text-background font-semibold shadow hover:scale-105 transition">Ingredient Philosophy</Link>
        <Link to={route('artisanal.personalService')} className="px-6 py-3 rounded-full bg-gradient-to-r from-golden to-sage text-background font-semibold shadow hover:scale-105 transition">Personal Service</Link>
      </div>
    </nav>

    <header className="container mx-auto px-4 max-w-4xl text-center mb-12">
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Persian-Inspired Catering by Pari</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Warm, handmade catering shaped around Persian hospitality, abundant tables, seasonal ingredients, and personal
        menus for your gathering.
      </p>
      <img src={catering} alt="Artisanal catering table with beautiful dishes" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
      <Link to={route('requestQuote')} className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">
        Request Catering Quote
      </Link>
    </header>
  </>
);

export default ArtisanalHeaderNav;
