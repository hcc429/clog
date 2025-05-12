// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import rehypeExternalLinks from "rehype-external-links";
import starlightSidebarTopics from "starlight-sidebar-topics";
import mdx from "@astrojs/mdx";
import { options, sidebar } from "./sidebar";
import catppuccin from "@catppuccin/starlight";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ["localhost", "m4mini.ishcc.net"], // Bug: it should set to true to allow any host
  },
  integrations: [
    starlight({
      title: "clog",
      social: [
        {
          label: "Github",
          icon: "github",
          href: "https://github.com/hcc429/clog",
        },
      ],
      components: {
        // Override the default `Sidebar` component with a custom one.
        Sidebar: "./src/components/Sidebar.astro",
      },

      plugins: [
        starlightSidebarTopics(sidebar, options),
        starlightBlog(),
        catppuccin({dark: {"flavor": "macchiato"}}),
      ],
    }),
    expressiveCode(),
    mdx(),
  ],
  site: "https://hcc429.github.io",
  base: "/clog",
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
});
