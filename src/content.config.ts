import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";


// Export a single `collections` object to register your collection(s)
export const collections = {
    physics: defineCollection({
        loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/contents" }),
    })
};