# Section 1 — Project Structure: Understanding the Skeleton of Maria’s Kitchen

Before diving into React components, state, routing, or TypeScript, we need to understand the skeleton of the project. The folder and file layout is not arbitrary. Each directory has a clear purpose. If you understand that purpose, you’ll always know where to add new code and where to find existing logic. Think of this as learning the “floor plan” of a building before moving furniture inside.

Here’s the directory tree:

atelier-golden-leaf-60/
├─ public/
│  ├─ butterfly-bites-logo.png
│  ├─ favicon.ico
│  ├─ placeholder.svg
│  └─ robots.txt
├─ src/
│  ├─ assets/
│  │  ├─ catering.jpg
│  │  ├─ chef-portrait.jpg
│  │  ├─ cooking-event.jpg
│  │  └─ pasta-making.jpg
│  ├─ components/
│  │  ├─ Artisanal/…
│  │  ├─ PastaMaking/…
│  │  ├─ ui/…
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Events.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  └─ Hero.tsx
│  ├─ hooks/
│  │  ├─ use-mobile.tsx
│  │  └─ use-toast.ts
│  ├─ lib/
│  │  ├─ routes.ts
│  │  └─ utils.ts
│  ├─ pages/
│  │  ├─ Index.tsx
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ NotFound.tsx
│  │  └─ …
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ App.css
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ tailwind.config.ts
├─ postcss.config.js
└─ …

----------------------------------------------------------------------  
1.1) The public/ folder
----------------------------------------------------------------------

The `public/` folder is like the city’s “billboards and landmarks.” Files here are served exactly as they are, with no fingerprinting, no transformations, and no TypeScript awareness. If you drop `butterfly-bites-logo.png` into `public/`, Vite will make it available at `https://yourdomain.com/butterfly-bites-logo.png`.

In this repo we see:
- butterfly-bites-logo.png
- favicon.ico
- placeholder.svg
- robots.txt

Favicon.ico is requested automatically by browsers. Robots.txt tells search engines what to index. Placeholder images here may be referenced directly in HTML or meta tags.  

**Warning:** Don’t put component assets here. If you place a React- imported image in public/, you lose cache busting. Example: if you overwrite butterfly-bites-logo.png with a new version, users might still see the old one because the filename hasn’t changed. For importable images used inside React, always use `src/assets`.

----------------------------------------------------------------------  
1.2) The src/assets/ folder
----------------------------------------------------------------------

This folder is the “warehouse of materials” that React components actually import. In this repo, we see catering.jpg, chef-portrait.jpg, cooking-event.jpg, pasta-making.jpg. These are brought into components like Hero.tsx or Events.tsx.

Example from Hero.tsx (hypothetical):

import chef from "@/assets/chef-portrait.jpg";

export function Hero() {
  return <img src={chef} alt="Our Head Chef" />;
}

When you import like this, Vite does three things:
1. Copies the file into dist/assets during build.
2. Renames it with a unique hash, e.g. chef-portrait.abc123.jpg.
3. Rewrites your import so React uses that hashed filename.

Result: browsers cache aggressively, but when you change the file, the hash changes, so the browser fetches the new version automatically. This is why assets for components should always live here.

----------------------------------------------------------------------  
1.3) The src/components/ folder
----------------------------------------------------------------------

Components are the building blocks of your site. They are self-contained React functions that render UI. In this repo we see Hero.tsx (homepage splash), Header.tsx (navigation bar), Footer.tsx (site footer), About.tsx (about section), Contact.tsx (contact section), and Events.tsx (event list).  

The subfolders Artisanal/ and PastaMaking/ suggest specialized sections of the site with multiple related components. For example, PastaMaking/ might contain a PastaWorkshopCard.tsx and PastaWorkshopGrid.tsx that render pasta-making workshops dynamically.  

The ui/ subfolder is special. It contains pre-styled building blocks built on shadcn/ui + Radix. These are like LEGO bricks you reuse everywhere: Button, Input, Dialog, Tooltip. By centralizing these, you get consistent style and accessibility. If you need a button, you import it from ui/, not write it from scratch.

