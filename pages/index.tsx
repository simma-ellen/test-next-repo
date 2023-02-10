import { GetStaticProps, GetStaticPropsContext } from "next/types";
import { getStory } from "lib/api/storyblok";
import SWR from "@/components/swr";
import Kitchensink from "./kitchensink";

export default function Home(fallbackSettings: any) {
  return (
    <>
      <main className="">
        <Kitchensink />
        <SWR fallbackSettings={fallbackSettings} />
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
