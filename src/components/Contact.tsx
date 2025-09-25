
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

/**
 * Contact component displays the contact form and business contact info.
 * Includes a form for user inquiries and static contact details.
 *
 * @component
 * @example
 * return (
 *   <Contact />
 * )
 */

const Contact: React.FC = () => {
  return (
    <main className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Create
            <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
              Something Delicious
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on a culinary journey together? I'd love to hear about your next event, class, or catering needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" action="https://formspree.io/f/mrbybkng"  method="POST">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Your first name" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="artisanal">Artisanal Catering</option>
                    <option value="pasta">Pasta Making Classes</option>
                    <option value="events">Culinary Events</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={4} placeholder="Tell me about your event, class, or request..." />
                </div>
                <Button type="submit" className="w-full bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-lg text-foreground">parvaneh550@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-lg text-foreground">(+31) 0644517101</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-lg text-foreground">Ede, Netherlands</span>
            </div>
            <div className="flex items-center space-x-4">
              <Instagram className="w-6 h-6 text-primary" />
              <a href="https://instagram.com/butterfly__bites" className="text-lg text-primary hover:underline">@butterflybites</a>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="w-6 h-6 text-primary" />
              <a href="" className="text-lg text-primary hover:underline">Butterfly Bites</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


/**
 * Exports the Contact component for use in the app.
 * @see Contact
 */
export default Contact;
