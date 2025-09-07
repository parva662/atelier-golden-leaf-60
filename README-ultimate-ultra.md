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

## Routing in React — Mapping URLs to Views

Routing decides which component appears for a given URL. This project uses **React Router v6**.

### Basic Routes
```tsx
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
```

### Catch-All
```tsx
<Route path="*" element={<NotFound/>}/>
```

### Nested Routes and Layouts
```tsx
<Route path="/dashboard" element={<Layout/>}>
  <Route index element={<Overview/>}/>
  <Route path="settings" element={<Settings/>}/>
</Route>
```

### Dynamic Params
```tsx
<Route path="/users/:id" element={<User/>}/>
const {id} = useParams();
```

### Query Params
```tsx
const [p,setP] = useSearchParams();
<p.get("q")>
```

### Programmatic Navigation
```tsx
const nav = useNavigate();
nav("/login");
nav("/profile",{replace:true});
```

### Guards / Auth Routes
```tsx
<Route path="/private" element={<RequireAuth><Secret/></RequireAuth>}/>
```

### Lazy Loaded Routes
```tsx
const Settings = lazy(()=>import("./Settings"));
<Suspense fallback={<Spinner/>}><Settings/></Suspense>
```

### Scroll and Focus
Use `ScrollToTop` to reset scroll. Focus management improves accessibility.

### Error Boundaries
Catch errors per route to avoid blank screens.

### Redirects
```tsx
<Route path="/old" element={<Navigate to="/new"/>}/>
```

### Analytics and Meta
Listen to location changes for analytics. Inject `<Helmet>` tags for SEO.

### Routing in This Repo
- Pages live in `src/pages`.  
- `App.tsx` wires them with `<BrowserRouter>` and `<Routes>`.  
- A `*` route serves NotFound.  
- Providers wrap above routes for Query/Toasters/Tooltips.
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

When you run this project, **Vite** is the tool doing almost everything: it starts a development server for you while you code, and it produces the optimized production bundle when you’re ready to ship. Think of Vite as your **traffic controller**: in dev it serves your files straight to the browser using native ES Modules (ESM), and during a production build it hands off to **Rollup** under the hood to create small, cacheable files that load fast.

**Why this matters to a junior dev:** you don’t need to wire Webpack/Babel by hand. Vite gives you a sane default setup with hot reloading, TypeScript, JSX/TSX, and CSS handling already working.

**Where it’s configured:** `vite.config.ts` at the repository root. This is where we set dev port, path aliases, plugins, and build options.

**Minimal example:**```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  server: { port: 8080 }, // dev server here
  build: { sourcemap: true }, // production build rules here
});
```


### 2. Dev server vs production build

**Development server** and **production build** are two different modes with different goals:

- **Dev server** focuses on **speed of feedback**. It serves real files from disk, uses **Hot Module Replacement (HMR)** to update only what changed, and skips heavy optimizations so you can iterate quickly.
- **Production build** focuses on **loading speed for users**. It performs **tree-shaking, code-splitting, minification**, and outputs hashed filenames for long‑term caching.

**Takeaway:** in dev, expect super fast refreshes but larger, unoptimized files. In prod, expect tiny optimized files but no HMR.

**Commands you’ll run:**```
npm run dev      # development server with HMR
npm run build    # production build in dist/
npm run preview  # serve dist/ locally to verify the prod bundle
```


### 3. esbuild: dependency pre-bundling and speed

Vite uses **esbuild** (written in Go) to **pre-bundle dependencies**. Node modules often ship many tiny files; importing them individually would be slow in the browser. esbuild bundles those into a few fast-to-load chunks during dev startup so that your page loads instantly.

**What you get:** near‑instant dev server start, fewer network requests, and faster HMR.

**How to see it:** the first time you run `npm run dev`, Vite prints a short pre-bundle step in the console. That’s esbuild at work.

**You rarely need to configure this**, but if a library behaves oddly, you can include/exclude it in `optimizeDeps`.

### 4. SWC for React + TypeScript transforms

This project uses `@vitejs/plugin-react-swc`, which swaps Babel for **SWC** (a Rust-based compiler). SWC compiles TS/JSX **much faster** than Babel, while preserving features like **Fast Refresh** (stateful HMR for React).

**Why this matters:** faster rebuilds -> faster learning loop -> happier you.

