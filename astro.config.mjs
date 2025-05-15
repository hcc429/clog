// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import rehypeExternalLinks from "rehype-external-links";
import starlightSidebarTopics from "starlight-sidebar-topics";
import mdx from "@astrojs/mdx";
import { options, sidebar } from "./sidebar";

import expressiveCode from "astro-expressive-code";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ["localhost", "m4mini.ishcc.net", "blog.ishcc.net"], // Bug: it should set to true to allow any host
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

      plugins: [starlightSidebarTopics(sidebar, options), starlightBlog()],
      customCss: ["./src/styles/global.css"],
      pagination: false,
    }),
    expressiveCode(),
    mdx(),
  ],

  site: "https://hcc429.github.io",

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

  vite: {
    plugins: [tailwindcss()],
  },
});
