import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import catering from "@/assets/catering.jpg";
import cookingEvent from "@/assets/cooking-event.jpg";
import pari from "@/assets/pari.jpg";
import pastaMaking from "@/assets/pasta-making.jpg";

const galleryItems = [
  { title: "Catering tables", image: pari, alt: "Butterfly Bites catering table with Pari" },
  { title: "Fresh pasta", image: pastaMaking, alt: "Fresh handmade pasta preparation" },
  { title: "Gatherings", image: cookingEvent, alt: "Guests cooking together at a culinary gathering" },
  { title: "Celebration food", image: catering, alt: "Prepared catering dishes for a gathering" },
];

const GalleryPreview = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Gallery</p>
          <h2 className="text-4xl font-bold text-foreground">A look at the Butterfly Bites table</h2>
        </div>
        <Link to={route('gallery')} className="text-primary font-medium hover:underline">
          View Gallery
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <Link key={item.title} to={route('gallery')} className="group block">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-medium text-foreground">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryPreview;
