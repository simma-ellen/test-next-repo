import Head from "next/head";
import useSWR, { SWRConfig } from "swr";
import { GetStaticProps, GetStaticPropsContext } from "next/types";
import { getStory } from "lib/api/storyblok";

export default function Home(fallbackSettings: any) {
  const fetcher = async (url: string) =>
    await fetch(url)
      .then((res) => res.json())
      .then((data) => data);

  const { data, error, isLoading } = useSWR(
    "https://api.storyblok.com/v2/cdn/stories/settings?token=SCWmH5n9jDiQDM7toIUdoAtt&version=draft",
    fetcher
  );

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
            <>
              {/* <div className="mb-12">{JSON.stringify(data)}</div> */}
              {data?.story?.content && (
                <div className="text-center flex flex-col items-center gap-6">
                  <p>{data.story.content.my_greeting}</p>
                  <p className="text-xl font-medium">
                    There are currently {data.story.content.nr_of_monkeys}{" "}
                    monkeys in the building
                  </p>
                  <img
                    className="max-w-[80vw]"
                    src={data.story.content.image?.filename}
                    alt=""
                  />
                </div>
              )}
            </>
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
