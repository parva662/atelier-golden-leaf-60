import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

/**
 * Footer component displays the bottom section of the site.
 * Includes logo, service links, and contact/social info.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
const Footer: React.FC = () => {
  return (
    // The footer uses Tailwind CSS for layout and color.
    <footer className="bg-warm-gray text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/butterfly-bites-logo.png" alt="Butterfly Bites Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl">Butterfly Bites</span>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Sharing the art of handmade cuisine and bringing people together around the table, one meal at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#catering" className="hover:text-primary transition-colors">Artisanal Catering</a></li>
              <li className="group relative">
                <Link to={route('pastaMaking')} className="hover:text-primary transition-colors">Pasta Making Classes</Link>
                <ul className="absolute left-0 mt-2 bg-warm-gray rounded shadow-lg p-2 hidden group-hover:block z-10 min-w-[220px]">
                  <li><Link to={route('pastaMaking.classicItalian')} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors">Classic Italian Pasta Night</Link></li>
                  <li><Link to={route('pastaMaking.regionalAdventure')} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors">Regional Pasta Adventure</Link></li>
                  <li><Link to={route('pastaMaking.familyWorkshop')} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors">Family Pasta Workshop</Link></li>
                </ul>
              </li>
              <li><Link to={route('events')} className="hover:text-primary transition-colors">Culinary Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-cream/80">
              <li><Link to={route('contact')} className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; 2024 Butterfly Bites. Made with love and local ingredients.</p>
        </div>
      </div>
    </footer>
  );
};


/**
 * Exports the Footer component for use in the app.
 * @see Footer
 */
export default Footer;