**Best practices here:**
- Components should stay focused. Hero.tsx should only render visuals, not fetch data.
- Use props to pass information in, rather than hardcoding. That makes components reusable.
- If a component gets too large, split it into smaller parts.

----------------------------------------------------------------------  
1.4) The src/hooks/ folder
----------------------------------------------------------------------

Hooks are custom functions that encapsulate stateful logic. They always start with `use`. In this repo:
- use-mobile.tsx: detects screen width and returns true/false if mobile.
- use-toast.ts: integrates with the Toaster provider so you can show notifications from anywhere.

Why keep them here? Imagine every component repeating window.innerWidth checks. That’s brittle. By moving it into use-mobile.tsx, you centralize the logic. Hooks keep components declarative: they focus on *what* to render, not *how* to measure screen width or trigger toasts.

----------------------------------------------------------------------  
1.5) The src/lib/ folder
----------------------------------------------------------------------

The lib/ folder is your project’s utility library. It holds code that isn’t tied to React rendering. In this repo:
- routes.ts: a centralized list of route paths.
- utils.ts: generic helper functions.

Why this matters: imagine you have "/about" hardcoded in 15 files. If you rename it to "/about-us", you must change all 15. With routes.ts, you export ABOUT = "/about" and reuse it everywhere. Change it once, done. utils.ts is where you’d add reusable helpers like formatPrice or dateFormat. They should be pure functions: given the same input, always return the same output.

----------------------------------------------------------------------  
1.6) The src/pages/ folder
----------------------------------------------------------------------

Pages are the top-level components that match routes. In this repo:
- Index.tsx: homepage
- About.tsx: about page
- Contact.tsx: contact page
- NotFound.tsx: fallback for invalid routes

Pages orchestrate data fetching and composition. Example: Index.tsx might fetch a list of events, then render <Events events={data}/> which lives in src/components. This keeps data concerns at the page level, and presentation concerns at the component level.

----------------------------------------------------------------------  
1.7) App.tsx
----------------------------------------------------------------------

This is the root shell of your application. It wires together providers and the router. You’ll find:
- QueryClientProvider (for React Query server state).
- TooltipProvider (for consistent tooltips).
- Toaster (for global notifications).
- BrowserRouter and Routes (for navigation).

If you misplace these providers, hooks like useQuery or useToast won’t work. Think of App.tsx as “city hall” where you plug in city-wide services.

----------------------------------------------------------------------  
1.8) main.tsx
----------------------------------------------------------------------

This is the entry point that connects React to the HTML. It finds the #root div in index.html, creates a React root, imports global styles, and renders <App/>. Without this, nothing shows up. If #root is missing, you’ll see runtime errors. If index.css isn’t imported, Tailwind utilities won’t load.

----------------------------------------------------------------------  
1.9) index.css and App.css
----------------------------------------------------------------------

index.css includes Tailwind base layers and global resets. App.css includes custom styles. Keep both minimal. Tailwind encourages utility classes in components, not large global CSS files. If Tailwind classes disappear in production, check the content globs in tailwind.config.ts.

----------------------------------------------------------------------  
1.10) Config files at the root
----------------------------------------------------------------------

- package.json: defines dependencies and scripts (npm run dev, build, preview).
- vite.config.ts: Vite’s build and dev server configuration (plugins, aliases).
- tsconfig.json + tsconfig.app.json + tsconfig.node.json: layered TypeScript configs.
- tailwind.config.ts: Tailwind theme and content paths.
- postcss.config.js: PostCSS pipeline.

Each of these will be explained in its own section later. For now, just know they configure the behavior of the build system and TypeScript.

----------------------------------------------------------------------  
Summary of Section 1
----------------------------------------------------------------------

The project structure is your compass. public/ is for raw, unprocessed assets at fixed URLs. src/assets/ is for component-imported images with cache busting. src/components/ are your LEGO bricks. src/hooks/ are reusable stateful tools. src/lib/ holds pure utilities. src/pages/ orchestrate routing. App.tsx wires global providers, main.tsx connects to HTML, index.css loads styling, and root configs guide the build.

