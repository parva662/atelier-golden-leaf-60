/**
 * PersonalService.tsx
 * Page for Artisanal Catering - Personal Service section.
 */
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

const PersonalService = () => (
  <section id="personal-service" className="container mx-auto px-4 py-16 max-w-5xl">
    <div className="bg-card rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-center">
      <img src="/src/assets/chef-portrait.jpg" alt="Personal service from chef" className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 md:mb-0" />
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-foreground mb-4">Personal Service</h2>
        <p className="text-lg text-muted-foreground mb-4">From your first inquiry to the final farewell, Chef Ibrahim and his team are dedicated to making your event seamless, memorable, and uniquely yours. Experience the difference of true hospitality and attention to detail.</p>
        <div className="bg-background rounded-xl shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-primary mb-2">What to Expect</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Personalized event planning and menu consultation</li>
            <li>Custom table settings and decor</li>
            <li>On-site chef and professional staff</li>
            <li>Attention to every guest’s experience</li>
            <li>Flexible service styles: plated, buffet, family-style</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-golden to-sage rounded-xl shadow p-6 mb-6">
          <h4 className="text-lg font-bold text-background mb-2">Client Story</h4>
          <p className="text-background">“Chef Ibrahim made our anniversary dinner absolutely magical. Every detail was perfect, and our guests are still talking about the food and the warmth of the service.” <br /><span className="italic">— Sophia & Mark, San Francisco</span></p>
        </div>
        <Link to={route('requestQuote')} className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition">Request a Quote</Link>
      </div>
    </div>
  </section>
);

export default PersonalService;
