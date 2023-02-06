import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react";

storyblokInit({
  accessToken: "SCWmH5n9jDiQDM7toIUdoAtt",
  use: [apiPlugin],
  apiOptions: {
    cache: {
      clear: "auto",
      type: "memory",
    },
  },
});

const storyblokApi = getStoryblokApi();

export async function getStory(slug: string, params = {}) {
  const result = await storyblokApi.get("cdn/stories/" + slug, {
    ...params,
  });
  const response = result.data;
  return response;
}
