# vite_react_shadcn_ts — Vite + React + TypeScript + Tailwind + shadcn/ui
> A fully-typed React application scaffolded with Vite, using Tailwind CSS, Radix primitives via **shadcn/ui**, React Router, and React Query. This README is intentionally **over-the-top comprehensive**—it holds your hand through every concept used in this repo: **state**, **routing**, **JSX**, **props**, **composition**, **builds** (Vite/esbuild/SWC/TypeScript), **package.json**, **scripts**, **watch**, **dev vs build**, **React hooks**, and **fetch** (paths, headers, methods, auth, status codes, bodies).
---
## TL;DR (Quick Start)

```

# 1) Install dependencies
npm install

# 2) Start dev server (hot reload, file watching)
npm run dev

# 3) Production build (minified, optimized)
npm run build

# 4) Preview the production build locally
npm run preview

# 5) Lint the codebase
npm run lint

```
Dev server runs on **http://localhost:8080** (see `vite.config.ts`).

---
## Project Structure (Trimmed Tree)

```
atelier-golden-leaf-60/
├── .github
│   └── workflows
│       └── jekyll-gh-pages.yml
├── public
│   ├── butterfly-bites-logo.png
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── catering.jpg
│   │   ├── chef-portrait.jpg
│   │   ├── cooking-event.jpg
│   │   └── pasta-making.jpg
│   ├── components
│   │   ├── Artisanal
│   │   │   ├── ArtisanalHeaderNav.tsx
│   │   │   ├── CustomMenus.tsx
│   │   │   ├── LocalSourcing.tsx
│   │   │   └── PersonalService.tsx
│   │   ├── PastaMaking
│   │   │   ├── ClassicItalian.tsx
│   │   │   ├── FamilyWorkshop.tsx
│   │   │   ├── PastaClassNav.tsx
│   │   │   ├── pastaClassNavUtils.ts
│   │   │   └── RegionalAdventure.tsx
│   │   ├── ui
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   ├── About.tsx
│   │   ├── Artisanal.tsx
│   │   ├── Contact.tsx
│   │   ├── Events.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PastaMaking.tsx
│   │   ├── RequestQuote.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Services.tsx
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib
│   │   ├── routes.ts
│   │   └── utils.ts
│   ├── pages
│   │   ├── Artisanal
│   │   │   ├── CustomMenuPages.tsx
│   │   │   ├── LocalSourcing.tsx
│   │   │   └── PersonalService.tsx
│   │   ├── PastaMaking
│   │   │   ├── ClassicItalian.tsx
│   │   │   ├── FamilyWorkshop.tsx
│   │   │   └── RegionalAdventure.tsx
│   │   ├── About.tsx
│   │   ├── Artisanal.tsx
│   │   ├── Contact.tsx
│   │   ├── Events.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── PastaMaking.tsx
│   │   └── RequestQuote.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── zip.tar.gz
```
Key files present:

- `package.json` — project metadata, scripts, dependency graph.
- `vite.config.ts` — Vite configuration (plugins, alias `@ → ./src`, dev server port).
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript configs.
- `tailwind.config.ts`, `postcss.config.js` — styling pipeline.
- `src/main.tsx` — app bootstrap / React entry.
- `src/App.tsx` — **providers** and **routing**.
- `src/pages/*` — routeable screens.
- `src/components/*` — presentational & composite UI pieces (incl. `components/ui/*` from shadcn).

---
## What Is JSX? (And Why Your Brain Thinks It’s HTML)

**JSX** is JavaScript syntax sugar that lets you write tree-like UI in a familiar, HTML-ish shape. Under the hood, JSX compiles to function calls (`React.createElement` or the modern JSX runtime) that produce **virtual elements** describing what should be on screen.

**Key ideas:**

1. **It’s expressions all the way down** — JSX can embed JS: `{1 + 2}`, `{user.name}`, `{items.map(...)}`.
2. **It’s just JS** — you can assign JSX to variables, return it from functions, pass it into props (children), and conditionally render pieces.
3. **Attributes are props** — `<Button size="lg" />` passes the prop `{ size: "lg" }`.
4. **className not class** — in React it’s `className` because `class` is a reserved word in JS.
5. **Fragments** (`<>...</>`) group siblings without adding DOM wrappers.

