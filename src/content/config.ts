import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "starlight-blog/schema";
import { topicSchema } from "starlight-sidebar-topics-dropdown/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: (context) => {
        return blogSchema(context).merge(topicSchema);
      },
    }),
  }),
};
