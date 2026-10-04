import { resolve } from "node:path";

export default {
  base: "./",
  server: { host: true },
  build: {
    sourcemap: true,
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        projects: resolve(import.meta.dirname, "projects.html"),
      },
    },
  },
};
