import { createBrowserRouter } from "react-router-dom";

import SignIn from "../auth/SignIn";
import ErrorPage from "../pages/ErrorPage";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import NotFound from "../pages/NotFound";
import AdminLayouts from "../layout";
import Videos from "../pages/dashboard/VideosScreen";
import ForgotPassword from "../auth/ForgotPassword";
import Comment from "../pages/dashboard/comments/Comments";
import AccountDetails from "../pages/settings/AccountDetails";

import EditDetails from "../pages/settings/EditDetails";
import ChangePassword from "../pages/settings/ChangePassword";
import Users from "../pages/settings/Users";
import AddNewAdmin from "../pages/settings/AddNewAdmin";
import Logout from "../auth/Logout";
import VideoMetaModal from "../component/Modal/VideoMetaModal";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    hasErrorBoundary: true,
    children: [
      { element: <SignIn />, path: "/sign-in" },
      { element: <ForgotPassword />, path: "/forgot-password" },

      {
        element: <AdminLayouts />,
        children: [
          { index: true, element: <AdminDashboard />, path: "/" },
          { element: <Logout />, path: "/logout" },
          { element: <Videos />, path: "/video-screen" },
          { element: <Comment />, path: "/comments" },
          { element: <AccountDetails />, path: "/account-details" },
          { element: <EditDetails />, path: "/edit-details" },
          { element: <ChangePassword />, path: "/change-password" },
          { element: <Users />, path: "/users" },
          { element: <AddNewAdmin />, path: "/add-new-admin" },
          { element: <VideoMetaModal />, path: "/upload-video" },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
