import { Link, useLocation } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";

const navData = [
  {
    id: 0,
    icon: <AiOutlineHome size={20} />,
    title: "Dashboard",
    path: "/",
  },
  {
    id: 1,
    icon: <MdOutlineVideoLibrary size={20} />,
    title: "Videos",
    path: "/video-screen", // Update with the actual path for Videos
  },

  {
    id: 2,
    icon: <FaRegComment size={20} />,
    title: "Comments",
    path: "/comments", // Update with the actual path for Comments
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="py-20 ">
      {navData.map(({ icon, title, id, path }) => (
        <Link to={path} key={id}>
          <div
            className={`flex items-center gap-x-4 px-4 py-2 mb-8 ${
              location.pathname === path ? "bg-red-500 rounded-r-full " : ""
            }`}
          >
            <div>{icon}</div>
            <p>{title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
