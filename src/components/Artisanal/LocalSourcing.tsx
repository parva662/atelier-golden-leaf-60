const values = [
  {
    title: "Seasonal ingredients",
    description: "Menus can follow the season, the occasion, and what feels fresh and generous for the table.",
  },
  {
    title: "Persian herbs and flavors",
    description: "Herbs, brightness, texture, and abundance help guide the Persian-inspired catering direction.",
  },
  {
    title: "Handmade preparation",
    description: "Food is prepared with care, from dips and salads to pasta, sides, and shared dishes.",
  },
  {
    title: "Menus shaped around your guests",
    description: "Dietary needs, event style, group size, and preferences can shape the final menu proposal.",
  },
];

const LocalSourcing = () => (
  <section id="local-sourcing" className="container mx-auto px-4 py-12 max-w-6xl">
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
      <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-foreground mb-4">Fresh, Seasonal & Handmade</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Butterfly Bites catering is built around handmade preparation, warm Persian-inspired flavors, and flexible menus
          shaped around the people at your table.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {values.map((value) => (
            <div key={value.title} className="bg-background rounded-xl border border-border p-5">
              <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-primary/50 bg-cream p-8 flex items-center justify-center text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">Future image</p>
          <p className="text-muted-foreground">
            Add a real close-up of Pari's Persian-inspired catering ingredients, handmade preparation, or finished table in
            Phase 2B.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LocalSourcing;
