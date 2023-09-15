import { Outlet } from "react-router-dom";

import Sidebar from "../component/sidebar";
import Navbar from "../component/navigations/Navbar";

const AdminLayouts = () => (
  <>
    <div className="bg-[#151515] text-[#fff] flex items-start gap-x-20 w-full h-auto  py-4 pr-4 ">
      <Sidebar />
      <div className="w-full bg-dsh-bg bg-center bg-no-repeat bg-cover rounded-2xl  ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  </>
);

export default AdminLayouts;
