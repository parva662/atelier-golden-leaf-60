
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import pastaMaking from "@/assets/pasta-making.jpg";
import catering from "@/assets/catering.jpg";
import cookingEvent from "@/assets/cooking-event.jpg";

/**
 * Service type for describing each service offered.
 * @typedef {Object} Service
 * @property {string} id - Unique identifier for the service
 * @property {string} title - Display name of the service
 * @property {string} description - Short description
 * @property {string} image - Image path
 * @property {string} details - Detailed description
 * @property {string[]} features - List of features
 */

/**
 * Services component displays all main offerings as cards.
 * @component
 * @example
 * return (
 *   <Services />
 * )
 */

const Services: React.FC = () => {
  /**
   * List of services to display. Each service is shown as a card.
   * @type {Service[]}
   */
  const services = [
    {
      id: "catering",
      title: "Catering",
      description: "Custom food tables and handmade menus for gatherings and celebrations",
      image: catering,
      details: "For hosts who want a warm, abundant table without losing the personal touch. Menus can be shaped around your occasion, guests, and dietary needs.",
      features: ["Custom menu planning", "Celebration tables", "Personal presentation", "Dietary accommodations"],
      actionLabel: "View Catering",
      actionHref: route('artisanal'),
    },
    {
      id: "pasta",
      title: "Pasta Workshops",
      description: "Hands-on fresh pasta sessions for families, friends, and small groups",
      image: pastaMaking,
      details: "Learn the joy of handmade pasta in a relaxed workshop format. Guests make, taste, and share the experience together.",
      features: ["Hands-on techniques", "Small group format", "Take-home recipes", "Shared meal experience"],
      actionLabel: "Explore Pasta Workshops",
      actionHref: route('pastaMaking'),
    },
    {
      id: "events",
      title: "Events / Culinary Experiences",
      description: "Seasonal experiences, pop-ups, and future Butterfly Bites gatherings",
      image: cookingEvent,
      details: "The Events page stays ready for upcoming real dates, menus, and experiences as they are confirmed.",
      features: ["Future event listings", "Workshop experiences", "Seasonal ideas", "Community gatherings"],
      actionLabel: "See Events",
      actionHref: route('events'),
    }
  ];

  return (
    <section id="catering" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose your
            <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
              Butterfly Bites experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three clear ways to gather around handmade food: catering, pasta workshops, and culinary events.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={service.actionHref}
                  className="w-full block bg-gradient-to-r from-golden to-sage hover:from-golden/90 hover:to-sage/90 text-foreground text-center px-4 py-2 rounded-md font-medium transition"
                >
                  {service.actionLabel}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


/**
 * Exports the Services component for use in the app.
 * @see Services
 */
export default Services;
