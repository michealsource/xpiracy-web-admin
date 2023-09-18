import { Outlet } from "react-router-dom";

import Sidebar from "../component/sidebar";
import Navbar from "../component/navigations/Navbar";
import { useEffect, useState } from "react";
import { getToken } from "../redux/storage";
import { useDispatch } from "react-redux";
import { statAction } from "../redux/actions/statAction";
import {
  getAllCollectionDataAction,
  getCollectionAction,
  getCommunityAction,
  getCommunityPeopleWatchingAction,
  getGenresAction,
  getPlacementAction,
  getUsersAction,
} from "../redux/actions/genericAction";
import { myProfileAction } from "../redux/actions/authenticationAction";
import { getSavedFireStore } from "../functions/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { setCommentsRecords } from "../redux/reducers/generic";

const AdminLayouts = () => {
  const dispatch = useDispatch();
  const [tmpUser, setTmpUser] = useState([]);

  useEffect(() => {
    if (!getToken()) {
      window.location.href = "/sign-in";
    } else {
      dispatch(statAction());
      dispatch(getGenresAction());
      dispatch(getPlacementAction());
      dispatch(getCollectionAction());
      dispatch(getAllCollectionDataAction());
      dispatch(getCommunityAction());
      dispatch(getCommunityPeopleWatchingAction());
      dispatch(getUsersAction());
      dispatch(myProfileAction());
    }
  }, []);

  // listen for comment
  useEffect(() => {
    (async () => {
      const db = getSavedFireStore();
      // const commentRef = collection(db, "comments");
      const usersRaw = await getDocs(collection(db, "users"));
      const users = [];
      usersRaw.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        users.push(doc.data());
      });
      setTmpUser(users);

      // console.log(`collection-${id}-movie-${id}`, "usersllll");
      const collRef = collection(
        db,
        "comments",
        `collection-${1}-movie-${1}`,
        "contents"
      );
      const q = query(collRef, orderBy("dateCommented"));
      onSnapshot(q, (docs) => {
        // console.log("usersllll");
        // console.log(docs.size, "usersllll");
        // return ;
        let tmp = [];
        docs.forEach((doc) => {
          let comment = doc.data();

          tmp.push({
            ...comment,
            commentId: doc.id,
            user: users.find((v) => v.id == comment.userId),
          });
        });

        // console.log(tmp, "usersllll");
        // setCommentList(tmp);
        dispatch(
          setCommentsRecords({
            users: tmpUser.length > 0 ? tmpUser : users,
            comments: tmp,
          })
        );
      });
    })();
  }, []);

  return (
    <>
      <div className="bg-[#151515] text-[#fff] flex items-start gap-x-20 w-full min-h-[100vh] h-auto py-4 pr-4">
        <Sidebar />
        <div className="w-full bg-center bg-no-repeat bg-cover bg-dsh-bg rounded-2xl ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayouts;