**Config snippet:**```ts
// vite.config.ts
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [react(/* swc options here if needed */)],
});
```


### 5. TypeScript types are erased at runtime

TypeScript’s job is to **help you at compile-time**. Once the code is built, **all types are removed** and the browser receives plain JavaScript. That means you cannot check a TypeScript `interface` in the browser — it doesn’t exist there.

**Practical tip:** If you need runtime validation (for example to ensure an API response matches a shape), use a validation library like `zod` or `io-ts` alongside TypeScript.

**Demo:**```ts
// This interface helps during development only.
interface User { id: string; name: string; }

// After build, the interface is gone; the browser only sees the following function:
export function greet(user: { id: string; name: string }) {
  return `Hello ${user.name}`;
}
```


### 6. `tsc` vs SWC: who does what?

- **SWC** (via the Vite plugin) **transforms** your `.ts/.tsx` into JavaScript the browser can run.
- **TypeScript (`tsc`)** is typically used here for **type-checking only** (no code emission).

**In CI** you might run `tsc --noEmit` to fail the build if there are type errors, while Vite/SWC handle the JS output.

**Script example for CI:**```
# package.json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "build": "vite build"
  }
}
```


### 7. The module graph: how Vite knows what to reload

Vite watches your imports starting from `src/main.tsx`. It builds a **graph** of which files import which. When you save a file, Vite only re-transforms that module and anything that depends on it. That’s how HMR can be so fast.

**Why it matters:** if you see a whole page reloading (losing state) instead of just updating a component, it usually means something about the module boundary changed (e.g., you edited an entry file or provider), which forces a wider refresh.


### 8. Path aliases (`@` → `./src`)

Relative imports like `../../../components/Button` are fragile and unreadable. We define an alias so you can always import from the root of `src` as `@/…`.

**Config:**```ts
// vite.config.ts
import path from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
```

**Usage:**```ts
// Before (fragile):
import Button from "../../../components/ui/button";

// After (stable, readable):
import Button from "@/components/ui/button";
```
**Tip:** mirror this alias in your `tsconfig` (`compilerOptions.paths`) so editors understand it.


### 9. ESM-first development

In dev, Vite serves source files directly using **ES Modules**. No heavy upfront bundling. Your browser does the module loading natively. This is why Vite feels instant compared to older bundlers.

**Consequence:** `import` statements must be valid ESM. If you run into unusual `require()` code from legacy libraries, prefer ESM builds or add compatibility shims.


### 10. Hot Module Replacement (HMR)

HMR swaps **just the changed module** in the running app **without a full refresh**. For React, **Fast Refresh** can preserve component state (form inputs, toggles) across edits.

**When it breaks state:** changing a component’s **signature** (e.g., moving hooks conditionally or altering exports) can force a full reload. Keep hooks at top level and exports stable.

**Try it:** run `npm run dev`, open the app, edit a component, hit save — the UI should update immediately without losing state.


### 11. CSS handling (Tailwind + global CSS)

You can import CSS directly in JS/TS (`import './index.css'`). Vite processes it through **PostCSS**, and Tailwind compiles utility classes based on what appears in your source files. In production, unused Tailwind classes are purged, shrinking your CSS.

**Common gotcha:** if styles don’t apply, check `tailwind.config.ts` **content globs** include your source folders.

**Example:**```tsx
// src/main.tsx
import "@/index.css";
import App from "./App";
```


### 12. Static assets: `public/` vs imported files

- Anything inside **`public/`** is served **as-is** at the site root. Use it for static files you reference by URL (`/favicon.svg`).
- Files **imported** from code (e.g., `import logo from './logo.png'`) are processed by Vite, placed in `dist/assets`, and given **hashed names** for caching.

