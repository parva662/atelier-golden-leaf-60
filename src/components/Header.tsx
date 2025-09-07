
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { route } from "@/lib/routes";

/**
 * Header component displays the top navigation bar for the site.
 * It includes the logo, navigation links, and a responsive mobile menu.
 *
 * - Uses React Router's <Link> for client-side navigation.
 * - Navigation items are defined in the `navigation` array.
 * - Handles submenu hover for desktop and toggles a mobile menu for small screens.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */


const Header: React.FC = () => {
  /**
   * State to control whether the mobile menu is open.
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Navigation items for the main menu. Each item can have sublinks for dropdowns.
   * @type {Array<{name: string, href: string, sublinks?: Array<{name: string, href: string}>}>}
   */
  const navigation = [
    { name: "About", href: route('about') },
    { name: "Catering", href: route('artisanal') },
    {
      name: "Pasta Making",
      href: route('pastaMaking'),
      sublinks: [
        { name: "Classic Italian Pasta Night", href: route('pastaMaking.classicItalian') },
        { name: "Regional Pasta Adventure", href: route('pastaMaking.regionalAdventure') },
        { name: "Family Pasta Workshop", href: route('pastaMaking.familyWorkshop') }
      ]
    },
    { name: "Events", href: route('events') },
    { name: "Contact", href: route('contact') },
  ];

  /**
   * State to track which submenu (if any) is open on desktop.
   */
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  /**
   * Ref to store the submenu close timeout, for smooth hover transitions.
   */
  const submenuTimeout = React.useRef<NodeJS.Timeout | null>(null);

  /**
   * Opens a submenu by name (used on mouse enter).
   * @param {string} name - The name of the menu item to open.
   */
  const handleSubmenuEnter = (name: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setSubmenuOpen(name);
  };
  /**
   * Closes the submenu after a short delay (used on mouse leave).
   */
  const handleSubmenuLeave = () => {
    submenuTimeout.current = setTimeout(() => setSubmenuOpen(null), 180);
  };

  // The returned JSX renders the header, logo, navigation, and mobile menu.
  return (
    // The header is fixed to the top and uses Tailwind CSS for styling.
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to={route('home')} className="flex items-center space-x-2">
              <img src="/butterfly-bites-logo.png" alt="Butterfly Bites Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl text-foreground">Butterfly Bites</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.sublinks ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleSubmenuEnter(item.name)}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors relative group"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-golden to-sage scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                  <div
                    className={`absolute left-0 mt-2 bg-background rounded shadow-lg p-2 z-10 min-w-[220px] ${submenuOpen === item.name ? "block" : "hidden"}`}
                    onMouseEnter={() => handleSubmenuEnter(item.name)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    {item.sublinks.map((sub) => (
                      <Link key={sub.name} to={sub.href} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors text-foreground">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-golden to-sage scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )
            ))}
            <Link
              to={route('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md border block"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Book a Class
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {navigation.map((item) => (
                item.sublinks ? (
                  <div key={item.name} className="relative">
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 mt-2">
                      {item.sublinks.map((sub) => (
                        <Link key={sub.name} to={sub.href} className="block px-4 py-2 hover:bg-primary/10 rounded transition-colors text-foreground" onClick={() => setIsMenuOpen(false)}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Link
                to={route('contact')}
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md border block text-center"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Book a Class
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};


/**
 * Exports the Header component for use in the app.
 * @see Header
 */
export default Header;