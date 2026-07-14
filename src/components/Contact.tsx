import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { route } from "@/lib/routes";

const Contact: React.FC = () => {
  return (
    <main className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            General
            <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question about Butterfly Bites, availability, or what might fit your gathering? Send a note here. For
            booking details, use the quote request form.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a General Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" action="https://formspree.io/f/mrbybkng" method="POST">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input id="first-name" name="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input id="last-name" name="lastName" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-foreground mb-2">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General question</option>
                    <option value="availability">Availability</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} placeholder="Tell me what you would like to ask..." />
                </div>
                <Button type="submit" className="w-full bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-cream rounded-2xl p-6 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Planning catering, a workshop, or an event?</h3>
              <p className="text-muted-foreground mb-5">
                Use the request form for booking details like service type, date, guest count, location, and dietary needs.
              </p>
              <Link
                to={route('requestQuote')}
                className="inline-block px-6 py-3 bg-gradient-to-r from-golden to-sage text-foreground rounded-md font-medium shadow transition hover:scale-105"
              >
                Request a Quote
              </Link>
            </div>
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
              <a href="https://instagram.com/butterfly__bites" className="text-lg text-primary hover:underline">
                @butterflybites
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
