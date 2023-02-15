import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { join } from "path";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "~": join(__dirname, "src/"),
      "theme": join(__dirname, "src/theme/index.ts")
    },
  },
});
