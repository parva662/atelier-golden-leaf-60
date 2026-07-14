
import { Button } from "@/components/ui/button";
import pari from "@/assets/pari.jpg";
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

/**
 * Hero component displays the main landing section of the homepage.
 * Includes a headline, description, call-to-action buttons, and a chef portrait.
 *
 * @component
 * @example
 * return (
 *   <Hero />
 * )
 */

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-background pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Butterfly Bites Catering</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Handmade catering,
              <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
                pasta workshops & events
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Warm, personal food experiences by Pari: Persian-inspired catering, fresh pasta workshops, and culinary gatherings made with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to={route('requestQuote')}
                className="inline-block px-8 py-4 bg-gradient-to-r from-golden to-sage text-foreground font-medium rounded-md shadow hover:scale-105 transition"
              >
                Request Catering Quote
              </Link>
              <Link to={route('pastaMaking')}>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Book a Pasta Workshop
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-golden/20 to-sage/20 rounded-2xl transform rotate-3"></div>
            <img
              src={pari}
              alt="Pari with a Butterfly Bites catering table"
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


/**
 * Exports the Hero component for use in the app.
 * @see Hero
 */
export default Hero;
