import React from "react";
import { Link } from "react-router-dom";

const FamilyWorkshop = () => (
  <main className="py-20 bg-background min-h-screen">
    <header className="container mx-auto px-4 max-w-3xl text-center mb-16">
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Family Pasta Workshop</h1>
      <p className="text-xl text-muted-foreground mb-8">A joyful, family-friendly class where kids and adults create pasta together. Kid-safe tools, decorate your own pasta, fun games, trivia, and a family-style meal at the end!</p>
      <img src="/src/assets/catering.jpg" alt="Family Pasta Workshop" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
      <Link to="/request-quote" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Book This Class</Link>
    </header>
    {/* Add more details, testimonials, etc. as needed */}
  </main>
);

export default FamilyWorkshop;
