/**
 * LocalSourcing.tsx
 * Page for Artisanal Catering - Local Sourcing section.
 */
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

const LocalSourcing = () => (
  <section id="local-sourcing" className="container mx-auto px-4 py-16 max-w-5xl">
    <div className="bg-card rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">
      <img src="/src/assets/cooking-event.jpg" alt="Local farm ingredients for catering" className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-foreground mb-4">Local Sourcing</h2>
        <p className="text-lg text-muted-foreground mb-4">Butterfly Bites philosophy is simple: the best meals start with the best ingredients. That’s why we source fresh, seasonal produce and artisanal products from local partners who share our passion for quality and sustainability.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="bg-background rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Green Valley Farms</h3>
            <p className="text-muted-foreground">Organic vegetables and herbs, picked at peak freshness.</p>
          </div>
          <div className="bg-background rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Bella Dairy</h3>
            <p className="text-muted-foreground">Handcrafted cheeses from grass-fed cows.</p>
          </div>
          <div className="bg-background rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Sage Hill Gardens</h3>
            <p className="text-muted-foreground">Aromatic herbs and edible flowers for vibrant flavor.</p>
          </div>
          <div className="bg-background rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Riverbend Orchards</h3>
            <p className="text-muted-foreground">Seasonal fruits for desserts and preserves.</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-sage to-golden rounded-xl shadow p-6 mb-6">
          <h4 className="text-lg font-bold text-background mb-2">Why Local Matters</h4>
          <ul className="list-disc list-inside text-background">
            <li>Superior flavor and nutrition</li>
            <li>Supports local farmers and artisans</li>
            <li>Reduces environmental impact</li>
            <li>Celebrates the region’s culinary heritage</li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <img src="/src/assets/catering.jpg" alt="Farm-to-table catering" className="rounded-xl object-cover h-24 w-full shadow" />
          <img src="/src/assets/pasta-making.jpg" alt="Fresh pasta ingredients" className="rounded-xl object-cover h-24 w-full shadow" />
          <img src="/src/assets/cooking-event.jpg" alt="Local produce at event" className="rounded-xl object-cover h-24 w-full shadow" />
        </div>
        <Link to={route('requestQuote')} className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-sage to-golden text-background rounded-full font-semibold shadow hover:scale-105 transition">Request a Quote</Link>
      </div>
    </div>
  </section>
);

export default LocalSourcing;
