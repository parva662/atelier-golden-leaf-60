/**
 * PastaClassNav.tsx
 * Navigation bar for switching between pasta making class pages.
 *
 * - Renders a set of navigation links for each pasta class.
 * - Uses React Router <Link> for SPA navigation.
 * - Uses a scrollToTop utility for smooth navigation UX.
 * - Links and labels are defined in pastaClassLinks (imported from a utility file).
 *
 * @component
 * @example
 * // Usage:
 * import PastaClassNav from "@/components/PastaMaking/PastaClassNav";
 * 
 * export default function Page() {
 *   return <PastaClassNav />;
 * }
 */

import { Link } from "react-router-dom";
import { pastaClassLinks, scrollToTop } from "@/components/PastaMaking/pastaClassNavUtils";

/**
 * Renders a navigation bar for pasta making classes.
 *
 * @returns {JSX.Element} The navigation bar component.
 *
 * @example
 * <PastaClassNav />
 */
const PastaClassNav = (): JSX.Element => (
  // Navigation bar container
  <nav className="container mx-auto px-4 mb-12">
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {/* Render a navigation link for each pasta class */}
      {pastaClassLinks.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className="px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition"
          onClick={scrollToTop}
        >
          {link.label}
        </Link>
      ))}
    </div>
  </nav>
);

export default PastaClassNav;
