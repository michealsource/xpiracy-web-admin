import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

import Read from "./Read";
import Unread from "./Unread";
import { useMemo, useState } from "react";
import All from "./All";
import { deleteCommentFromFireStore } from "../../../functions/firebase";
import { useSelector } from "react-redux";

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
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const { comments } = useSelector((_) => _.genericSlice);

  const updateCommentTabData = useMemo(() => {
    switch (currentTab) {
      case "all":
        return (
          <All search={search} selected={selected} setSelected={setSelected} />
        );
      case "read":
        return <Read />;
      case "unread":
        return <Unread />;

      default:
        return (
          <All search={search} selected={selected} setSelected={setSelected} />
        );
    }
  }, [currentTab, search, comments, selected]);

  return (
    <div className="mx-10 my-20 comment-table-container">
      <div className="px-4 py-2 space-y-2 md:px-12">
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
      <div className="absolute flex items-center px-8 py-8 mx-2 right-5 gap-x-2 -top-2 border-6">
        {selected.length > 0 && (
          <div
            onClick={() => {
              for (let i = 0; i < selected.length; i++) {
                const { commentId } = selected[i];

                deleteCommentFromFireStore(commentId);
              }
            }}
          >
            <AiOutlineDelete />
            <p>delete</p>
          </div>
        )}
        <Input
          icon={<BsSearch size="1rem" />}
          placeholder="Search"
          styles={{ input: inputStyles }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Comment;
