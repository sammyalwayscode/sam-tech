import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import MainPageLayout from "../layout/MainPageLayout";
import HomePage from "../pages/HomePage";
import NewPostPage from "../pages/NewPostPage";
import AllUsers from "../api/AllUsers";

export const mainRoute = createBrowserRouter([
  {
    element: <Welcome />,
    path: "/",
  },

  {
    element: <MainPageLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/newpost",
        element: <NewPostPage />,
      },
      {
        path: "/userapi",
        element: <AllUsers />,
      },
    ],
  },
]);