```tsx

function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// JSX is just an expression:
const header = <Greeting name="Ibo" />;

// Render it:
return <header>{header}</header>;

```
---
## What Are Props? (Component Inputs 101)

**Props** are **read-only inputs** you pass into components. Think of them like function parameters for UI. Props let parents configure children without children needing to know where the data came from.

- **Read-only**: children **must not** change their own props.
- **Default props**: provide fallbacks via default values or with TypeScript optionals.
- **Children**: a special prop that contains nested JSX (`<Card>…children…</Card>`).

```tsx

type BadgeProps = {
  label: string;
  tone?: "info" | "warn" | "ok";
  children?: React.ReactNode;
};

export function Badge({ label, tone = "info", children }: BadgeProps) {
  const color = tone === "ok" ? "green" : tone === "warn" ? "orange" : "blue";
  return (
    <span className={`badge badge-${color}`}>
      {label} {children}
    </span>
  );
}

// Usage:
<Badge label="Status" tone="ok">All systems nominal</Badge>

```
---
## What Is State? (Your Component’s Memory)

**State** is **mutable, per-render data** that a component owns. When state changes, React schedules a re-render to keep the UI in sync.

In this project you’ll see several layers:

1. **Local state** via `useState` for simple, component-scoped values (e.g., form inputs, toggles).
2. **Derived state** from props (compute on the fly; avoid duplicating).
3. **Server state** via **React Query** (`@tanstack/react-query`), which caches, refetches, and dedupes requests. This lives at the app level and is shared across routes.
4. **Lifted state** — If multiple siblings need the same source of truth, move state **up** to their closest common parent and pass values + callbacks down via props.
5. **Context** — For cross-cutting concerns (theme, auth, toasts), use context providers (see `App.tsx` wrapping providers).

```tsx

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0); // local state
  return (
    <button onClick={() => setCount(c => c + 1)}>
      You clicked {count} times
    </button>
  );
}

```
**In this project**: `App.tsx` creates a `QueryClient` and wraps the tree with `QueryClientProvider`, making **server state** (API data) easy to fetch and cache anywhere.

---
## Routing: How Navigation Works Here (React Router)

This project uses **React Router** (`react-router-dom`). The router lives in `App.tsx` inside `<BrowserRouter>` with `<Routes>` and individual `<Route>` items.

- **Where are the screens?** Under `src/pages/*`. Example entries discovered during analysis:
```
- src/pages/Index.tsx
- src/pages/PastaMaking.tsx
- src/pages/Events.tsx
- src/pages/Contact.tsx
- src/pages/RequestQuote.tsx
- src/pages/Artisanal.tsx
- src/pages/NotFound.tsx
- src/pages/About.tsx
- src/pages/Artisanal/PersonalService.tsx
- src/pages/Artisanal/LocalSourcing.tsx
- src/pages/Artisanal/CustomMenuPages.tsx
- src/pages/PastaMaking/ClassicItalian.tsx
- src/pages/PastaMaking/RegionalAdventure.tsx
- src/pages/PastaMaking/FamilyWorkshop.tsx
```
- **Catch-all 404**: A `*` route points to `NotFound.tsx` (ensure it’s last).
- **Scroll restoration**: `ScrollToTop` helps reset scroll on navigation.
- **Providers**: Tooltips, Toasters, and React Query are all configured above the router so every page can use them.

### Add a New Route

1. Create a new page: `src/pages/Team.tsx`.
2. Export a component.
3. Register it in `App.tsx`:

```tsx

import Team from "@/pages/Team";

// Inside <Routes>:
<Route path="/team" element={<Team />} />

```
### Nested Routes

```tsx

<Route path="/settings" element={<SettingsLayout />}>
  <Route index element={<Profile />} />
  <Route path="password" element={<Password />} />
  <Route path="billing" element={<Billing />} />
</Route>

```
---
## How JSX + Props + State Come Together (Composable Components)

