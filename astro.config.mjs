// @ts-check
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://scapy47.pages.dev",

  integrations: [
    react({
      include: ["**/react/*"],
      experimentalReactChildren: true,
    }),
    icon({
      include: {
        "line-md": ["*"],
      }
    })
  ],

  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
