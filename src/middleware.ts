import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware(async (context, next) => {
  const { entry, id } = context.locals.starlightRoute;

  if (id.startsWith("blog")) {
    entry.data.topic = "blog";
  }
  return next();
});
