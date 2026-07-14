import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const githubPagesSpaFallback = () => ({
  name: "github-pages-spa-fallback",
  closeBundle() {
    const outDir = path.resolve(__dirname, "dist");
    const indexPath = path.join(outDir, "index.html");
    const fallbackPath = path.join(outDir, "404.html");

    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, fallbackPath);
    }
  },
});

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    githubPagesSpaFallback(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/' // Since this will be the base directory
}));
