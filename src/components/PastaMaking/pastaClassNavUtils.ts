/**
 * pastaClassNavUtils.ts
 * Utility functions and constants for pasta class navigation.
 *
 * @module pastaClassNavUtils
 */

/**
 * Array of navigation links for pasta making classes.
 *
 * @type {Array<{to: string, label: string}>}
 * @example
 * pastaClassLinks.forEach(link => console.log(link.label));
 */
export const pastaClassLinks = [
  { to: "/pasta-making/classic-italian", label: "Classic Italian Pasta Night" },
  { to: "/pasta-making/regional-adventure", label: "Regional Pasta Adventure" },
  { to: "/pasta-making/family-workshop", label: "Family Pasta Workshop" }
];

/**
 * Smoothly scrolls the window to the top.
 *
 * @function
 * @returns {void}
 * @example
 * scrollToTop();
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}