const menuIdeas = [
  {
    title: "Persian Celebration Table",
    note: "Inspired by generous Persian hosting",
    items: [
      "Herb-forward dips, breads, pickles, and seasonal salads",
      "Rice, roasted vegetables, herbs, and warm sharing dishes",
      "Fruit, nuts, sweets, or a light dessert finish",
    ],
  },
  {
    title: "Tuscan Table",
    note: "Italian-style inspiration for pasta-forward gatherings",
    items: [
      "Burrata with tomatoes, basil, and olive oil",
      "Handmade pasta with a seasonal sauce",
      "Citrus or olive oil cake with fruit",
    ],
  },
  {
    title: "Persian-Italian Gathering",
    note: "A custom table that connects Pari's roots with fresh pasta craft",
    items: [
      "Persian herbs, dips, and colorful table starters",
      "Fresh pasta or handmade centerpiece dish",
      "Shared sides and a relaxed dessert moment",
    ],
  },
];

const CustomMenus = () => (
  <section className="container mx-auto px-4 py-12 max-w-6xl">
    <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-4">Custom Menu Inspiration</h2>
        <p className="text-lg text-muted-foreground">
          These are example directions, not fixed packages. Pari shapes each menu around your occasion, guest needs, and
          the kind of table you want to share.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {menuIdeas.map((menu) => (
          <article key={menu.title} className="bg-background rounded-xl border border-border p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">{menu.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{menu.note}</p>
            <ul className="space-y-3 text-muted-foreground">
              {menu.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="text-center text-muted-foreground mt-8">
        Vegetarian, vegan, gluten-free, allergy-aware, and mixed cultural menus can be discussed during the request process.
      </p>
    </div>
  </section>
);

export default CustomMenus;
