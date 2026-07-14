import chefPortrait from "@/assets/chef-portrait.jpg";

const PersonalService = () => (
  <section id="personal-service" className="container mx-auto px-4 py-12 max-w-6xl">
    <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10 grid md:grid-cols-[180px_1fr] gap-8 items-center">
      <img src={chefPortrait} alt="Personal service from chef" className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto" />
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Personal Service</h2>
        <p className="text-lg text-muted-foreground mb-6">
          From the first inquiry to the final table, Butterfly Bites is shaped around conversation, care, and a menu that
          fits your guests. Pari brings warmth, handmade preparation, and thoughtful details to each gathering.
        </p>
        <div className="bg-background rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">What to Expect</h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
            <li>Menu consultation</li>
            <li>Dietary needs discussion</li>
            <li>Personal table planning</li>
            <li>Flexible gathering styles</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PersonalService;
