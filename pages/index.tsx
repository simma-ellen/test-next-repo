import Head from "next/head";
import { Inter } from "@next/font/google";
import useSWR, { SWRConfig } from "swr";
import { useEffect } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next/types";
import { getStory } from "lib/api/storyblok";
import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react";

export default function Home(fallbackSettings: any) {
  const storyblokApi = getStoryblokApi();
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
  const fetcher = async (url: string) =>
    await storyblokApi.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR("cdn/stories/settings", fetcher);

  return (
    <>
      <Head>
        <title>Test Next App</title>
      </Head>
      <main className="bg-yellow-200 min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-10">Try fetching some data</h1>
          {isLoading && <div>Loading…</div>}
          {/* @ts-ignore  */}
          <SWRConfig value={{ fallbackSettings }}>
            {JSON.stringify(data)}
          </SWRConfig>
        </div>
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps<any> = async (
  context: GetStaticPropsContext
) => {
  const fallbackSettings = await getStory("settings");

  return {
    props: {
      fallbackSettings,
    },
    revalidate: 3600,
  };
};
