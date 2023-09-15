import { useMemo, useState } from "react";

import ExtendedInterview from "./ExtendedInterview";
import Trailer from "./Trailer";
import Bts from "./Bts";
import MainVideo from "./MainVideo";

const Tabs = [
  {
    id: 0,
    title: "Main Video",
    slug: "video",
  },
  {
    id: 1,
    title: "Extended Interview",
    slug: "interview",
  },
  {
    id: 2,
    title: "Trailer and Testimonial",
    slug: "trailer",
  },
  {
    id: 3,
    title: "Behind The Scene",
    slug: "bts",
  },
];

const VideosScreen = () => {
  const [currentTab, setCurrentTab] = useState("video");
 

  const updateTabData = useMemo(() => {
    switch (currentTab) {
      case "video":
        return <MainVideo />;
      case "interview":
        return <ExtendedInterview />;
      case "trailer":
        return <Trailer />;
      case "bts":
        return <Bts />;
      default:
        return<MainVideo />;
    }
  }, [currentTab]);

  return (
    <>
      <div className="cp_container h-auto w-full">
        <div className="px-4 py-2 my-4 md:px-12 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              {Tabs.map(({ id, title, slug }) => (
                <div
                  key={id}
                  className={`${
                    currentTab === slug && "active-tab"
                  } cursor-pointer`}
                  onClick={() => setCurrentTab(slug)}
                >
                  <h6>{title}</h6>
                </div>
              ))}
               
            </div>
           
          </div>
          {/* <div className="border-b-[0.1px] border-[#8f8c8c] border z-50"></div> */}
        </div>
        <div className="px-4 my-8 md:px-12">{updateTabData}</div>
      </div>
    </>
  );
};

export default VideosScreen;
