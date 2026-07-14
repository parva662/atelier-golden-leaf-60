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
              <img src="/Butterfly-image.png" alt="Butterfly Bites Logo" className="w-auto h-12 object-contain" />
              {/* Text image */}
              <img 
                src="/Butterfly-word.png" 
                alt="Butterfly Bites Text" 
                className="h-9" 
              />
            </div>
            <p className="text-cream/80 leading-relaxed">
              Sharing the art of handmade cuisine and bringing people together around the table, one meal at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-cream/80">
              <li><Link to={route('artisanal')} className="hover:text-primary transition-colors">Catering</Link></li>
              <li className="group relative">
                <Link to={route('pastaMaking')} className="hover:text-primary transition-colors">Pasta Workshops</Link>
                <ul className="absolute left-0 mt-2 bg-warm-gray rounded shadow-lg p-2 hidden group-hover:block z-10 min-w-[220px]">
                  <li><Link to={route('pastaMaking.classicItalian')} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors">Classic Italian Pasta Night</Link></li>
                  <li><Link to={route('pastaMaking.regionalAdventure')} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors">Regional Pasta Adventure</Link></li>
                  <li><Link to={route('pastaMaking.familyWorkshop')} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors">Family Pasta Workshop</Link></li>
                </ul>
              </li>
              <li><Link to={route('events')} className="hover:text-primary transition-colors">Culinary Events</Link></li>
              <li><Link to={route('gallery')} className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-cream/80">
              <li><Link to={route('requestQuote')} className="hover:text-primary transition-colors">Request a Quote</Link></li>
              <li><Link to={route('contact')} className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="https://instagram.com/butterfly__bites" className="hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; 2026 Butterfly Bites. Made with love and local ingredients.</p>
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
