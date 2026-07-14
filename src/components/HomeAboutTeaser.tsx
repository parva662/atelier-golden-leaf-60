import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

const HomeAboutTeaser = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">About Pari</p>
        <h2 className="text-4xl font-bold text-foreground mb-6">Persian hospitality, handmade food, and shared tables</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Butterfly Bites is Pari's personal culinary project: Persian-inspired hospitality, handmade food, Italian fresh
          pasta workshops, and warm gatherings that bring people together around the table.
        </p>
        <Link
          to={route('about')}
          className="inline-block px-6 py-3 border border-primary text-primary rounded-md font-medium transition hover:bg-primary hover:text-primary-foreground"
        >
          Read About Pari
        </Link>
      </div>
    </div>
  </section>
);

export default HomeAboutTeaser;
