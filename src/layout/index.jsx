import { Outlet } from "react-router-dom";

import Sidebar from "../component/sidebar";
import Navbar from "../component/navigations/Navbar";
import { useEffect, useState } from "react";
import { getToken } from "../redux/storage";
import { useDispatch } from "react-redux";
import { statAction } from "../redux/actions/statAction";
import { getAllCollectionDataAction, getCollectionAction, getCommunityAction, getCommunityPeopleWatchingAction, getGenresAction, getPlacementAction } from "../redux/actions/genericAction";

const AdminLayouts = () => {
  const dispatch = useDispatch();

    useEffect(()=>{
      if(!getToken()){
        window.location.href = "/sign-in";
      }else{
        dispatch(statAction());
        dispatch(getGenresAction());
        dispatch(getPlacementAction());
        dispatch(getCollectionAction());
        dispatch(getAllCollectionDataAction());
        dispatch(getCommunityAction());
        dispatch(getCommunityPeopleWatchingAction());
      }
    }, [])

    return (
    <>
      <div className="bg-[#151515] text-[#fff] flex items-start gap-x-20 w-full h-auto  py-4 pr-4 ">
        <Sidebar />
        <div className="w-full bg-dsh-bg bg-center bg-no-repeat bg-cover rounded-2xl  ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  )
};

export default AdminLayouts;