**Rule of thumb:** if you need the asset’s URL in code, **import** it; if it’s a truly static top-level file (robots.txt), put it in **public/**.


### 13. Base URL (`build.base`) and subpath deployments

If you deploy your app under a subpath (e.g., `https://example.com/myapp/`), set Vite’s `base` so asset URLs are correct.

**Config:**```ts
// vite.config.ts
export default defineConfig({
  base: "/myapp/"
});
```
**Symptoms if wrong:** broken images/CSS in production while dev works fine.


### 14. Environment variables with `import.meta.env`

Vite exposes variables that start with **`VITE_`** to your client code. Others stay private to the build tool.

**Usage:** create `.env` files like `.env`, `.env.development`, `.env.production`:

```
# .env
VITE_API_URL=https://api.example.com
```

Then in code:

```ts
const api = import.meta.env.VITE_API_URL;
fetch(`${api}/status`);
```
**Never put secrets in client env vars** — anything prefixed with `VITE_` is visible in the browser.


### 15. Code splitting (why your bundle becomes multiple files)

Instead of one giant JS file, Vite (via Rollup) splits your code into **chunks**: a main bundle and additional chunks that only load when needed. This makes initial loads fast.

**How you trigger it:** use **lazy imports** for heavy pages/components.

```tsx
import { lazy, Suspense } from "react";
const Admin = lazy(() => import("@/pages/Admin")); // code split here
export default function App(){
  return <Suspense fallback={<p>Loading…</p>}>
    <Admin/>
  </Suspense>;
}
```
**Tip:** consider code-splitting large routes, charts, or editors.


### 16. Tree-shaking: removing unused code

Tree-shaking eliminates **unused exports** from your final bundle. To help the bundler:

- Import **only** what you need: `import { Button } from 'lib'` instead of `import * as lib`.
- Avoid side-effectful modules (or mark them with `"sideEffects": false` in their package).

**Quick check:** if you import a function and never use it, it shouldn’t appear in your prod bundle.


### 17. Minification and compression

Production builds **minify** code (remove whitespace, shorten identifiers). Servers can also **compress** responses (gzip/brotli). Together these reduce download size dramatically.

**Tip for juniors:** minified code looks unreadable; that’s normal. Use **source maps** for debugging.


### 18. Source maps (debugging production)

Enable `build.sourcemap = true` so you can debug the original TypeScript in production. Source maps map minified code back to your source files.

**Config:**```ts
export default defineConfig({
  build: { sourcemap: true }
});
```
**Caution:** source maps can expose source; check your infosec policy before publishing them publicly.


### 19. Dynamic `import()` for conditional loading

Besides route-level splitting, you can load any module only when you need it. This keeps initial bundles light.

```ts
async function exportCSV(rows: any[]) {
  const { unparse } = await import("papaparse"); // loaded only on demand
  const csv = unparse(rows);
  // ...
}
```
**Guideline:** use it for features users might not touch every visit (export, big charts).


### 20. Working with images

Import images for hashed URLs and potential optimizations.

```tsx
import logo from "@/assets/logo.png";
export function Header(){
  return <img src={logo} alt="Company logo" width={160} height={40} />;
}
```
**Accessibility note:** always add `alt` text.


### 21. SVGs: URL vs component

You can use SVGs as plain images **or** inline them as components so you can style them.

**URL usage:**```tsx
import mark from "@/assets/mark.svg";
<img src={mark} alt="Mark"/>
```

**Component usage (via a plugin like vite-plugin-svgr):**```tsx
import { ReactComponent as Mark } from "@/assets/mark.svg";
<Mark className="w-6 h-6 text-blue-500"/>
```
Component SVGs are great for icons you want to recolor/animate.


### 22. Linting with ESLint

**ESLint** catches problems early: unused variables, accidental `any`, import order, etc. It also enforces consistent style.

**Run it:** `npm run lint`.

**Typical config goals:** React hooks rules, import ordering, TypeScript rules. Fix warnings before merging so juniors learn the correct patterns.


### 23. Type-checking in CI (`tsc --noEmit`)

Even with SWC doing transforms, we still want **TypeScript errors to fail the build**. In CI, run:

```
npm run typecheck
```

with a script like:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```
**Why juniors should care:** type errors often mean bad assumptions about data. Catch them before the code reaches users.


### 24. Pre-bundling details (what Vite optimizes)

When you import a library that has dozens of small files, the browser would have to make dozens of requests. Vite pre-bundles such dependencies into a few files using esbuild so dev loads are instant.

**You can control it:**```ts
export default defineConfig({
  optimizeDeps: {
    include: ["date-fns"],   // force include
    exclude: ["big-lib"]     // or skip if it breaks something
  }
});
```
If something fails on first run, try clearing Vite’s cache (`node_modules/.vite`) and restarting.


### 25. Dev port configuration

Vite’s default dev port is **5173**. This repo sets it to **8080** so it doesn’t clash with common ports like 3000.

**Where:** `vite.config.ts` → `server.port = 8080`.

**Tip:** if 8080 is in use, run `vite --port 3001` or change the config.


### 26. SWC vs Babel: when to prefer which

- **SWC**: blazing fast, great for modern React apps, excellent default in Vite via `@vitejs/plugin-react-swc`.
- **Babel**: mature ecosystem with many plugins; useful if you need very specific transforms.

**In this project** we use SWC for speed. If you ever need a niche Babel plugin, you can switch plugins or add Babel only where needed (rare).


### 27. React Fast Refresh (stateful HMR)

Fast Refresh keeps the React component tree alive while swapping module code. You can edit a component and keep input values and scroll position.

**When it fails:** moving hooks around conditionally or changing the component’s exports can break Fast Refresh and trigger a full reload.

**Tip:** keep hooks at the top level and component signatures stable while iterating.


### 28. PostCSS pipeline (Tailwind and autoprefixer)

PostCSS is the **processing step** for CSS. In this project it loads **Tailwind** (utility classes) and **autoprefixer** (vendor prefixes).

**Typical config:** `postcss.config.js` loads Tailwind and autoprefixer. **Tailwind** looks at your source files to generate only the utilities you actually use, keeping CSS small in production.


### 29. UI component system (shadcn/ui + Radix)

This repo includes UI components generated by **shadcn/ui**, which are thin wrappers around **Radix UI primitives**. Radix gives you accessible, unstyled building blocks (menus, dialogs, popovers). shadcn/ui adds sensible styling and composable APIs.

**Why juniors love this:** you get production-quality components without learning a giant design system first. You still see the JSX and Tailwind classes, so you can customize freely.

**Example:**```tsx
import { Button } from "@/components/ui/button";

export function Actions(){
  return (
    <div className="flex gap-2">
      <Button>Save</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  );
}
```
**Accessibility benefit:** Radix handles keyboard navigation and focus management, so your app works for more users.


### 30. `QueryClient` and server state (React Query)

Client state (toggles, form inputs) is not the same as **server state** (data from APIs). This project uses **React Query** to fetch/cache server data, handle loading/error states, and refetch when data goes stale.

**Setup:** we create a `QueryClient` and wrap the app with `QueryClientProvider` in `App.tsx` so pages can call `useQuery` and `useMutation` anywhere.

**Example:**```tsx
import { useQuery } from "@tanstack/react-query";
async function fetchTodos(){ const res = await fetch("/api/todos"); return res.json(); }

export function TodoList(){
  const { data, isLoading, error } = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Could not load</p>;
  return <ul>{data.map((t:any)=><li key={t.id}>{t.title}</li>)}</ul>;
}
```
**Win:** no manual “isLoading/isError” spaghetti, built‑in caching, and easy invalidation after mutations.


### 31. Build output structure (what ends up in `dist/`)

Running `npm run build` creates a **`dist/`** folder with:

- Hashed JS chunks: `assets/index-abc123.js`
- Hashed CSS: `assets/index-abc123.css`
- Static assets referenced by your code

Hashed filenames let browsers **cache forever**; when you deploy a new version, the hash changes and users get fresh files.


### 32. Previewing production locally

`npm run preview` serves the **built** `dist/` folder so you can test the **real production** experience locally. This catches issues that don’t show up in dev, like wrong `base` paths or missing environment variables.

**Workflow:** build → preview → click around like a user → then deploy.


### 33. Import hygiene (make imports readable and stable)

Import hygiene is about **readability** and **refactor‑friendliness**. Deep relative paths (`../../../`) are error-prone and make code hard to scan. We fix this with an alias (`@`) pointing at `src/`.

**Config:** in `vite.config.ts` we set the alias; in `tsconfig` we mirror it for editor support.

**Best practices for juniors:**
- Use `@/…` for anything inside `src`.
- Group imports: external libs, then absolute, then relative.
- Avoid `export default` barrels that hide what’s imported; prefer named exports for tree-shaking.


### 34. Layered `tsconfig` files (one size doesn’t fit all)

Different parts of the project have different needs. **Browser code** requires DOM types; **Node tooling** (like Vite config) needs Node types. We keep separate configs that **extend** a base.

**Example structure:**
- `tsconfig.json` — base rules shared by all
- `tsconfig.app.json` — browser app (`lib: ["ES2020","DOM"]`)
- `tsconfig.node.json` — Node tooling (`types: ["node"]`)

This prevents errors like “`document` is not defined” in Node files or “`process` is not defined” in browser files.


### 35. TypeScript strictness

`"strict": true` turns on a set of checks that **catch bugs early**: no implicit `any`, strict null checks, etc. Juniors often want to turn this off; **don’t**. It’s a safety net that teaches you correct types gradually.

**If you hit a wall**, narrow the value instead of loosening types:
```ts
function handle(x: string | null) {
  if (!x) return;            // narrow null/undefined
  console.log(x.toUpperCase());
}
```


### 36. DOM libs: telling TS you’re in the browser

If you see errors like `Property 'querySelector' does not exist`, your TS config may be missing `"DOM"` in `compilerOptions.lib`. Frontend projects need DOM library types to use `window`, `document`, etc.

**Check:** `tsconfig.app.json` should include `"lib": ["ES2020","DOM","DOM.Iterable"]`.


### 37. JavaScript target (what JS your users get)

`compilerOptions.target` controls which JS features TypeScript emits. A modern target like **ES2020** keeps output compact and fast, but older browsers might need polyfills.

**Guideline:** choose the **newest** reasonable target for your users; add polyfills only for features you actually use.


### 38. Polyfills (adding features to older browsers)

Vite doesn’t automatically polyfill everything. If you need features like `fetch` on very old browsers, add polyfills intentionally. Most modern projects can skip this, but if your audience includes old devices, use conditional polyfills or a library like `polyfill.io`.


### 39. Testing with Vitest (fast, Vite-native tests)

**Vitest** runs tests in a Vite-aware environment, so your aliases and transforms just work.

**Example test:**```ts
import { describe, it, expect } from "vitest";
import { sum } from "@/lib/sum";

describe("sum", () => {
  it("adds numbers", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
```
**Tip for juniors:** start with tiny pure functions; testing UI comes later.


### 40. CI caching (make pipelines fast)

On CI (GitHub Actions, GitLab CI), cache `node_modules` and Vite’s pre-bundled deps to avoid re-downloading and re-processing on every run. This makes pipelines much faster and cheaper.

**Rule of thumb:** cache by OS, Node version, and your lockfile hash.


### 41. Performance budgets (keep bundles small)

Set expectations for bundle sizes and enforce them. If a change pushes you over the budget (e.g., +300KB), investigate: can you lazy-load that feature or use a lighter library?

**Quick wins:** lazy-load heavy routes, avoid shipping moment.js if you can use date-fns, prefer SVG icons over big PNGs.


### 42. Accessibility (a11y) built in

Using Radix + shadcn/ui gives you accessible primitives out of the box: focus management, keyboard navigation, ARIA roles. You are still responsible for **alt text**, **color contrast**, and **focus outlines**.

**Junior checklist:** every interactive element must be reachable by keyboard; never remove focus rings without a replacement.


### 43. Internationalization (i18n) approach

If your app needs multiple languages, organize translation files by locale and **lazy-load** them with dynamic imports so you don’t bloat the initial bundle.

**Example idea:**```ts
async function loadLocale(locale: "en" | "nl") {
  if (locale === "nl") return (await import("@/i18n/nl.json")).default;
  return (await import("@/i18n/en.json")).default;
}
```
**Tip:** keep user’s selected locale in localStorage and restore it on load.


### 44. Security: what not to ship to the browser

Anything in client code is **public**. Don’t put secrets in `import.meta.env` unless they start with `VITE_` and you’re comfortable exposing them. Never embed private keys, DB URLs, or admin tokens. For authenticated APIs, use short‑lived access tokens and refresh them securely.

**CORS note:** if the browser blocks a request, check server CORS headers (`Access-Control-Allow-Origin`, etc.).


### 45. Deployment: turning `dist/` into a live site

The production build in `dist/` is just static files. You can host them anywhere: **Vercel**, **Netlify**, **GitHub Pages**, **S3 + CloudFront**, or a simple Nginx.

**Minimal Nginx example:**```nginx
server {
  listen 80;
  server_name example.com;
  root /var/www/app/dist;

  location / {
    try_files $uri /index.html; # SPA: serve index.html for client routing
  }
}
```
**SPA note:** that `try_files` rule ensures paths like `/users/123` still load your app and let React Router handle the route.


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
