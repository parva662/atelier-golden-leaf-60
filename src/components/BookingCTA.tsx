import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

type BookingCTAProps = {
  title?: string;
  description?: string;
};

const BookingCTA = ({
  title = "Ready to plan something delicious?",
  description = "Tell me what you are planning and I will help you choose the right catering, workshop, or event experience.",
}: BookingCTAProps) => (
  <section className="py-16 bg-cream">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto rounded-2xl bg-background border border-border p-8 text-center shadow-sm">
        <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={route('requestQuote')}
            className="inline-block px-8 py-3 bg-gradient-to-r from-golden to-sage text-foreground font-medium rounded-md shadow transition hover:scale-105"
          >
            Request a Quote
          </Link>
          <Link
            to={route('contact')}
            className="inline-block px-8 py-3 border border-primary text-primary font-medium rounded-md transition hover:bg-primary hover:text-primary-foreground"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default BookingCTA;
