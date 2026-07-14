import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import { scrollToTop } from "./PastaMaking/pastaClassNavUtils";

import CateringImg from "@/assets/catering.jpg";
import CookingEventImg from "@/assets/cooking-event.jpg";
import PastaMakingImg from "@/assets/pasta-making.jpg";

const events = [
  {
    title: "Midnight Feast in the Olive Grove",
    description: "A magical, candlelit dinner under the stars, featuring seasonal farm-to-table dishes, live acoustic music, and storytelling by local artists.",
    image: CookingEventImg,
    highlights: [
      "Farm-fresh tasting menu",
      "Live music & poetry",
      "Stargazing with local astronomers",
      "Handcrafted cocktails"
    ]
  },
  {
    title: "Pasta & Paint Pop-Up",
    description: "Unleash your creativity with a hands-on pasta making class, but not a normal pasta, a piece of art. Sip wine, make art, and enjoy a communal meal.",
    image: PastaMakingImg,
    highlights: [
      "All art supplies included",
      "Wine pairings",
      "Collaborative mural creation",
      "Take-home pasta & painting"
    ]
  },
  {
    title: "Harvest Celebration Dinner",
    description: "Celebrate the bounty of autumn with a multi-course feast and a chef Q&A. Each dish tells the story of the season.",
    image: CateringImg,
    highlights: [
      "Seasonal tasting menu",
      "Meet the farmers & winemakers",
      "Interactive chef demo",
      "Live folk music"
    ]
  }
];

const Events = () => (
  <main className="py-20 bg-background min-h-screen">
    <header className="container mx-auto px-4 max-w-4xl text-center mb-12">
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Events & Culinary Experiences</h1>
      <p className="text-xl text-muted-foreground mb-8">
        A home for Butterfly Bites events, workshops, and culinary experiences. Confirmed dates, menus, and booking
        details can be added here when future events are ready.
      </p>
      <img src={CookingEventImg} alt="Culinary event under the stars" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
      <Link to={route('requestQuote')} className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition" onClick={scrollToTop}>
        Inquire About Events
      </Link>
    </header>

    <section className="container mx-auto px-4 max-w-4xl py-8">
      <div className="bg-cream border border-border rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Future event listings</h2>
        <p className="text-muted-foreground">
          This section is ready for real dates, locations, menus, ticket links, and availability details.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 max-w-5xl py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Events</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {events.map((event) => (
          <div key={event.title} className="bg-card rounded-3xl shadow-xl p-8 flex flex-col items-center text-center">
            <img src={event.image} alt={event.title} className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
            <p className="text-muted-foreground mb-4">{event.description}</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 text-left">
              {event.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <Link to={route('requestQuote')} className="mt-auto px-6 py-2 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition" onClick={scrollToTop}>
              Inquire About This Event
            </Link>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-4 max-w-4xl py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Our Events Stand Out</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-card rounded-2xl shadow p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-primary mb-2">Immersive Experiences</h3>
          <p className="text-muted-foreground mb-4">Every event is designed to engage all your senses. From the aroma of fresh herbs to the sound of laughter, you will be swept into the moment.</p>
          <h3 className="text-xl font-semibold text-primary mb-2">Local Collaboration</h3>
          <p className="text-muted-foreground">We partner with local artists, musicians, and farmers to create events that celebrate our community and its talents.</p>
        </div>
        <div className="bg-card rounded-2xl shadow p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-primary mb-2">Personal Touch</h3>
          <p className="text-muted-foreground mb-4">Butterfly Bites will bring warmth, creativity, and attention to detail to every gathering. You are not just a guest; you are family.</p>
          <h3 className="text-xl font-semibold text-primary mb-2">Memories to Last</h3>
          <p className="text-muted-foreground">From keepsake recipes to new friendships, our events leave you with more than just a full belly.</p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 max-w-3xl py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What Guests Are Saying</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background rounded-xl shadow p-6 flex flex-col items-center text-center">
          <blockquote className="italic text-muted-foreground mb-2">"The Midnight Feast was pure magic. The food, the music, the stars - an experience we will never forget."</blockquote>
          <span className="font-semibold text-primary">- Sofia & Marco</span>
        </div>
        <div className="bg-background rounded-xl shadow p-6 flex flex-col items-center text-center">
          <img src={PastaMakingImg} alt="Guest testimonial" className="w-16 h-16 rounded-full object-cover mb-2 shadow" />
          <blockquote className="italic text-muted-foreground mb-2">"Painting pasta and sharing a meal with new friends was the highlight of my year!"</blockquote>
          <span className="font-semibold text-primary">- Priya</span>
        </div>
      </div>
    </section>

    <footer className="container mx-auto px-4 text-center py-16">
      <Link to={route('requestQuote')} className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition" onClick={scrollToTop}>
        Inquire About Events
      </Link>
    </footer>
  </main>
);

export default Events;
