import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";


// Export a single `collections` object to register your collection(s)
export const collections = {
    notes: defineCollection({
        loader: glob({
            pattern: [
                "**/[^_]*.{md,mdx}",
                "*.{md,mdx}"
            ],
            base: "./src/contents"
        }),
    })
};