import { AiOutlineDelete } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { BsArrow90DegRight, BsSearch } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { smallAvatar } from "../../assets/svg";
import { Input } from "@mantine/core";
import CustomButton from "../../component/button";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import { getUsersAction } from "../../redux/actions/genericAction";
import { toast } from "react-toastify";

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
    content: "MichaelSeun1@gmail.com ",
    img: smallAvatar,
    date: "20 hours ago",
    text: "ChineduBrazil3",

    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,

    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 2,
    title: "Thophila Mary",
    content: "MichaelSeun1@gmail.com ",
    text: "ChineduBrazil3",
    img: smallAvatar,

    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,

    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 3,
    title: "Thophila Mary",
    content: "MichaelSeun1@gmail.com",
    text: "ChineduBrazil3",
    img: smallAvatar,

    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,

    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 4,
    title: "Thophila Mary",
    content: "MichaelSeun1@gmail.com ",
    text: "ChineduBrazil3",
    img: smallAvatar,

    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,

    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 5,
    title: "Thophila Mary",
    content: "MichaelSeun1@gmail.com ",
    text: "ChineduBrazil3",
    img: smallAvatar,

    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,

    iconTwo: <AiOutlineDelete size={16} />,
  },
  {
    id: 6,
    title: "Thophila Mary",
    content: "MichaelSeun1@gmail.com ",
    text: "ChineduBrazil3",
    img: smallAvatar,

    iconOne: <BsArrow90DegRight size={16} className="text-[#8991A0]" />,
    iconTwo: <AiOutlineDelete size={16} />,
  },
];

const Users = () => {

  const { allUsers } = useSelector(_ => _.genericSlice);
  const [Userdata, setUserData] = useState([]);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    if(search.length == 0){
      setUserData(allUsers);
    }else{
      let data = allUsers.filter(item => {
        return ( (item.first_name.toLowerCase().includes(search)) || (item.last_name.toLowerCase().includes(search)) );
      });

      setUserData(data);
    }
  }, [search]);

  useEffect(()=>{
    setUserData(allUsers);
  }, [allUsers])

  const columns = [
    {
      name: "Name",
      // selector: "title",
      sortable: true,

      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="p-1 border-4 border-red-500 rounded-full">
            <img src={row.photo} alt={row.first_name} className="w-4 h-4" />
          </div>
          <div>
            <span style={{ marginLeft: "5px" }}>{row.first_name} {row.last_name}</span>
          </div>
        </div>
      ),
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },

    // {
    //   selector: "iconOne",
    //   width: "5%",
    // },

    {
      // selector: "iconTwo",
      width: "5%",
      cell: (row) => (
        <div>
          <AiOutlineDelete onClick={()=>{
            (async()=>{
              await axiosClient().delete("/admin/users/"+row.id);
              
              dispatch(getUsersAction());
              toast.success("deleted successfully");
            })()
          }} size={20} />
        </div>
      )
    },
  ];

  return (
    <div className="mx-10 my-20 comment-table-container">
      <div className="px-4 pt-6 md:px-12">
        <h4 className="text-xl font-normal">Users</h4>
        <div className="flex items-center justify-between">
          <p className="text-[#AFAFAF]">All user are listed below</p>
          <div className="flex items-center gap-x-5">
            {
              ((selected.length > 0) && (
                <div style={{ cursor: 'pointer' }} onClick={()=> {
                  (async()=>{
                    for (let i = 0; i < selected.length; i++) {
                      const id = selected[i].id;
                      await axiosClient().delete("/admin/users/"+id);
                    }
                    
                    dispatch(getUsersAction());
                    toast.success("deleted successfully");
                  })()
                  }} className="flex items-center gap-x-1">
                    <AiOutlineDelete size={20} />
                    <p>delete</p>
                </div>
              ))
            }

            <Input
              icon={<BsSearch size="1rem" />}
              placeholder="Search"
              styles={{ input: inputStyles }}
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
            />
            {/* <NavLink to="/add-new-admin" className="flex items-center gap-x-2 bg-[#F52F00] py-3 px-4 rounded-full text-sm">
              <BsPlusLg />
              <CustomButton title="Add new Admin" />
            </NavLink> */}
          </div>
        </div>
      </div>

      <div className="absolute flex items-center py-8 mx-2 right-5 gap-x-2 -top-2 border-6 "></div>
      <div className="px-4 py-6">
        <DataTable
          columns={columns}
          data={Userdata}
          selectableRows
          pagination
          onSelectedRowsChange={({selectedRows})=>{
            setSelected(selectedRows);
          }}
          sortIcon={sortIcon}
          customStyles={customStyles}
        />
      </div>
      <h4 className="px-4 pb-4">
        Done? Go back to{" "}
        <Link to="/" className="font-bold underline text-[#F52F00]">
          Dashboard
        </Link>
      </h4>
    </div>
  );
};

export default Users;
