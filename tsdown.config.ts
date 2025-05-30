import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["./src/index.ts"],
    platform: "neutral",
    unbundle: true,
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
]);
