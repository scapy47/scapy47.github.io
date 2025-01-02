// @ts-check
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://Scapy47.github.io',
  integrations: [tailwind(), react({
    experimentalReactChildren: true,
  }), mdx({
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath]
  })],
});