// @ts-check
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://scapy47.pages.dev",

  integrations: [
    icon({
      include: {
        "line-md": ["*"],
      }
    }),
    preact({
      include: ["**/preact/*"],
      compat: true,
    }),
    mdx()
  ],

  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
