import { manAvatar } from "../../assets/svg";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Menu, createStyles } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
  item: {
    "&[data-hovered]": {
      backgroundColor: theme.black,
      color: theme.white,
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  const authSelector = useSelector(_ => _.authenticationSlice);

  const adminData = (authSelector?.userData?.admin || {})

  return (
    <div className="absolute flex items-center py-2 mx-2 md:right-10 gap-x-2">
      {/* <div>
        <MdOutlineNotificationsNone size={30} />
      </div> */}
      <div className="bg-[#fff] rounded-full  flex items-center justify-center">
        <img src={manAvatar} alt="" className="w-10 h-10" />
      </div>
      <p>{adminData?.first_name} {adminData?.last_name}</p>
      <div>
        <Menu
          width={200}
          shadow="md"
          position="bottom"
          offset={5}
          classNames={classes}
          trigger="hover"
        >
          <Menu.Target>
            <MdKeyboardArrowDown size={30} />
          </Menu.Target>

          <Menu.Dropdown className="bg-[#161416] border-[#F52F0021] hover:bg-[#292729] hover:text-red-500">
            <NavLink to="/account-details">
              <Menu.Item className="border-b-[#F52F0021] border text-white ">
                Account Settings
              </Menu.Item>
            </NavLink>
            <NavLink to="/users">
              <Menu.Item className="text-white">Users</Menu.Item>
            </NavLink>
            <NavLink to="/logout">
              <Menu.Item onClick={()=>{
                localStorage.clear();
                window.location.href = "/sign-in";
              }} className="text-white">Logout</Menu.Item>
            </NavLink>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
