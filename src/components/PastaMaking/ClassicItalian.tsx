/**
 * ClassicItalian.tsx
 * Classic Italian Pasta Night class page component.
 *
 * - Displays details for the Classic Italian Pasta Night class.
 * - Includes a navigation bar for switching between pasta classes.
 * - Uses React Router <Link> for SPA navigation to the quote request page.
 * - Uses a scrollToTop utility for smooth navigation UX.
 *
 * @component
 * @example
 * // Import and use in your route/page:
 * import ClassicItalian from "@/components/PastaMaking/ClassicItalian";
 * 
 * export default function Page() {
 *   return <ClassicItalian />;
 * }
 */

import { Link } from "react-router-dom";
import { route } from "@/lib/routes";
import PastaClassNav from "@/components/PastaMaking/PastaClassNav";
import { scrollToTop } from "@/components/PastaMaking/pastaClassNavUtils";

/**
 * Renders the Classic Italian Pasta Night class page.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <ClassicItalian />
 */
const ClassicItalian = (): JSX.Element => (
  // Main wrapper for the class page
  <main className="py-20 bg-background min-h-screen">
    {/* Navigation bar for pasta classes */}
    <PastaClassNav />
    {/* Header with class title, description, and image */}
    <header className="container mx-auto px-4 max-w-3xl text-center mb-16">
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Classic Italian Pasta Night</h1>
      <p className="text-xl text-muted-foreground mb-8">Learn to make tagliatelle, ravioli, and gnocchi from scratch, paired with traditional sauces. Hands-on dough making, secrets of perfect fillings, wine pairing tips, and take-home recipes await you!</p>
      <img src="/src/assets/pasta-making.jpg" alt="Classic Italian Pasta Night" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] mx-auto mb-8" />
      {/* Book This Class button navigates to quote request and scrolls to top */}
      <Link to={route('requestQuote')} className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition" onClick={scrollToTop}>Book This Class</Link>
    </header>
    {/* Add more details, testimonials, etc. as needed */}
  </main>
);

export default ClassicItalian;
