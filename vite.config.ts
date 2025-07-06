import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "TuWebComponents",
      fileName: "tu-web-components",
      formats: ["es"],
    }
  },
});
