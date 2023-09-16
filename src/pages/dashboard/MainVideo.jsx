import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { JeusImg } from "../../assets/png";
import { MdEdit } from "react-icons/md";
import { BsArrowDownShort } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import VideoMetaModal from "../../component/Modal/VideoMetaModal";
import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosClient from "../../api/axios";
import { getAllCollectionDataAction, getCollectionAction } from "../../redux/actions/genericAction";

const sortIcon = <BsArrowDownShort />;

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
      overflowY: "scroll",

      maxHeight: "80vh",
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
    title: "The Chosen",
    content:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    img: JeusImg,
    year: "Jun 20, 2023",
    views: "2",
    comment: "300",
    iconOne: <MdEdit size={20} />,
    iconTwo: <AiOutlineDelete size={20} />,
  },
  {
    id: 2,
    title: "The Chosen",
    content:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    img: JeusImg,
    year: "Jun 20, 2023",
    views: "2",
    comment: "300",
    iconOne: <MdEdit size={20} />,
    iconTwo: <AiOutlineDelete size={20} />,
  },
  {
    id: 3,
    title: "The Chosen",
    content:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    img: JeusImg,
    year: "Jun 20, 2023",
    views: "2",
    comment: "300",
    iconOne: <MdEdit size={20} />,
    iconTwo: <AiOutlineDelete size={20} />,
  },
  {
    id: 4,
    title: "The Chosen",
    content:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    img: JeusImg,
    year: "Jun 20, 2023",
    views: "2",
    comment: "300",
    iconOne: <MdEdit size={20} />,
    iconTwo: <AiOutlineDelete size={20} />,
  },
  {
    id: 5,
    title: "The Chosen",
    content:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    img: JeusImg,
    year: "Jun 20, 2023",
    views: "2",
    comment: "300",
    iconOne: <MdEdit size={20} />,
    iconTwo: <AiOutlineDelete size={20} />,
  },
  {
    id: 6,
    title: "The Chosen",
    content:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
    img: JeusImg,
    year: "Jun 20, 2023",
    views: "2",
    comment: "300",
    iconOne: <MdEdit size={20} />,
    iconTwo: <AiOutlineDelete size={20} />,
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

const MainVideo = ({allCollectionData, currentTab}) => {
  const [isOpen, { toggle }] = useDisclosure();
  const dispatch = useDispatch();

  const [columnData, setColumnData] = useState([]);

  useEffect(()=>{
    console.log(currentTab)
    if(currentTab == 'video'){
      let _data = [];
      (allCollectionData?.allCollections || []).map((coll)=>{
        _data = [
          ..._data,
          ...(coll?.contents || [])
        ];
      });

      setColumnData(_data);
    }else{
      switch (currentTab) {
        case "interview":
          setColumnData(allCollectionData?.randomExtendedInterview);
          break ;
        case "trailer":
          setColumnData(allCollectionData?.randomTrailer);
          break ;
        case "bts":
        default:
          setColumnData(allCollectionData?.randomBehindTheScene);
          break;
      }
    }
  }, [currentTab, allCollectionData]);

  const columns = [
    {
      name: "Videos",
      // selector: "video_name",
      sortable: true,
      width: "50%",

      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="py-5 pr-3">
            <img src={row.coverImage} alt={row.title} width="120" height="120" />
          </div>
          <div>
            <span style={{ marginLeft: "5px", fontWeight: "700" }}>
              {row.video_name}
            </span>
            <p style={{ marginLeft: "5px", fontSize: "12px" }}>{row.keyword}</p>
          </div>
        </div>
      ),
    },
    {
      name: "Upload Date",
      // selector: "createdAt",
      sortable: true,
      cell: (row) =>(
        moment(row.createdAt).calendar()
      )
    },
    // {
    //   name: "Views",
    //   selector: "views",
    //   sortable: true,
    // },
    // {
    //   name: "Comment",
    //   selector: "comment",
    //   sortable: true,
    // },
    {
      // selector: "iconOne",
      cell: (row) => (
        <button onClick={toggle} className="text-[#8991A0]">
          {/* {row.iconOne} */}
          <MdEdit size={20} />
        </button>
      ),
    },
    {
      // selector: "iconTwo",
      cell: (row)=> (
        <div onClick={()=>{
          (async()=>{
            let type = "content";
            switch (currentTab) {
              case "video":
                type = "content";
                break;
              case "interview":
                type = "extended_interview";
                break;
              case "trailer":
                type = "trailers";
                break;
                
              case "bts":
                type = "behind_the_scene";
                break;
            
              default:
                type = "content";
                break;
            }

            // let payload = {
            //   id: row.id,
            //   type
            // }

            try {
              await axiosClient().delete(`/admin/content?id=${row.id}&type=${type}`)
              toast.success("deleted, reflecting");
              dispatch(getAllCollectionDataAction());
              dispatch(getCollectionAction());
            } catch (error) {
              console.log(error);
              toast.error("an error occurred "+ error.message);
            }
          })();
        }}>
          <AiOutlineDelete size={20} />
        </div>
      )
    },
  ];
  return (
    <div className="table-container pt-20 relative">
      <div className="fixed right-5 mx-2 flex items-center gap-x-2 py-8 -top-2 border-6">
        <AiOutlineDelete />
        <p>delete</p>
        <Input
          icon={<BsSearch size="1rem" />}
          placeholder="Search"
          styles={{ input: inputStyles }}
        />
      </div>
      {currentTab}
      <div>
        <DataTable
          columns={columns}
          data={columnData}
          selectableRows
          pagination
          sortIcon={sortIcon}
          customStyles={customStyles}
        />
      </div>
      <VideoMetaModal isOpen={isOpen} onClose={toggle} />
    </div>
  );
};

export default MainVideo;
