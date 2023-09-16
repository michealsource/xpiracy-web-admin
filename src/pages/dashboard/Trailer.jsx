import { Input } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { JesusTwo } from "../../assets/png";
import { MdEdit } from "react-icons/md";
import { BsArrowDownShort } from "react-icons/bs";
import VideoMetaModal from "../../component/Modal/VideoMetaModal";
import { useDisclosure } from "@mantine/hooks";

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
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      background: "#272428",
      backdropFilter: "blur(20px)",
      color: "white",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
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
    img: JesusTwo,
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
    img: JesusTwo,
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
    img: JesusTwo,
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
    img: JesusTwo,
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
    img: JesusTwo,
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
    img: JesusTwo,
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

const Trailer = ({allCollectionData}) => {
  const [isOpen, { toggle }] = useDisclosure();
  const columns = [
    {
      name: "Videos",
      selector: "title",
      width: "50%",
      sortable: true,

      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="py-5 pr-3">
            <img src={row.img} alt={row.title} width="120" height="120" />
          </div>
          <div>
            <span style={{ marginLeft: "5px", fontWeight: "700" }}>
              {row.title}
            </span>
            <p style={{ marginLeft: "5px", fontSize: "12px" }}>{row.content}</p>
          </div>
        </div>
      ),
    },
    {
      name: "Upload Date",
      selector: "year",
      sortable: true,
    },
    {
      name: "Views",
      selector: "views",
      sortable: true,
    },
    {
      name: "Comment",
      selector: "comment",
      sortable: true,
    },
    {
      selector: "iconOne",
      cell: (row) => (
        <button onClick={toggle} className="text-[#8991A0]">
          {row.iconOne}
        </button>
      ),
    },
    {
      selector: "iconTwo",
    },
  ];

  return (
    <div className="table-container pt-20 cp-admin-container">
      <div className="absolute right-5 mx-2 flex items-center gap-x-2 py-8 -top-2 border-6 ">
        <AiOutlineDelete />
        <p>delete</p>
        <Input
          icon={<BsSearch size="1rem" />}
          placeholder="Search"
          styles={{ input: inputStyles }}
        />
      </div>
      <div>
        <DataTable
          columns={columns}
          data={data}
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

export default Trailer;
