// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { unified } from '@astrojs/markdown-remark';
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://scapy47.pages.dev",

  integrations: [icon({
    include: {
      "line-md": ["*"],
    }
  }), preact({
    compat: true,
  }), mdx(), svelte()],

  markdown: {
    processor: unified({
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath],
    })
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
    //   provider: fontProviders.google(),
    //   name: "Geist Pixel",
    //   cssVariable: "--font-geist-pixel",
    //   styles: ["normal"]
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

    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
