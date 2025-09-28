/**
 * CustomMenus.tsx
 * Page for Artisanal Catering - Custom Menus section.
 */
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

const CustomMenus = () => (
  <section className="container mx-auto px-4 py-16 max-w-5xl">
    <div className="bg-card rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">
      <img src="/src/assets/pasta-making.jpg" alt="Handmade pasta for custom menus" className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-foreground mb-4">Custom Menus</h2>
        <p className="text-lg text-muted-foreground mb-4">Every event deserves a menu as unique as its guests. Butterfly Bites cook (Pari) works closely with you to design a culinary experience that reflects your tastes, traditions, and dreams. From elegant plated dinners to rustic family-style feasts, every dish is crafted with artistry and care.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Spring Feast menu example */}
          <div className="bg-background rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🌸</span>
            <h3 className="text-xl font-semibold text-primary mb-2">Spring Feast</h3>
            <ul className="text-muted-foreground text-left mb-2">
              <li><strong>Starter:</strong> Asparagus & Lemon Risotto</li>
              <li><strong>Main:</strong> Herb-Crusted Lamb Chops with Spring Vegetables</li>
              <li><strong>Dessert:</strong> Strawberry Basil Tart</li>
            </ul>
            <span className="text-xs text-muted-foreground">Perfect for garden parties and spring celebrations</span>
          </div>
          {/* Tuscan Table menu example */}
          <div className="bg-background rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🍋</span>
            <h3 className="text-xl font-semibold text-primary mb-2">Tuscan Table</h3>
            <ul className="text-muted-foreground text-left mb-2">
              <li><strong>Starter:</strong> Burrata with Heirloom Tomatoes & Basil</li>
              <li><strong>Main:</strong> Handmade Pappardelle with Wild Mushroom Ragu</li>
              <li><strong>Second:</strong> Porchetta with Rosemary & Garlic</li>
              <li><strong>Dessert:</strong> Olive Oil Cake with Citrus</li>
            </ul>
            <span className="text-xs text-muted-foreground">Inspired by the flavors of Italy’s countryside</span>
          </div>
          {/* Harvest Celebration menu example */}
          <div className="bg-background rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🌿</span>
            <h3 className="text-xl font-semibold text-primary mb-2">Harvest Celebration</h3>
            <ul className="text-muted-foreground text-left mb-2">
              <li><strong>Starter:</strong> Roasted Beet Carpaccio with Goat Cheese</li>
              <li><strong>Main:</strong> Maple-Glazed Duck Breast with Autumn Root Vegetables</li>
              <li><strong>Dessert:</strong> Spiced Pear Galette</li>
            </ul>
            <span className="text-xs text-muted-foreground">A tribute to the bounty of the fall harvest</span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-md text-muted-foreground mb-4">Menus are fully customizable. Vegetarian, vegan, gluten-free, and allergy-friendly options available. Let’s create something unforgettable together!</p>
          <Link to={route('requestQuote')} className="inline-block px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition">Request a Quote</Link>
        </div>
      </div>
    </div>
  </section>
);

export default CustomMenus;
