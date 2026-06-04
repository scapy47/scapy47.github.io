// @ts-check
import { defineConfig, fontProviders } from "astro/config";
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

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [100, 800],
      styles: ["normal"]
    },
    // {
    //   provider: fontProviders.fontsource(),
    //   name: "",
    //   cssVariable: "",
    // },
  ],

  vite: {
    server: {
      proxy: {
        "/xo": {
          target: "http://localhost:3000",
          changeOrigin: true,
        },
      },
    },

    plugins: [tailwindcss()],
  },
});
