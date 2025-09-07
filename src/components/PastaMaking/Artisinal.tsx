import { Link } from "react-router-dom";

const Artisanal = () => {
  return (
    <main id="artisanal-catering" className="py-20 bg-background">
      <nav className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="#custom-menus" className="px-6 py-3 rounded-full bg-gradient-to-r from-golden to-sage text-background font-semibold shadow hover:scale-105 transition">Custom Menus</a>
          <a href="#local-sourcing" className="px-6 py-3 rounded-full bg-gradient-to-r from-sage to-golden text-background font-semibold shadow hover:scale-105 transition">Local Sourcing</a>
          <a href="#personal-service" className="px-6 py-3 rounded-full bg-gradient-to-r from-golden to-sage text-background font-semibold shadow hover:scale-105 transition">Personal Service</a>
        </div>
      </nav>

      <header className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <h1 className="text-5xl font-extrabold text-foreground mb-6">Artisanal Catering for Unforgettable Events</h1>
        <p className="text-xl text-muted-foreground mb-8">Handcrafted menus, locally sourced ingredients, and a personal touch for every occasion. Discover the difference of true artisanal catering—where every dish is a work of art and every event is a celebration of flavor, tradition, and connection.</p>
        <img src="/src/assets/catering.jpg" alt="Artisanal catering table with beautiful dishes" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
        <a href="#custom-menus" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Explore Custom Menus</a>
      </header>


      <section id="custom-menus" className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="bg-card rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">
          <img src="/src/assets/pasta-making.jpg" alt="Handmade pasta for custom menus" className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">Custom Menus</h2>
            <p className="text-lg text-muted-foreground mb-4">Every event deserves a menu as unique as its guests. Chef Ibrahim works closely with you to design a culinary experience that reflects your tastes, traditions, and dreams. From elegant plated dinners to rustic family-style feasts, every dish is crafted with artistry and care.</p>
            <div className="grid md:grid-cols-3 gap-8">
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
              <Link to="/request-quote" className="inline-block px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>


      <section id="local-sourcing" className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="bg-card rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">
          <img src="/src/assets/cooking-event.jpg" alt="Local farm ingredients for catering" className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">Local Sourcing</h2>
            <p className="text-lg text-muted-foreground mb-4">Chef Ibrahim’s philosophy is simple: the best meals start with the best ingredients. That’s why we source fresh, seasonal produce and artisanal products from local partners who share our passion for quality and sustainability.</p>
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
            <Link to="/request-quote" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-sage to-golden text-background rounded-full font-semibold shadow hover:scale-105 transition">Request a Quote</Link>
          </div>
        </div>
      </section>


      <section id="personal-service" className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="bg-card rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">
          <img src="/src/assets/chef-portrait.jpg" alt="Personal service from chef" className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">Personal Service</h2>
            <p className="text-lg text-muted-foreground mb-4">From your first inquiry to the final farewell, Chef Ibrahim and his team are dedicated to making your event seamless, memorable, and uniquely yours. Experience the difference of true hospitality and attention to detail.</p>
            <div className="bg-background rounded-xl shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-primary mb-2">What to Expect</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Personalized event planning and menu consultation</li>
                <li>Custom table settings and decor</li>
                <li>On-site chef and professional staff</li>
                <li>Attention to every guest’s experience</li>
                <li>Flexible service styles: plated, buffet, family-style</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-golden to-sage rounded-xl shadow p-6 mb-6">
              <h4 className="text-lg font-bold text-background mb-2">Client Story</h4>
              <p className="text-background">“Chef Ibrahim made our anniversary dinner absolutely magical. Every detail was perfect, and our guests are still talking about the food and the warmth of the service.” <br /><span className="italic">— Sophia & Mark, San Francisco</span></p>
            </div>
            <Link to="/request-quote" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition">Request a Quote</Link>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 text-center py-16">
  <Link to="/request-quote" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Request a Quote</Link>
      </footer>
    </main>
  );
};

export default Artisanal;