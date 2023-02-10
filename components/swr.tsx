import useSWR, { SWRConfig } from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function SWR(fallbackSettings: any) {
  const [updated, setUpdated] = useState(false);
  const fetcher = async (url: string) =>
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUpdated(true);
        setTimeout(() => {
          setUpdated(false);
        }, 1000);
        return data;
      });

  const { data, error, isLoading } = useSWR(
    "https://api.storyblok.com/v2/cdn/stories/settings?token=SCWmH5n9jDiQDM7toIUdoAtt&version=draft",
    fetcher
  );

  return (
    <div className="bg-yellow-200 min-h-screen flex flex-col items-center justify-center">
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
                There are currently {data.story.content.nr_of_monkeys} monkeys
                in the building
              </p>
              <div className="bg-yellow-400 h-40 w-80">
                <AnimatePresence>
                  {data.story.content.image && (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={updated ? { opacity: 0 } : { opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full w-full object-cover"
                      src={data.story.content.image.filename}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </>
      </SWRConfig>
    </div>
  );
}
