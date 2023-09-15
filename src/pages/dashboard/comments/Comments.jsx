import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

import Read from "./Read";
import Unread from "./Unread";
import { useMemo, useState } from "react";
import All from "./All";

const commentTabs = [
  {
    id: 0,
    title: "All",
    slug: "all",
  },
  {
    id: 0,
    title: "Read",
    slug: "read",
  },
  {
    id: 1,
    title: "Unread",
    slug: "unread",
  },
];

export const inputStyles = {
  border: "1px solid #D0D5DD",

  background: "rgba(15, 9, 12, 0.40)",
  borderRadius: "31px",
  "&:focus": {
    outline: "none",
    border: "1px solid #D0D5DD",
    color: "#fff",
  },
};

const Comment = () => {
  const [currentTab, setCurrentTab] = useState("comment");

  const updateCommentTabData = useMemo(() => {
    switch (currentTab) {
      case "all":
        return <All />;
      case "read":
        return <Read />;
      case "unread":
        return <Unread />;

      default:
        return <All />;
    }
  }, [currentTab]);

  return (
    <div className="comment-table-container  my-20 mx-10">
      <div className="px-4 space-y-2 md:px-12 py-2">
        <h4 className="">Comments</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            {commentTabs.map(({ id, title, slug }) => (
              <div
                key={id}
                className={`${
                  currentTab === slug && "comment-active-tab"
                } cursor-pointer`}
                onClick={() => setCurrentTab(slug)}
              >
                <h6>{title}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 my-4 md:px-12">{updateCommentTabData}</div>
      <div className="absolute right-5 mx-2 flex items-center gap-x-2 py-8 -top-2 border-6 ">
        <AiOutlineDelete />
        <p>delete</p>
        <Input
          icon={<BsSearch size="1rem" />}
          placeholder="Search"
          styles={{ input: inputStyles }}
        />
      </div>
    </div>
  );
};

export default Comment;
