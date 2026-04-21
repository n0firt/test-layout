import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/_variables.scss" as *; @use "@/assets/scss/_mixins.scss" as *;`,
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    host: false,
    // watch: {
    //   usePolling: true,
    // },
  },
});