If you know this skeleton, you know where everything belongs. That’s half the battle for junior developers.

# Section 2 — App Entry Points: index.html, main.tsx, and App.tsx

Now that you understand the project skeleton, let’s move to the “ignition system” of the app: the entry points. These three files — index.html, main.tsx, and App.tsx — are where the application truly begins. Without them, all the components and assets we looked at earlier would never see the light of day.

Think of this like starting a restaurant:  
- index.html is the building shell — four walls, a front door, a sign out front.  
- main.tsx is the staff unlocking the doors and turning the lights on.  
- App.tsx is the operations manager: making sure services (kitchen, waitstaff, registers) are running and connected.  

If any of these fails, the restaurant doesn’t open.

----------------------------------------------------------------------
2.1) index.html — the one true HTML file
----------------------------------------------------------------------

Even though we’re building a React app, which generates most of its UI dynamically with JavaScript, there still needs to be a starting HTML file. That’s index.html at the root.

Open it up in your repo and you’ll see:
- A <head> section with <title>, meta tags, and maybe links to fonts. This is where search engines and social media previews get their information.  
- A <body> with a single important <div id="root"></div>. That “root” div is where React will attach itself. Without it, ReactDOM has nowhere to render.  
- A script tag of type="module" pointing to /src/main.tsx. This is how Vite starts your app in development. When you build for production, Vite rewrites this to point at the bundled JS in dist/.  

Why is there only one HTML page? Because React Router handles “pages” on the client side. Whether you’re at /about or /contact, the server sends the same index.html. React swaps out what’s inside #root dynamically.

Common failure mode: if you rename the #root div id to something else (say, id="app-root") but forget to update main.tsx, you’ll get a runtime error: “Cannot read properties of null (reading ‘createRoot’).”

----------------------------------------------------------------------
2.2) main.tsx — lighting the fuse
----------------------------------------------------------------------

main.tsx is the bridge between plain HTML and the React world. Let’s break it down.

Inside main.tsx you’ll typically see:
- Imports for React and ReactDOM’s createRoot API.  
- Import of index.css to ensure Tailwind’s base and utilities are applied globally.  
- Import of App.tsx, the root React component.  
- A call like:

  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(<App />);

That line does all the heavy lifting: it finds the #root element in index.html and mounts your React application there.

The exclamation mark (!) after getElementById is a TypeScript non-null assertion, saying “trust me, #root exists.” If it doesn’t, React will crash immediately.

Analogy: main.tsx is like flipping the main breaker switch in the restaurant. The building exists (index.html), but until you flip the switch (main.tsx), the lights don’t come on and the kitchen equipment doesn’t run.

Failure modes to know:
- Forget to import index.css → the UI renders unstyled (you’ll just see raw HTML with no Tailwind styles).  
- Forget to render <App /> → nothing shows up.  
- Mis-type the element id → runtime null errors.  

----------------------------------------------------------------------
2.3) App.tsx — the root shell
----------------------------------------------------------------------

App.tsx is the “manager” that wires the big systems together. This is where you set up:
- Global providers (React Query cache, Toaster for notifications, TooltipProvider for tooltips).  
- BrowserRouter from React Router, so navigation works without reloading the page.  
- The <Routes> element, which maps paths to components in src/pages.  
- App-wide utilities like ScrollToTop, which ensures you don’t stay scrolled halfway down when moving between pages.  

In your repo’s App.tsx, you’ll see a structure like this (simplified):

<QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
</QueryClientProvider>

Why each matters:
- QueryClientProvider: enables hooks like useQuery in any child component. Without it, useQuery throws errors.  
- TooltipProvider: keeps tooltips consistent. Without it, tooltips might behave inconsistently.  
- Toaster: gives you global toast notifications. Without it, useToast() would have nowhere to render messages.  
- BrowserRouter: intercepts clicks on <Link> components and swaps content without reloading the whole page. Without it, the app falls back to full-page reloads.  
- ScrollToTop: improves user experience. Without it, navigating from a long-scrolled page leaves you stuck in the middle of the next page.  

