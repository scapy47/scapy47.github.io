// @ts-check
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Scapy47.github.io",
  integrations: [
    react({
      include: ['**/react/*'],
      experimentalReactChildren: true,
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