React favors **composition over inheritance**. You build tiny, focused components and **compose** them into larger ones. This section is a **hand-holding mini-course** (10 small paragraphs with examples).

1) **Single Responsibility**: Each component should do one thing well.
```tsx
function Title({ children }: { children: React.ReactNode }) { return <h2 className="text-xl">{children}</h2>; }
```
2) **Compose by Nesting**: Use children to slot content.
```tsx
function Card({ children }: { children: React.ReactNode }) { return <div className="rounded-lg shadow p-4">{children}</div>; }
```
3) **Make Layouts Reusable**: Extract common structure.
```tsx
function TwoCol({ left, right }: { left: React.ReactNode; right: React.ReactNode }) { return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{left}{right}</div>; }
```
4) **Parameterize via Props**: Accept options instead of duplicating components.
```tsx
function Button({ kind = "primary", ...rest }: { kind?: "primary"|"ghost" } & React.ButtonHTMLAttributes<HTMLButtonElement>) { const cls = kind === "primary" ? "btn-primary" : "btn-ghost"; return <button className={cls} {...rest} />; }
```
5) **Lift State Up**: Keep shared state in a common ancestor and pass setters.
```tsx
function Parent(){ const [q, setQ] = useState(""); return <><SearchBox value={q} onChange={setQ} /><SearchResults query={q} /></>; }
```
6) **Custom Hooks Encapsulate Behavior**: Reuse logic without touching markup.
```tsx
function useToggle(initial=false){ const [v,setV]=useState(initial); const toggle=()=>setV(v=>!v); return {v,toggle}; }
```
7) **Composition APIs (shadcn/ui)**: Many UI pieces are **composed** from Radix primitives—props/slots let you tailor behavior.
8) **Avoid Prop Drilling**: Don’t tunnel props across many layers; use context when needed.
9) **Prefer Data Down, Actions Up**: Parents own state; children request changes via callbacks.
10) **Test Composability**: Combine components in playgrounds/Storybook-like sandboxes to validate patterns.

---
## What’s Inside `App.tsx` (Providers + Router)

