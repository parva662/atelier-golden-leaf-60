import React from "react";
import { Link } from "react-router-dom";

const sampleClasses = [
  {
    title: "Classic Italian Pasta Night",
    description: "Learn to make tagliatelle, ravioli, and gnocchi from scratch, paired with traditional sauces.",
    highlights: [
      "Hands-on dough making",
      "Secrets of perfect fillings",
      "Wine pairing tips",
      "Take-home recipes"
    ],
    image: "/src/assets/pasta-making.jpg"
  },
  {
    title: "Regional Pasta Adventure",
    description: "Explore the diversity of Italy’s pasta regions: orecchiette from Puglia, trofie from Liguria, and more.",
    highlights: [
      "Regional history & stories",
      "Unique shapes & techniques",
      "Local ingredient spotlight",
      "Group tasting experience"
    ],
    image: "/src/assets/cooking-event.jpg"
  },
  {
    title: "Family Pasta Workshop",
    description: "A joyful, family-friendly class where kids and adults create pasta together.",
    highlights: [
      "Kid-safe tools & guidance",
      "Decorate your own pasta",
      "Fun games & pasta trivia",
      "Family-style meal at the end"
    ],
    image: "/src/assets/catering.jpg"
  }
];

const testimonials = [
  {
    name: "Luca & Maria",
    quote: "We never thought we could make pasta like this! Chef Ibrahim’s class was the highlight of our trip.",
    image: "/src/assets/chef-portrait.jpg"
  },
  {
    name: "The Patel Family",
    quote: "Our kids loved every minute. The pasta was delicious and the memories will last forever.",
    image: "/src/assets/pasta-making.jpg"
  }
];

const PastaMaking = () => {
  return (
    <main className="py-20 bg-background min-h-screen">
      <nav className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link to="/pasta-making/classic-italian" className="px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition">Classic Italian Pasta Night</Link>
          <Link to="/pasta-making/regional-adventure" className="px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition">Regional Pasta Adventure</Link>
          <Link to="/pasta-making/family-workshop" className="px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition">Family Pasta Workshop</Link>
        </div>
      </nav>
      <header className="container mx-auto px-4 max-w-3xl text-center mb-16">
        <h1 className="text-5xl font-extrabold text-foreground mb-6">Pasta Making Classes</h1>
        <p className="text-xl text-muted-foreground mb-8">Discover the magic of handmade pasta in Chef Ibrahim’s immersive, joy-filled workshops. From flour to feast, every moment is a celebration of tradition, creativity, and connection.</p>
        <img src="/src/assets/pasta-making.jpg" alt="Fresh handmade pasta" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
        <Link to="/request-quote" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Reserve Your Spot</Link>
      </header>

      <section className="container mx-auto px-4 max-w-5xl py-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Classes</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Link to="/pasta-making/classic-italian" className="bg-card rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <img src="/src/assets/pasta-making.jpg" alt="Classic Italian Pasta Night" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-primary mb-2">Classic Italian Pasta Night</h3>
            <p className="text-muted-foreground mb-4">Learn to make tagliatelle, ravioli, and gnocchi from scratch, paired with traditional sauces.</p>
          </Link>
          <Link to="/pasta-making/regional-adventure" className="bg-card rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <img src="/src/assets/cooking-event.jpg" alt="Regional Pasta Adventure" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-primary mb-2">Regional Pasta Adventure</h3>
            <p className="text-muted-foreground mb-4">Explore the diversity of Italy’s pasta regions: orecchiette from Puglia, trofie from Liguria, and more.</p>
          </Link>
          <Link to="/pasta-making/family-workshop" className="bg-card rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <img src="/src/assets/catering.jpg" alt="Family Pasta Workshop" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-primary mb-2">Family Pasta Workshop</h3>
            <p className="text-muted-foreground mb-4">A joyful, family-friendly class where kids and adults create pasta together.</p>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-4xl py-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What Makes Us Special?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-card rounded-2xl shadow p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-primary mb-2">La Dolce Vita Atmosphere</h3>
            <p className="text-muted-foreground mb-4">Music, laughter, and a sprinkle of Italian magic. Our classes are as much about joy as they are about technique.</p>
            <h3 className="text-xl font-semibold text-primary mb-2">All Levels Welcome</h3>
            <p className="text-muted-foreground">Whether you’re a total beginner or a pasta aficionado, you’ll leave with new skills and a full heart.</p>
          </div>
          <div className="bg-card rounded-2xl shadow p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-primary mb-2">Small Groups, Big Memories</h3>
            <p className="text-muted-foreground mb-4">Intimate class sizes mean personal attention and new friendships. Every guest is part of the famiglia.</p>
            <h3 className="text-xl font-semibold text-primary mb-2">Take Home More Than Pasta</h3>
            <p className="text-muted-foreground">Recipes, stories, and a sense of accomplishment. Plus, plenty of leftovers!</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl py-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-background rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-2 shadow" />
              <blockquote className="italic text-muted-foreground mb-2">“{t.quote}”</blockquote>
              <span className="font-semibold text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="container mx-auto px-4 text-center py-16">
        <Link to="/request-quote" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Reserve Your Spot</Link>
        <div className="mt-8">
          <Link to="/about" className="inline-block px-8 py-4 bg-gradient-to-r from-golden to-sage text-background font-bold rounded-full shadow hover:scale-105 transition">
            Explore My Services
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default PastaMaking;
