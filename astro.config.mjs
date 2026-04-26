// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import rehypeCallouts from "rehype-callouts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://blog.ishcc.net",

  server: {
    allowedHosts: true,
  },

  integrations: [
    expressiveCode({ themes: ["github-light"] }),
    mdx(),
    icon(),
  ],

  markdown: {
    rehypePlugins: [
      [rehypeCallouts, { theme: "github", aliases: { note: ["info"] } }],
      [rehypeExternalLinks, { target: "_blank" }],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
