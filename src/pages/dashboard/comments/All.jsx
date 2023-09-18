import { AiOutlineDelete } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { BsArrow90DegRight } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { smallAvatar } from "../../../assets/svg";
import { useDisclosure } from "@mantine/hooks";
// import ReplyModal from "../../../component/Modal/ReplyModal";
import TestModal from "../../../component/Modal/TestModal";
import { useSelector } from "react-redux";
import moment from "moment";
import { useEffect, useState } from "react";
import { deleteCommentFromFireStore } from "../../../functions/firebase";

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


const data = [
  {
    id: 1,
    title: "Thophila Mary",
    content: "Lorem ipsum dolor sit amet Lorem  ",
    img: smallAvatar,
    date: "20 hours ago",
    text: "Christpiracy",
    views: "2",
    comment: "300",
    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,
    reply: "Reply",
    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 2,
    title: "Thophila Mary",
    content: "Lorem ipsum dolor sit amet Lorem  ",
    text: "Christpiracy",
    img: smallAvatar,
    date: "20 hours ago",
    views: "2",
    comment: "300",
    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,
    reply: "Reply",
    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 3,
    title: "Thophila Mary",
    content: "Lorem ipsum dolor sit amet Lorem ",
    text: "Christpiracy",
    img: smallAvatar,
    date: "20 hours ago",
    views: "2",
    comment: "300",
    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,
    reply: "Reply",
    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 4,
    title: "Thophila Mary",
    content: "Lorem ipsum dolor sit amet Lorem  ",
    text: "Christpiracy",
    img: smallAvatar,
    date: "20 hours ago",
    views: "2",
    comment: "300",
    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,
    reply: "Reply",
    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 5,
    title: "Thophila Mary",
    content: "Lorem ipsum dolor sit amet Lorem  ",
    text: "Christpiracy",
    img: smallAvatar,
    date: "20 hours ago",
    views: "2",
    comment: "300",
    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,
    reply: "Reply",
    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 6,
    title: "Thophila Mary",
    content: "Lorem ipsum dolor sit amet Lorem  ",
    text: "Christpiracy",
    img: smallAvatar,
    date: "20 hours ago",
    views: "2",
    comment: "300",
    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,
    reply: "Reply",
    iconTwo: <AiOutlineDelete size={16} />,
  },
];

const All = ({search, selected, setSelected}) => {
  const [isOpen, { toggle }] = useDisclosure();
  const {allCollectionData, comments, commentUsers} = useSelector(_ => _.genericSlice)

  const [commentData, setCommentData] = useState([]);
  const [activeComment, setActiveComment] = useState({});

  useEffect(()=>{
    setCommentData(comments)
  }, [comments]);

  useEffect(()=>{
    console.log(search);
    if(search == ""){
      setCommentData(comments);
    }else{
      setCommentData(comments.filter(comment => {
        return (comment.comment.toLowerCase().includes(search.toLowerCase()));
      }));
    }
  }, [search, comments])

  const columns = [
    {
      name: "Name",
      // selector: "title",
      sortable: true,
      width: "15%",

      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="py-5 ">
            <img src={row.user?.photo || smallAvatar} alt={""} width="20" height="20" />
          </div>
          <div>
            <span style={{ marginLeft: "5px" }}>{row.user?.first_name} {row.user?.last_name}</span>
          </div>
        </div>
      ),
    },
    {
      name: "Comment",
      // selector: "comment",
      sortable: true,
      cell: (row) =>
        (<div style={{ 
          paddingTop: 7,
          paddingBottom: 7,
          height: 100,
         }}>
          {row.comment}
        </div>)
      
    },
    // {
    //   name: "Video",
    //   selector: "text",
    //   sortable: true,
    // },
    {
      name: "Date",
      // selector: "date",
      sortable: true,
      cell: (row) => (
        <div>{moment(row.dateCommented).calendar()}</div>
      )
    },
    // {
    //   selector: "iconOne",
    //   width: "5%",
    //   cell: (row) => (
    //     <button onClick={toggle} className="text-[#8991A0]">
    //       {row.iconOne}
    //     </button>
    //   ),
    // },
    {
      selector: "reply",
      width: "5%",
      cell: (row) => (
        <button onClick={()=> {
          setActiveComment(row);
          toggle()
          }} className="text-[#8991A0]">
          Reply
        </button>
      ),
    },
    {
      // selector: "iconTwo",
      width: "5%",
      cell: (row)=>(
        <AiOutlineDelete onClick={()=>{
          deleteCommentFromFireStore(row.commentId)
        }} size={16} />
      )
    },
  ];

  return (
    <div>
      {/* {modalActive && <ReplyModal handleCloseModal={closeModal} />} */}
      <div>
        <DataTable
          columns={columns}
          data={commentData}
          selectableRows
          pagination
          onSelectedRowsChange={({selectedRows})=>{
            setSelected(selectedRows);
          }}
          sortIcon={sortIcon}
          customStyles={customStyles}
        />
      </div>
      <TestModal activeComment={activeComment} isOpen={isOpen} onClose={toggle} />
    </div>
  );
};

export default All;