Think of App.tsx like the control room in the back of the restaurant: here you turn on the gas for the ovens (React Query), the PA system (Toaster), the floor plan (Router), and even set up the “reset chairs every time a new guest arrives” routine (ScrollToTop).

Failure modes:
- Recreating QueryClient inside App.tsx each render resets the cache, causing data to refetch constantly. Always define it once.  
- Forgetting BrowserRouter → links reload the entire page, losing state (cart contents, form inputs).  
- Forgetting Toaster → calling toast() does nothing.  

----------------------------------------------------------------------
Summary of Section 2
----------------------------------------------------------------------

The entry points are deceptively simple, but they are the foundation of the app.  
- index.html is the single HTML skeleton served to every visitor.  
- main.tsx is the ignition that mounts React into that skeleton.  
- App.tsx is the conductor that wires together global services and routes.

Together, they form the “front door, light switch, and control panel” of Maria’s Kitchen. If you ever feel lost in the app, remember: this is where it all begins.

# Section 2.4 — Deep Dive into QueryClientProvider (React Query in App.tsx)

In Section 2.3 we mentioned QueryClientProvider as one of the critical providers in App.tsx. Here we’re going to expand it much further, because understanding React Query is key to working with server state in this repo.

----------------------------------------------------------------------
What is React Query, and why do we need QueryClientProvider?
----------------------------------------------------------------------

React itself only manages *local state* (via useState, useReducer, etc.). That’s great for toggling a modal or keeping track of form input, but it falls short for **server state** — data fetched from an API.

Server state has unique problems:
1. It’s asynchronous (you don’t have it immediately, you fetch it).
2. It can go stale quickly (someone else might update the data).
3. It’s shared across components (the same product list may be shown in multiple places).
4. It needs caching, refetching, retrying, error handling.

React Query solves these problems by providing:
- A **cache** for API results.
- Automatic **refetching** when data becomes stale.
- **Deduplication** of requests so you don’t hammer your server.
- Handy hooks (useQuery, useMutation) to interact with the cache and API.

But to use it, you need a QueryClient — a sort of “data manager” object. And for React components to access that client, you need QueryClientProvider at the root.

----------------------------------------------------------------------
How it looks in App.tsx
----------------------------------------------------------------------

In your App.tsx, you’ll see something like this:

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* other providers and Router here */}
    </QueryClientProvider>
  );
}

Key details:
- We create `queryClient` only once, outside the component body. If you create it inside App(), a new client is created on every render, wiping the cache each time. That means your data would constantly refetch.
- We pass it into QueryClientProvider. Now every child component can use hooks like useQuery() or useMutation().

----------------------------------------------------------------------
Using useQuery inside the repo
----------------------------------------------------------------------

Say you want to fetch a list of pasta-making events. In a page like Index.tsx, you might write:

import { useQuery } from "@tanstack/react-query";

function IndexPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading events…</p>;
  if (error) return <p>Failed to load events</p>;

  return (
    <ul>
      {data.map(event => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  );
}

Because IndexPage is wrapped (through App.tsx → QueryClientProvider), useQuery works. Without the provider, React Query would throw: “No QueryClient set, use QueryClientProvider to set one.”

----------------------------------------------------------------------
Cache behavior explained
----------------------------------------------------------------------

When you call useQuery with queryKey ["events"], React Query:
- Checks if there’s cached data for that key.
- If yes and it’s fresh, it returns it immediately while also fetching in the background (to keep it updated).
- If no, it fetches from the API.

This means:
- Navigating between pages that both need events data is instant, because the cache is shared.
- If the data is older than the “stale time,” React Query quietly refetches.

You can configure these behaviors:
new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2, // retry twice on failure
    },
  },
});

----------------------------------------------------------------------
Mutations (changing data)
----------------------------------------------------------------------

React Query also handles POST/PUT/DELETE through useMutation. Example:

const mutation = useMutation({
  mutationFn: (newEvent) =>
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    }),
  onSuccess: () => {
    queryClient.invalidateQueries(["events"]);
  },
});

