// @ts-check
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Scapy47.github.io",

  integrations: [
    react({
      include: ["**/react/*"],
      experimentalReactChildren: true,
    }),
  ],

  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
