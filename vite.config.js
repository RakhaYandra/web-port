import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Keep as 'build' to match the workflow
    sourcemap: false, // Disable sourcemaps in production for smaller build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  base: "/web-port/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
