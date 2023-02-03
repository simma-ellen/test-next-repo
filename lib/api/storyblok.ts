import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react";
import getConfig from "next/config";
import useSWR from "swr";

// const { serverRuntimeConfig } = getConfig();

storyblokInit({
  accessToken: "SCWmH5n9jDiQDM7toIUdoAtt",
  use: [apiPlugin],
  // components: components,
  apiOptions: {
    cache: {
      clear: "auto",
      type: "memory",
    },
  },
});

const storyblokApi = getStoryblokApi();

export async function getStory(slug: string, params = {}) {
  // const { data, error, isLoading } = useSWR("cdn/stories/settings" + slug, {
  // ...params,
  // });
  const { data, error, isLoading } = useSWR("cdn/stories/settings");
  // const result = await storyblokApi.get("cdn/stories/" + slug, {
  //   ...params,
  // });
  return data;
  // const response = result.data;
  // return response;
}
