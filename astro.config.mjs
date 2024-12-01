// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      plugins: [
        starlightBlog({
          authors: {
            trueberryless: {
              name: "trueberryless",
              title: "Completely lost",
              picture: "https://avatars.githubusercontent.com/u/99918022?v=4",
              url: "https://trueberryless.org",
            },
            hideoo: {
              name: "HiDeoo",
              title: "Starlight Aficionado",
              picture: "https://avatars.githubusercontent.com/u/494699?s=200",
              url: "https://hideoo.dev",
            },
          },
        }),
        starlightSidebarTopicsDropdown([
          {
            label: "Guides",
            link: "/guides/example",
            icon: "open-book",
            items: ["guides/example"],
          },
          {
            label: "Reference",
            link: "/reference/example",
            icon: "information",
            items: ["reference/example"],
          },
          {
            label: "Blog",
            link: "/blog/example",
            icon: "open-book",
            items: [
              {
                label: "Blog",
                link: "/blog",
              },
              {
                label: "Tag Example",
                link: "/blog/tags/example",
              },
              {
                label: "Author trueberryless",
                link: "/blog/authors/trueberryless",
              },
              {
                label: "Author hideoo",
                link: "/blog/authors/hideoo",
              },
              "blog/example",
            ],
          },
        ]),
      ],
      components: {
        Sidebar: "./src/components/Sidebar.astro",
      },
    }),
  ],
});
