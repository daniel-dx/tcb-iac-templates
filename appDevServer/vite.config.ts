import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      // app_x6eb00wj: path.resolve(
      //   "/Users/daniel/.weda-preview/app-x6eb00wj/h5/src"
      // ),
      // <!-- Don't touch add alias here -->
    },
  },
});
