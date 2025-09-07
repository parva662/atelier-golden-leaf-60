
import { Button } from "@/components/ui/button";
import chefPortrait from "@/assets/chef-portrait.jpg";
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
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              From My Kitchen
              <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
                To Your Heart
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Welcome to Butterfly Bites! What started as Sunday dinners for friends has grown into a passion for sharing the art of handmade cuisine. Every dish tells a story, every recipe carries tradition, and every meal brings people together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to={route('contact')}
                className="inline-block px-8 py-4 bg-gradient-to-r from-golden to-sage text-foreground font-medium rounded-md shadow hover:scale-105 transition"
              >
                Explore My Services
              </Link>
              <Link to={route('about')}>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Watch My Story
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-golden/20 to-sage/20 rounded-2xl transform rotate-3"></div>
            <img
              src={chefPortrait}
              alt="Maria - Artisanal Chef and Food Blogger"
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