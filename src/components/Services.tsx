import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import pastaMaking from "@/assets/pasta-making.jpg";
import catering from "@/assets/catering.jpg";
import cookingEvent from "@/assets/cooking-event.jpg";

const Services = () => {
  const services = [
    {
      id: "catering",
      title: "Artisanal Catering",
      description: "Handcrafted menus for intimate gatherings and special occasions",
      image: catering,
      details: "From intimate dinner parties to celebration feasts, I create bespoke menus using seasonal ingredients and traditional techniques. Every dish is prepared with love and attention to detail.",
      features: ["Custom menu design", "Fresh, local ingredients", "Professional presentation", "Dietary accommodations"]
    },
    {
      id: "pasta",
      title: "Pasta Making Classes",
      description: "Learn the ancient art of handmade pasta in small, intimate groups",
      image: pastaMaking,
      details: "Discover the meditative joy of pasta making. In these hands-on classes, you'll learn traditional techniques passed down through generations while creating delicious memories.",
      features: ["Traditional techniques", "Small class sizes", "Take-home recipes", "All materials included"]
    },
    {
      id: "events",
      title: "Culinary Events",
      description: "Unique dining experiences and pop-up dinners that tell a story",
      image: cookingEvent,
      details: "Join me for seasonal pop-up dinners, cooking workshops, and collaborative events with local farmers and artisans. Each event is a celebration of community and craft.",
      features: ["Seasonal menus", "Storytelling dinners", "Farm collaborations", "Limited seating"]
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I
            <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each service is designed to share the joy of authentic, handmade cuisine while building connections around the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                <Button className="w-full bg-gradient-to-r from-golden to-sage hover:from-golden/90 hover:to-sage/90 text-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;