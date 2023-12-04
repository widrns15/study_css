import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // ex base: '/my_project.git/',
  base: "/study_css/",
  plugins: [react()],
});
