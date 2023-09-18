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
import {
  getAllCollectionDataAction,
  getCollectionAction,
} from "../../redux/actions/genericAction";
import ConfirmationModal from "../../component/Modal/ConfirmationModal";

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

const MainVideo = ({ allCollectionData, currentTab }) => {
  const [isOpen, { toggle }] = useDisclosure();
  const dispatch = useDispatch();
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState([]);
  const [search, setsearch] = useState("");
  const [selectedRaw, setSelectedRaw] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const [columnData, setColumnData] = useState([]);
  const [selectedMainVideo, setSelectedMainVideo] = useState("");

  useEffect(() => {
    console.log("reached 0", search);
    if (search.length == 0) {
      setColumnData(selectedRaw);
    } else {
      console.log("reached 1", search);
      const data = selectedRaw.filter((item) => {
        return (
          item.video_name.toLowerCase().includes(search.toLowerCase()) ||
          item.keyword.toLowerCase().includes(search.toLowerCase())
        );
      });

      setColumnData(data);
    }
  }, [search, currentTab, allCollectionData]);

  useEffect(() => {
    console.log(currentTab);
    if (currentTab == "video") {
      let _data = [];
      (allCollectionData?.allCollections || []).map((coll) => {
        _data = [..._data, ...(coll?.contents || [])];
      });

      setColumnData(_data);
      setSelectedRaw(_data);
    } else {
      switch (currentTab) {
        case "interview":
          setColumnData(allCollectionData?.randomExtendedInterview);
          setSelectedRaw(allCollectionData?.randomExtendedInterview);
          break;
        case "trailer":
          setColumnData(allCollectionData?.randomTrailer);
          setSelectedRaw(allCollectionData?.randomTrailer);
          break;
        case "bts":
        default:
          setColumnData(allCollectionData?.randomBehindTheScene);
          setSelectedRaw(allCollectionData?.randomBehindTheScene);
          break;
      }
    }
  }, [currentTab, allCollectionData]);
  const openConfirmationModal = () => {
    setSelectedMainVideo();
    open();
    return;
  };
  const columns = [
    {
      name: "Videos",
      // selector: "video_name",
      sortable: true,
      width: "50%",

      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="py-5 pr-3">
            <img
              src={row.coverImage}
              alt={row.title}
              width="120"
              height="120"
            />
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
      cell: (row) => moment(row.createdAt).calendar(),
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
        <button
          onClick={() => {
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

            setEditingItem({ ...row, type: type });
            toggle();
          }}
          className="text-[#8991A0]"
        >
          {/* {row.iconOne} */}
          <MdEdit size={20} />
        </button>
      ),
    },
    {
      // selector: "iconTwo",
      cell: (row) => (
        <div
          onClick={() => {
            (async () => {
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
                await axiosClient().delete(
                  `/admin/content?id=${row.id}&type=${type}`
                );
                toast.success("deleted, reflecting");
                dispatch(getAllCollectionDataAction());
                dispatch(getCollectionAction());
              } catch (error) {
                console.log(error);
                toast.error("an error occurred " + error.message);
              }
            })();
          }}
        >
          <AiOutlineDelete size={20} onClick={openConfirmationModal} />
        </div>
      ),
    },
  ];
  return (
    <div className="relative pt-20 table-container">
      <div className="fixed flex items-center py-8 mx-2 right-5 gap-x-2 -top-2 border-6">
        {selected.length > 0 && (
          <div
            onClick={() => {
              (async () => {
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

                let payload = {
                  ids: selected.map((item) => item.id),
                  type,
                };

                try {
                  await axiosClient().post(
                    `/admin/content/bulkDelete`,
                    payload
                  );
                  toast.success("deleted, reflecting");
                  dispatch(getAllCollectionDataAction());
                  dispatch(getCollectionAction());
                } catch (error) {
                  console.log(error);
                  toast.error("an error occurred " + error.message);
                }
              })();
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
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      {currentTab}
      <div>
        <DataTable
          columns={columns}
          data={columnData}
          selectableRows
          onSelectedRowsChange={({
            allSelected,
            selectedCount,
            selectedRows,
          }) => {
            console.log(selectedRows);
            setSelected(selectedRows);
          }}
          pagination
          sortIcon={sortIcon}
          customStyles={customStyles}
        />
      </div>

      <VideoMetaModal
        editingItem={editingItem}
        isOpen={isOpen}
        onClose={toggle}
      />
      {opened && <ConfirmationModal isOpen={opened} onClose={close} />}
    </div>
  );
};

export default MainVideo;
