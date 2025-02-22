import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  try {
    const { entry, id } = context.locals.starlightRoute;

    console.log(id);

    if (id.startsWith("/blog/")) {
      entry.data.topic = "blog";
    }
  } catch (e) {
    console.log("Skipping non-Starlight route");
  }
});
