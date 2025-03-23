import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import Layout from "../shared/layout/layout";

const Home = lazy(() => import("../components/home/home"));
const ViewProduct = lazy(() => import("../components/viewProduct/index"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/index"));

const MyRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <ViewProduct />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
};

export default MyRoutes;
