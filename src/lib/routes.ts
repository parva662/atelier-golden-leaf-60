/**
 * ROUTES is a nested object that defines all named routes for the app.
 * Subroutes are defined as properties of their parent route.
 *
 * @example
 * ROUTES.pastaMaking.classicItalian // 'classic-italian' (used with route helper)
 */
const ROUTES = {
  home: '/',
  about: '/about',
  artisanal: Object.assign(
    () => '/artisanal',
    {
      customMenus: 'custom-menus',
      localSourcing: 'local-sourcing',
      personalService: 'personal-service',
      // add more artisanal subpages here if needed
    }
  ),
  pastaMaking: Object.assign(
    () => '/pasta-making',
    {
      classicItalian: 'classic-italian',
      regionalAdventure: 'regional-adventure',
      familyWorkshop: 'family-workshop',
    }
  ),
  events: '/events',
  requestQuote: '/request-quote',
  contact: '/contact',
};

/**
 * Looks up a route by dot-separated key, e.g. 'about', 'pastaMaking', or 'pastaMaking.classicItalian'.
 * Handles any nested route structure defined in ROUTES, not just hardcoded cases.
 *
 * @param {string} key - The dot-separated route key (e.g. 'about', 'pastaMaking.classicItalian')
 * @returns {string} The full route path (e.g. '/about', '/pasta-making/classic-italian')
 * @throws {Error} If the route key is invalid or not found
 *
 * @example
 * route('about') // '/about'
 * route('pastaMaking') // '/pasta-making'
 * route('pastaMaking.classicItalian') // '/pasta-making/classic-italian'
 */
export function route(key: string): string {
  const parts = key.split('.');
  let current: unknown = ROUTES;
  let pathParts: string[] = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (
      current &&
      (typeof current === 'object' || typeof current === 'function') &&
      part in (current as Record<string, unknown>)
    ) {
      current = (current as Record<string, unknown>)[part];
      if (typeof current === 'string') {
        // If absolute path, reset pathParts
        if (current.startsWith('/')) {
          pathParts = [current];
        } else {
          pathParts.push(current);
        }
      } else if (typeof current === 'function') {
        // If function, call it and treat as path segment
        const fnPath = current();
        if (fnPath.startsWith('/')) {
          pathParts.push(fnPath.replace(/\/$/, ''));
        } else {
          pathParts.push(fnPath);
        }
      }
    } else {
      throw new Error(`Route not found for key: ${key}`);
    }
  }
  // Join path parts, handling leading/trailing slashes
  let fullPath = pathParts
    .map((p, idx) => (idx === 0 ? p.replace(/\/$/, '') : p.replace(/^\//, '')))
    .join('/');
  if (!fullPath.startsWith('/')) fullPath = '/' + fullPath;
  return fullPath;
}
