import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mantine: [
            "@mantine/core",
            "@mantine/carousel",
            "@mantine/hooks",
            "embla-carousel-react",
          ],
          utils: ["framer-motion"],
          react: ["react", "react-dom", "react-router-dom"],
          icons: ["@tabler/icons-react"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
