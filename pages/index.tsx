import Head from "next/head";
import { Inter } from "@next/font/google";
import useSWR from "swr";
import { useEffect } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next/types";
import { getStory } from "lib/api/storyblok";

const inter = Inter({ subsets: ["latin"] });

export default function Home(settings: any) {
  // const { data, error, isLoading } = useSWR("/api/user", fetcher);
  console.log(settings);

  return (
    <>
      <Head>
        <title>Test Next App</title>
      </Head>
      <main className="bg-yellow-200 min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-10">Try fetching some data</h1>
          {/* I have {data} monkey friends. */}
        </div>
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps<any> = async (
  context: GetStaticPropsContext
) => {
  const settings = await getStory("settings");

  return {
    props: {
      settings,
    },
    revalidate: 3600,
  };
};
