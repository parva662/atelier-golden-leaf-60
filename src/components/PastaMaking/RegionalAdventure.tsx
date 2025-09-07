/**
 * RegionalAdventure.tsx
 * Regional Pasta Adventure class page component.
 *
 * - Displays details for the Regional Pasta Adventure class.
 * - Includes a navigation bar for switching between pasta classes.
 * - Uses React Router <Link> for SPA navigation to the quote request page.
 * - Uses a scrollToTop utility for smooth navigation UX.
 *
 * @component
 * @example
 * // Import and use in your route/page:
 * import RegionalAdventure from "@/components/PastaMaking/RegionalAdventure";
 * 
 * export default function Page() {
 *   return <RegionalAdventure />;
 * }
 */

import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import PastaClassNav from "@/components/PastaMaking/PastaClassNav";
import { scrollToTop } from "@/components/PastaMaking/pastaClassNavUtils";

/**
 * Renders the Regional Pasta Adventure class page.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <RegionalAdventure />
 */
const RegionalAdventure = (): JSX.Element => (
  <main className="py-20 bg-background min-h-screen">
    <PastaClassNav />
    <header className="container mx-auto px-4 max-w-3xl text-center mb-16">
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Regional Pasta Adventure</h1>
      <p className="text-xl text-muted-foreground mb-8">Explore the diversity of Italy’s pasta regions: orecchiette from Puglia, trofie from Liguria, and more. Regional history, unique shapes, local ingredients, and a group tasting experience!</p>
      <img src="/src/assets/cooking-event.jpg" alt="Regional Pasta Adventure" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
      <Link to={route('requestQuote')} className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition" onClick={scrollToTop}>Book This Class</Link>
    </header>
    {/* Add more details, testimonials, etc. as needed */}
  </main>
);

export default RegionalAdventure;