This pattern ensures that when you create a new event, the cache invalidates and useQuery(["events"]) refetches automatically. Your UI stays in sync without manual state juggling.

----------------------------------------------------------------------
Analogy
----------------------------------------------------------------------

Imagine the QueryClient as a well-staffed **kitchen pantry** in Maria’s Kitchen:
- If a waiter (component) asks for flour (data), the pantry manager first checks the shelves (cache).
- If flour is there and fresh, it’s handed over immediately.
- If it’s missing or stale, someone runs to the market (API) to fetch it.
- Once it’s back, it’s stored for the next waiter to use.
- If the chef (a mutation) adds a new recipe, the pantry manager updates inventory (invalidates queries) so everyone sees the new stock.

Without QueryClientProvider, there is no pantry manager. Each waiter would run to the market themselves, leading to chaos.

----------------------------------------------------------------------
Failure modes
----------------------------------------------------------------------

1. Creating QueryClient inside App() instead of outside → cache resets constantly.
2. Forgetting QueryClientProvider → useQuery/useMutation throw errors.
3. Using queryKey incorrectly (like using a random object) → cache misses because keys must be stable and serializable.
4. Not invalidating queries after mutations → UI shows stale data.

----------------------------------------------------------------------
Summary
----------------------------------------------------------------------

QueryClientProvider is not optional boilerplate — it is the foundation of data management in this repo. It gives every component access to a shared, smart cache for server state. With it, your components remain simple and declarative. Without it, you would reinvent caching, refetching, retrying, and stale-data management by hand.

This repo uses QueryClientProvider correctly by defining one client at the top level of App.tsx and wrapping the entire app in it. Any new data-fetching features you add should follow the same pattern.

# Section 3 — Providers, Context, and Hooks: The Invisible Utilities That Power the App (Router deferred to next chapter)

This chapter is dedicated to **Providers**, **Context**, and **Hooks** — three concepts that often confuse junior developers because they don’t produce obvious UI, yet they make everything else in the app work. To understand Maria’s Kitchen as a project, you must understand these invisible systems.

Think of Maria’s Kitchen (the app) as the physical restaurant:
- **Providers** are like the utility hookups — water, gas, electricity, Wi-Fi, PA system. They run through the whole building. You don’t eat them, but without them nothing works.  
- **Context** is like the shared “blueprint + piping” system. It defines where the water and electricity flow, how they’re accessed, and ensures consistency across the restaurant.  
- **Hooks** are like the actual tools used in the kitchen — knives, pans, pasta rollers. They let chefs (components) use the utilities and prepare food in a consistent, repeatable way.

If you don’t master these three, you’ll constantly wonder: *“Why does this component work here but not there?”*

----------------------------------------------------------------------
3.1) What Context Actually Is
----------------------------------------------------------------------

At its core, **React Context is a system for sharing values across a component tree without prop drilling.**  

Imagine you have a cart object (items, totals, actions). Normally, to give Header → CartBadge access to the cart, you’d pass props from App → Header → CartBadge. This is fine for small trees. But what if Footer also needs the cart? Or CheckoutPage? Or Events.tsx? Suddenly you’re threading the same prop down multiple unrelated branches. This is tedious and fragile.  

Context solves this. You create a **Context object** with `React.createContext()`. That object can hold *any* value — a simple number, a theme string, or an entire API like `{ items, add, remove }`. You then wrap part of your tree with a **Provider** that gives Context a value. Every descendant can then call `useContext` (or a custom hook) to access it directly, no prop drilling required.

**Analogy:** Context is like plumbing in the restaurant. The pipes run behind the walls, and any sink can tap into the same water supply. You don’t carry buckets of water from the main tank to every sink (prop drilling). You hook into the context (the pipe) where you need it.

**Key point:** Context itself does not “do” anything. It’s just a reference point. The Provider is what injects a real value into the Context. Consumers (via hooks) read from that Provider.

----------------------------------------------------------------------
3.2) Why Null Defaults Matter (Fail Loudly, Not Quietly)
----------------------------------------------------------------------

