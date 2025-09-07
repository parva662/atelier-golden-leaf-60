const ROUTES = {
  home: '/',
  about: '/about',
  catering: '/artisinal',
  pastaMaking: {
    base: '/pasta-making',
    classicItalian: 'classic-italian',
    regionalAdventure: 'regional-adventure',
    familyWorkshop: 'family-workshop',
  },
  events: '/events',
  contact: '/contact',
};

/**
 * Looks up a route by dot-separated key, e.g. 'pastaMaking.classicItalian'.
 * If a subroute is a string not starting with '/', it is appended to its parent's root.
 * Returns the route string, or throws if not found.
 */
export function route(key: string): string {
  const parts = key.split('.');
  let current: unknown = ROUTES;
  let path = '';
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (
      current &&
      (typeof current === 'object' || typeof current === 'function') &&
      part in (current as Record<string, unknown>)
    ) {
      current = (current as Record<string, unknown>)[part];
      if (typeof current === 'string') {
        if (i === 0 || current.startsWith('/')) {
          path = current;
        } else if (
          parts.length > 1 &&
          i === 1 &&
          typeof ROUTES[parts[0]] === 'object' &&
          ROUTES[parts[0]] !== null &&
          'base' in (ROUTES[parts[0]] as object) &&
          typeof (ROUTES[parts[0]] as { base: string }).base === 'string'
        ) {
          // If parent has a 'base' key, use it
          path = (ROUTES[parts[0]] as { base: string }).base.replace(/\/$/, '') + '/' + current;
        } else {
          path = path.replace(/\/$/, '') + '/' + current;
        }
      }
    } else {
      throw new Error(`Route not found for key: ${key}`);
    }
  }
  if (typeof current === 'string') return path;
  throw new Error(`Route not found for key: ${key}`);
}
