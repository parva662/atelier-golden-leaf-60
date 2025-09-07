import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
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
              <form className="space-y-6">
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
                    <option value="catering">Artisanal Catering</option>
                    <option value="pasta">Pasta Making Classes</option>
                    <option value="events">Culinary Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your event, dietary preferences, or any questions you have..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-golden to-sage hover:from-golden/90 hover:to-sage/90 text-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">info@butterflybitescaterings.nl</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Berkeley, California</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Follow My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-golden to-sage text-foreground hover:opacity-80 transition-opacity">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-golden to-sage text-foreground hover:opacity-80 transition-opacity">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Follow along for daily kitchen adventures, seasonal recipes, and behind-the-scenes moments from my culinary world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-cream to-card">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join my monthly newsletter for seasonal recipes, cooking tips, and first access to new classes.
                </p>
                <div className="flex space-x-2">
                  <Input placeholder="Your email" className="flex-1" />
                  <Button size="sm" className="bg-gradient-to-r from-golden to-sage hover:from-golden/90 hover:to-sage/90 text-foreground">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;