- **QueryClientProvider** — enables server-state caching, mutations, invalidation.
- **TooltipProvider**, **Toaster**/**Sonner** — cross-app UI affordances.
- **BrowserRouter** — top-level client routing.
- **Routes** — explicit mapping of paths → `src/pages/*` elements.
- **ScrollToTop** — resets scroll on navigation events.

This structure keeps **cross-cutting concerns** centralized and ensures pages stay focused.

---
## Styling: Tailwind + PostCSS

- **Tailwind** utility classes are enabled via `tailwind.config.ts`.
- **PostCSS** runs with `autoprefixer` to add vendor prefixes.
- You’ll find global styles in `src/index.css` and component-level classes inline in JSX.

Example:

```tsx

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl py-16">
      <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
      <p className="mt-4 text-muted-foreground">Butterfly Bites brings artisanal catering to life.</p>
    </section>
  );
}

```
---
## Build System Deep Dive — Vite, esbuild, SWC, and TypeScript (RIDICULOUSLY COMPREHENSIVE)

### 1. Vite is the orchestrator

Vite provides both the dev server and the production bundler. During dev it serves files directly with ES modules; in production it bundles via Rollup.

### 2. Dev server vs production build

Development server prioritizes fast startup and hot reload; production focuses on optimization (minification, tree-shaking, code-splitting).

### 3. Vite uses esbuild

esbuild is a Go-based bundler/transpiler used for dependency pre-bundling and lightning-fast JS/TS transforms.

### 4. SWC for TS/JSX transforms

This repo uses `@vitejs/plugin-react-swc`. SWC is a Rust-based compiler for React/TSX, faster than Babel.

### 5. TypeScript types erased

Types only exist at compile-time. At runtime you only have JavaScript. Example: an `interface` disappears after build.

### 6. tsc vs SWC

`tsc --noEmit` checks types only. SWC handles transformation into runnable JS.

### 7. Module graph

Vite builds an import graph of your files. When a file changes, only its dependents recompile.

### 8. Alias @ -> ./src

Configured in vite.config.ts: `resolve.alias = { '@': '/src' }`. Example import: `import Foo from '@/components/Foo'`. 

### 9. ESM first

During dev, Vite serves ES modules natively to the browser. No heavy bundling required.

### 10. Hot Module Replacement (HMR)

Edits replace modules without refreshing the page. State is preserved where possible.

### 11. CSS handling

CSS can be imported into JS. Tailwind generates utilities via PostCSS. Example: `import './index.css'`. 

### 12. Assets

Static files in `public/` served directly. Imports hashed for cache-busting in prod.

### 13. Base URL

Configured in vite.config.ts as `base`. Important when deploying under subpaths.

### 14. Environment variables

Vite exposes `VITE_*` vars via `import.meta.env`. Example: `const api = import.meta.env.VITE_API_URL;`. 

### 15. Code splitting

Dynamic `import()` creates separate chunks. Example: `const Page = lazy(()=>import('./Page'))`. 

### 16. Tree shaking

Unused exports removed. Keep imports precise. Example: `import { specificFn } from 'lib'` instead of `import * as lib`. 

### 17. Minification

Production builds run esbuild/Rollup minifiers. Removes whitespace, shortens identifiers.

### 18. Sourcemaps

Enable with `build.sourcemap=true` for debuggable prod builds. Example config in vite.config.ts.

### 19. Dynamic import

Lazy-load modules with `import()`. Example: `const Comp = React.lazy(()=>import('./Comp'))`. 

### 20. Images

Importing images returns optimized URLs. Example: `import logo from './logo.png'`. 

### 21. SVGs

Can be imported as components with plugins or as URL. Example: `<img src={logo} />`. 

### 22. Linting

`eslint` ensures code quality. Run `npm run lint`. Config in `.eslintrc.*`. 

### 23. Type-checking in CI

Use `tsc --noEmit` in CI to enforce type safety.

### 24. Pre-bundling explained

esbuild consolidates many small node_modules into fewer faster-loading modules.

### 25. Dev port

Default is 5173, but here overridden to 8080 in vite.config.ts. Change with `server.port`. 

### 26. SWC vs Babel

SWC is faster and written in Rust. Babel is more mature with more plugins.

### 27. React Fast Refresh

Preserves component state on edits. Example: updating text in component doesn’t reset input values.

### 28. PostCSS

Used for Tailwind and autoprefixing. Configured in postcss.config.js. 

### 29. UI components

This repo has shadcn/ui generated components (src/components/ui/*) built on Radix.

### 30. QueryClient

React Query caches server state. Example: `useQuery(['todos'], fetchTodos)`.

### 31. Build output

In dist/ with hashed file names for cache busting. Example: `assets/index-abc123.js`. 

### 32. Preview

Run `npm run preview` to test production build locally.

### 33. Import hygiene

Prefer `@/` absolute imports to `../../../`. Keeps code cleaner.

### 34. tsconfig layering

Separate configs for app/node to handle different lib targets.

### 35. Strictness

Keep `strict:true` to enforce type safety.

### 36. DOM libs

Include `dom`, `dom.iterable` in tsconfig lib for browser APIs.

### 37. Target

Set output JS target in tsconfig (e.g., ES2020). Balances features with compatibility.

### 38. Polyfills

Not automatic in Vite. Add manually if needed (e.g., fetch for old browsers). 

### 39. Testing

Vitest integrates well with Vite. Example test: `expect(1+1).toBe(2)`. 

### 40. CI caching

Cache node_modules and vite deps for faster CI builds.

### 41. Performance budgets

Track bundle sizes. Use code splitting for large deps.

### 42. Accessibility

Radix UI primitives handle accessibility out-of-the-box.

### 43. Internationalization

Structure i18n files, lazy load locales.

### 44. Security

Never expose secrets. Only expose variables prefixed with VITE_.

### 45. Deployment

Output `dist/` can be hosted anywhere static (Netlify, Vercel, S3).
---
## React Hook System — Why, When, and How

- **`useState`**: local state (numbers, strings, objects).
- **`useEffect`**: side-effects (fetching, subscriptions). Clean up in the return function.
- **`useMemo`**: memoize expensive derived values.
- **`useCallback`**: stable function identities for memoized children.
- **`useRef`**: mutable container, persists across renders without causing re-render.
- **`useReducer`**: complex state transitions; great for forms/wizards.
- **Custom hooks**: package reusable logic (`useAuth`, `useDebounce`, `useFetch`).

**Pitfalls**: stale closures, missing dependencies in `useEffect`, over-memoization. Always include correct deps; extract logic to custom hooks to simplify.

```tsx

import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

```
---
## External API Calls with `fetch` (Paths, Headers, Methods, Status Codes, Bodies, Auth)

The browser-native **Fetch API** is the standard for HTTP requests.

### Basics

```ts

const res = await fetch("/api/users"); // GET by default
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const data = await res.json();

```
### Methods

- `GET` — read data
- `POST` — create
- `PUT` — replace
- `PATCH` — partial update
- `DELETE` — remove

### Paths & Query Params

```ts

const url = new URL("/api/search", location.origin);
url.searchParams.set("q", "pasta");
url.searchParams.set("page", "2");
const res = await fetch(url);

```
### Headers (Content-Type, Accept, Authorization)

```ts

const res = await fetch("/api/secure", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer " + token,
  },
  body: JSON.stringify({ message: "hello" }),
});

```
### Status Codes

- `2xx` success (200 OK, 201 Created)
- `4xx` client errors (400 Bad Request, 401 Unauthorized, 404 Not Found)
- `5xx` server errors (500 Internal Server Error)

### Bodies

- JSON: `JSON.stringify(obj)` + `Content-Type: application/json`
- Form data: `new FormData(form)`
- Text, Blob, ArrayBuffer for files/binary

### Robust Wrapper (with types, timeouts, retries)

```ts

type HttpMethod = "GET"|"POST"|"PUT"|"PATCH"|"DELETE";

interface FetchOptions<TBody> {
  method?: HttpMethod;
  token?: string;
  body?: TBody;
  timeoutMs?: number;
}

async function http<TResponse, TRequest = unknown>(
  path: string,
  { method = "GET", token, body, timeoutMs = 10000 }: FetchOptions<TRequest> = {}
): Promise<TResponse> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const res = await fetch(path, {
    method,
    signal: controller.signal,
    headers: {
      "Accept": "application/json",
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  }).catch(err => {
    clearTimeout(timer);
    throw err;
  });

  clearTimeout(timer);

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return (await res.json()) as TResponse;
}

// Example usage:
interface User { id: string; name: string; }
const user = await http<User>("/api/users/123", { token });

```
**CORS**: The server must allow the origin/method/headers. Configure server-side `Access-Control-Allow-*` properly.

---
## Extending This Project

- **Add a page** in `src/pages` and register it in `App.tsx`.
- **Add a component** in `src/components`; keep it focused.
- **Introduce server calls** with React Query (`useQuery`, `useMutation`) for caching, retries, and automatic refetching.
- **Create custom hooks** to encapsulate data fetching and state logic.

---
## FAQ / Troubleshooting

- **`Module not found: @/…`** — Ensure the alias is correct in `vite.config.ts` and TS path mapping mirrors it.
- **Dev server port conflict** — Change `server.port` in `vite.config.ts`.
- **Tailwind classes not applied** — Check `content` globs in `tailwind.config.ts`.
- **Types missing** — Install `@types/*` packages or enable DOM libs in `tsconfig`.
- **Slow prod build** — Inspect bundle, lazy-load heavy routes, and keep imports lean.

---
## Appendix: Concrete References from This Repo

- **Dev Port**: `8080` in `vite.config.ts`.
- **Alias**: `@` points to `./src`.
- **Pages**: 14 discovered under `src/pages/*` (see list above).
- **Providers**: React Query, Tooltip, Toasters in `App.tsx`.
- **UI**: shadcn components in `src/components/ui/*`.

---
_This README was auto-generated from your actual repo state at build time. Feel free to edit and trim sections to taste._
