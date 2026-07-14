/**
 * Artisanal.tsx
 * Artisanal Catering page component for Butterfly Bites.
 *
 * - Displays sections for custom menus, ingredient philosophy, personal service, and reviews.
 * - Uses anchor navigation for smooth scrolling to sections.
 * - Includes detailed menu examples and service highlights.
 *
 * @component
 * @example
 * // Usage:
 * import Artisanal from './Artisanal';
 * <Artisanal />
 */
import ArtisanalHeaderNav from "@/components/Artisanal/ArtisanalHeaderNav";
import CustomMenus from "@/components/Artisanal/CustomMenus";
import LocalSourcing from "@/components/Artisanal/LocalSourcing";
import PersonalService from "@/components/Artisanal/PersonalService";
import CateringReviews from "@/components/Artisanal/CateringReviews";

/**
 * Artisanal component renders the full Artisanal Catering experience page.
 *
 * - Navigation bar at the top for section anchors.
 * - Header with main image and intro text.
 * - Main sections: Custom Menus, Ingredient Philosophy, Personal Service, Reviews.
 *
 * @returns {JSX.Element}
 * @example
 * <Artisanal />
 */
const Artisanal = () => {
  return (
    <main id="artisanal-artisanal" className="py-20 bg-background">
      <ArtisanalHeaderNav />
      <CustomMenus />
      <LocalSourcing />
      <PersonalService />
      <CateringReviews />
    </main>
  );
};

export default Artisanal;
