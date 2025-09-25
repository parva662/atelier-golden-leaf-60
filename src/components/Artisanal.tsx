/**
 * Artisanal.tsx
 * Artisanal Catering page component for Butterfly Bites.
 *
 * - Displays sections for custom menus, local sourcing, and personal service.
 * - Uses anchor navigation for smooth scrolling to sections.
 * - Includes detailed menu examples, local partners, and service highlights.
 * - Uses React Router <Link> for SPA navigation to the quote request page.
 *
 * @component
 * @example
 * // Usage:
 * import Artisanal from './Artisanal';
 * <Artisanal />
 */
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import ArtisanalHeaderNav from "@/components/Artisanal/ArtisanalHeaderNav";
import CustomMenus from "@/components/Artisanal/CustomMenus";
import LocalSourcing from "@/components/Artisanal/LocalSourcing";
import PersonalService from "@/components/Artisanal/PersonalService";
import Fast from "@/components/Artisanal/Fast";

/**
 * Artisanal component renders the full Artisanal Catering experience page.
 *
 * - Navigation bar at the top for section anchors.
 * - Header with main image and intro text.
 * - Three main sections: Custom Menus, Local Sourcing, Personal Service.
 * - Each section includes images, descriptions, and feature lists.
 * - Footer with a call-to-action button.
 *
 * @returns {JSX.Element}
 * @example
 * <Artisanal />
 */
const Artisanal = () => {
  return (
    // Main wrapper for the page
    <main id="artisanal-artisanal" className="py-20 bg-background">
      <ArtisanalHeaderNav />
      <CustomMenus />
      <LocalSourcing />
      <PersonalService />
      <Fast />
      {/* Footer call-to-action: request a quote */}
      <footer className="container mx-auto px-4 text-center py-16">
        <Link to={route('requestQuote')} className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Request a Quote</Link>
      </footer>
    </main>
  );
};

export default Artisanal;