When you call `React.createContext()`, you must give it a default. Many juniors are tempted to give it a fake default (like an empty object with no-op functions). This is dangerous.  

Example:

const CartCtx = React.createContext<CartContextValue>({
  items: [],
  add: () => {},
  remove: () => {},
  clear: () => {},
  total: 0,
});

This means if you forget to wrap your app in `<CartProvider>`, everything *appears to work*. The Header cart badge always says “0”, CheckoutPage shows “empty cart,” and you may never realize the provider is missing. This is a **silent failure**.

Instead, the best practice is:

const CartCtx = React.createContext<CartContextValue | null>(null);

And then write a hook:

export function useCart() {
  const ctx = React.useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

Now, if you forget `<CartProvider>`, the app crashes immediately during development with a clear error. This is **fail fast, fail loud**.  

**Real world application in Maria’s Kitchen:**  
- Suppose CheckoutPage forgets to include CartProvider.  
- With a fake default, it would silently show “empty cart,” and customers would lose items.  
- With a null default, it throws instantly: “useCart must be used within <CartProvider>.” You fix the bug before it ever reaches production.

This is why you almost always use `null` as the default context value: it protects against subtle, silent errors.

----------------------------------------------------------------------
3.3) Anatomy of a Custom Provider (Cart Example)
----------------------------------------------------------------------

Let’s build out the CartProvider step by step.

1) Define types.

type CartItem = { id: string; title: string; price: number; qty: number };
type CartContextValue = {
  items: CartItem[];
  add: (item: CartItem) => void;
  updateQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: number;
};

2) Create context.

const CartCtx = React.createContext<CartContextValue | null>(null);

3) Implement hook.

export function useCart() {
  const ctx = React.useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

4) Implement provider.

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const add = React.useCallback((item: CartItem) => { ... }, []);
  const updateQty = React.useCallback((id, qty) => { ... }, []);
  const remove = React.useCallback((id) => { ... }, []);
  const clear = React.useCallback(() => setItems([]), []);
  const total = React.useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);

  const value = React.useMemo(() => ({ items, add, updateQty, remove, clear, total }), [items, add, updateQty, remove, clear, total]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

This lets any component anywhere under CartProvider (like Header.tsx or CheckoutPage.tsx) call useCart() to get or manipulate cart state. No prop drilling required.

----------------------------------------------------------------------
3.4) QueryClientProvider — Context for Server State
----------------------------------------------------------------------

React Query uses context under the hood. QueryClientProvider sets up a QueryClient in context, so any component can call useQuery/useMutation. It’s just like CartProvider, but for server state.

- Without QueryClientProvider, calling useQuery throws “No QueryClient set.”
- With it, any page in src/pages can fetch data and share the same cache.

Analogy: QueryClientProvider is like the restaurant pantry. Waiters (components) don’t go to the market themselves. They ask the pantry manager (QueryClient) for flour. If it’s already stocked, they get it instantly. If it’s out of stock, the pantry manager fetches more and caches it.

----------------------------------------------------------------------
3.5) TooltipProvider — Context for Micro-Interactions
----------------------------------------------------------------------

TooltipProvider works the same way. It sets up a context that standardizes tooltip timing, placement, and accessibility. Any component that calls TooltipTrigger/TooltipContent is tapping into that context.

Analogy: It’s like having one restaurant-wide policy for how long waiters wait before speaking to guests. Without it, every waiter behaves differently, confusing customers. With it, the behavior is uniform.

----------------------------------------------------------------------
3.6) Toaster — Context for Notifications
----------------------------------------------------------------------

Toaster mounts a global notification container. The useToast hook accesses that context. Without the provider, calling toast() would throw. With it, any component can trigger notifications that all users see in the same place.

Analogy: It’s like one intercom system in the restaurant. Waiters don’t carry their own megaphones. Everyone uses the same PA system.

----------------------------------------------------------------------
3.7) Hooks — The Tools for Using Context and State
----------------------------------------------------------------------

So what are hooks really?  

