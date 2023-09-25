import { AiOutlineDelete } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { BsArrow90DegRight } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { smallAvatar } from "../../../assets/svg";
import { useDisclosure } from "@mantine/hooks";
// import ReplyModal from "../../../component/Modal/ReplyModal";
import TestModal from "../../../component/Modal/TestModal";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect, useState } from "react";
import { deleteCommentFromFireStore } from "../../../functions/firebase";
import ConfirmationModal from "../../../component/Modal/ConfirmationModal";
import { setAppLoader } from "../../../redux/reducers/generic";

const sortIcon = <BsArrowDownShort />;

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

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
      background: "grey",
      backdropFilter: "blur(20px)",
      color: "white",
    },
  },
  pagination: {
    style: {
      background: "#272428",
      backdropFilter: "blur(20px)",
      color: "white",
    },
  },

  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      background: "#272428",
      backdropFilter: "blur(20px)",
      color: "white",
      "& .rdt-sort-icon": {
        fontSize: "30px",
      },
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      color: "white",
      background: "#272428",
      backdropFilter: "blur(20px)",
    },
  },
};

const All = ({ search, selected, setSelected, currentTab = "All" }) => {
  const [isOpen, { toggle }] = useDisclosure();
  const { allCollectionData, comments, commentUsers } = useSelector(
    (_) => _.genericSlice
  );

  const [commentData, setCommentData] = useState([]);
  const [activeComment, setActiveComment] = useState({});

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedComment, setSelectedComment] = useState("");
  const dispatch = useDispatch();

  
  useEffect(() => {
    console.log(currentTab, "currentTab");
    if(currentTab.toLowerCase() == "all"){
      setCommentData(comments);
    }else if(currentTab.toLowerCase() == "read"){
      // console.log(comments, "currentTab");
      setCommentData((comments || []).filter(comm =>{
        if(comm?.replies != undefined){
          return (comm?.replies.length > 0)
        }

        return false;
      }));
    }else{
      setCommentData((comments || []).filter(comm =>{
        if(comm?.replies != undefined){
          return (comm?.replies.length == 0)
        }

        return true;
      }));

    }
  }, [currentTab]);

  useEffect(() => {
    setCommentData(comments);
  }, [comments]);

  useEffect(() => {
    console.log(search);
    if (search == "") {
      setCommentData(comments);
    } else {
      setCommentData(
        comments.filter((comment) => {
          return comment.comment.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search, comments]);

  const deleteComment = async () => {
    dispatch(setAppLoader(true));
    try {
      await deleteCommentFromFireStore(selectedComment);
    } catch (error) {}
    dispatch(setAppLoader(false));

    return;
  };

  const openConfirmationModal = (commentId) => {
    setSelectedComment(commentId);
    open();
    return;
  };

  const columns = [
    {
      name: "Name",
      // selector: "title",
      sortable: true,
      width: "15%",

      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="py-5 ">
            <img
              src={row.user?.photo || smallAvatar}
              alt={""}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <span style={{ marginLeft: "5px" }}>
              {row.user?.first_name} {row.user?.last_name}
            </span>
          </div>
        </div>
      ),
    },
    {
      name: "Comment",

      sortable: true,
      cell: (row) => (
        <div
          style={{
            paddingTop: 7,
            paddingBottom: 7,
            height: 100,
          }}
        >
          {row.comment}
        </div>
      ),
    },

    {
      name: "Date",
      // selector: "date",
      sortable: true,
      cell: (row) => <div>{moment(row.dateCommented).calendar()}</div>,
    },

    {
      selector: "reply",
      width: "5%",
      cell: (row) => (
        <button
          onClick={() => {
            setActiveComment(row);
            toggle();
          }}
          className="text-[#8991A0]"
        >
          Reply
        </button>
      ),
    },
    {
      width: "5%",
      cell: (row) => (
        <AiOutlineDelete
          onClick={() => openConfirmationModal(row.commentId)}
          size={16}
          className="cursor-pointer"
        />
      ),
    },
  ];

  return (
    <div>
      <div>
        <DataTable
          columns={columns}
          data={commentData}
          selectableRows
          pagination
          onSelectedRowsChange={({ selectedRows }) => {
            setSelected(selectedRows);
          }}
          sortIcon={sortIcon}
          customStyles={customStyles}
        />
      </div>
      {opened && (
        <ConfirmationModal
          isOpen={opened}
          onClose={close}
          onAccept={deleteComment}
          title=" Are you sure you want to delete this comment?"
        />
      )}
      <TestModal
        activeComment={activeComment}
        isOpen={isOpen}
        onClose={toggle}
      />
    </div>
  );
};

export default All;
