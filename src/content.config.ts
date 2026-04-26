import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image(),
      excerpt: z.string(),
      draft: z.boolean().default(false),
    }),
});

// index.mdx in each series subfolder stores series metadata.
const series = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/series" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      draft: z.boolean().default(false),
    }),
});

// Non-index files in series subfolders store series articles.
const seriesPosts = defineCollection({
  loader: glob({ pattern: ["*/*.{md,mdx}", "!*/index.{md,mdx}"], base: "./src/content/series" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image(),
      excerpt: z.string(),
      draft: z.boolean().default(false),
      order: z.number(),
    }),
});

export const collections = { blog, series, seriesPosts };
