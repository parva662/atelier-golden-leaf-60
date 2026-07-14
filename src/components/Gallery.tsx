import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import catering from "@/assets/catering.jpg";
import cookingEvent from "@/assets/cooking-event.jpg";
import pari from "@/assets/pari.jpg";
import pastaMaking from "@/assets/pasta-making.jpg";

const galleryItems = [
  {
    title: "Catering tables",
    category: "Catering",
    image: pari,
    alt: "Butterfly Bites catering table with Pari",
  },
  {
    title: "Fresh pasta preparation",
    category: "Pasta workshops",
    image: pastaMaking,
    alt: "Fresh handmade pasta preparation",
  },
  {
    title: "Workshop moments",
    category: "Experiences",
    image: cookingEvent,
    alt: "Guests cooking together at a culinary gathering",
  },
  {
    title: "Prepared dishes",
    category: "Catering",
    image: catering,
    alt: "Prepared catering dishes for a gathering",
  },
];

const Gallery = () => (
  <main className="py-20 bg-background min-h-screen">
    <header className="container mx-auto px-4 max-w-4xl text-center mb-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Gallery</p>
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Food, tables, workshops, and gatherings</h1>
      <p className="text-xl text-muted-foreground">
        A dedicated place for Butterfly Bites catering, pasta workshops, events, and behind-the-scenes moments. More real
        client and workshop photos can be added here as the gallery grows.
      </p>
    </header>

    <section className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        {galleryItems.map((item) => (
          <article key={item.title} className="bg-card rounded-2xl shadow border border-border/50 overflow-hidden">
            <div className="aspect-[4/3] bg-muted">
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-primary mb-2">{item.category}</p>
              <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-4 text-center py-16">
      <h2 className="text-3xl font-bold text-foreground mb-4">Planning a table, workshop, or event?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Use the request form to share what you are planning, and include any inspiration or image needs for your event.
      </p>
      <Link to={route('requestQuote')} className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">
        Request a Quote
      </Link>
    </section>
  </main>
);

export default Gallery;