A hook is a function that lets you use React features (state, effects, context). Built-in hooks include useState, useEffect, useContext. Custom hooks are functions you write that use built-in hooks internally (like useCart or useToast).

**Rules of hooks:**
1. Only call hooks at the top level of a React function or custom hook. Don’t put them in loops or conditionals.
2. Only call hooks inside React functions. Not in plain JS utilities.

Why? Because React keeps track of state by order. If you change the order, React mis-assigns state and everything breaks.

Example of a bad hook call:

if (loggedIn) {
  const [user, setUser] = useState(null); // ❌ sometimes called, sometimes not
}

Example of correct:

const [user, setUser] = useState(null); // ✅ always called

**Custom hooks** abstract reusable logic. In your repo:
- use-mobile.tsx: centralizes screen size detection.  
- use-toast.ts: wraps the Toaster context so you can fire toast.success() anywhere.  
- useCart (from above): wraps CartCtx so you can read/write cart state anywhere.  

Analogy: Hooks are like kitchen tools. React gives you knives and pans (useState, useEffect). You can make your own tools — like a pasta machine (useCart) — that combine knives and pans into something specialized. Every chef (component) can then use that machine without reinventing it.

----------------------------------------------------------------------
3.8) Provider Composition and Order — Building a Stable Utility Stack
----------------------------------------------------------------------

When you open App.tsx, you’ll see multiple Providers nested like layers of an onion. The order isn’t cosmetic — it’s structural.

<QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <CartProvider>
      {/* Router comes here */}
    </CartProvider>
  </TooltipProvider>
</QueryClientProvider>

### Why Order Matters
- **Top-down scope:** Context only flows downward. A child can consume values from a parent Provider, not the other way around. If you place CartProvider above QueryClientProvider and CartProvider internally calls useQuery, it will throw because QueryClientProvider hasn’t been set up yet.  
- **Cross-cutting styling:** A ThemeProvider (if added later) should wrap TooltipProvider so tooltips inherit theme variables. If the order is reversed, tooltips won’t match the app’s theme.  
- **Accessibility:** Toaster must be high enough that every component can access it. If you accidentally placed it inside CartProvider, pages outside the cart flow (like Contact.tsx) couldn’t trigger notifications.

### Real World Analogy
- **QueryClientProvider** is like the **water line**. It must be laid first, or sinks and dishwashers can’t function.  
- **ThemeProvider** (future) is like the **gas line**. It must flow into every oven consistently.  
- **TooltipProvider** is like the **house rules manual**. It ensures every waiter speaks to guests with the same tone and timing.  
- **Toaster** is the **PA system**. Place it in the lobby, not in a side room, so everyone hears announcements.  
- **CartProvider** is the **cash register**. It must connect to utilities above it (like pantry data for prices) but still wrap around children that need to ring up purchases.

### Best Practice: ProviderStack
To avoid spaghetti in App.tsx, create a `ProviderStack.tsx`:

export function ProviderStack({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={200}>
        <Toaster />
        <CartProvider>
          {children}
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

Now App.tsx just uses:

<ProviderStack>
  {/* Router here */}
</ProviderStack>

### Testing Considerations
When writing tests, import ProviderStack to wrap components. This way, tests simulate the real environment (QueryClient, Tooltip, Toaster, Cart). If you don’t, hooks like useCart or useQuery will throw errors.

----------------------------------------------------------------------
Summary of Section 3
----------------------------------------------------------------------

- **Context** is React’s plumbing system. Providers inject values, and consumers (via hooks) read them.  
- Always create contexts with null defaults to fail fast and avoid silent bugs.  
- CartProvider is a practical example: it centralizes cart state without prop drilling.  
- QueryClientProvider is the global pantry for server state. TooltipProvider standardizes micro-interactions. Toaster centralizes notifications.  
- **Hooks** are functions that let you use React features. Built-in (useState, useEffect) and custom (useCart, useToast, useMobile) make components declarative and reusable.  
- **Provider composition and order are critical.** They define what values are available where. Think of them as utility hookups in a building: lay them in the wrong order, and the system breaks. Use a ProviderStack to keep order explicit and testing easy.

