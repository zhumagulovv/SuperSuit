import { useRoutes } from "react-router-dom";
import Home from "../components/home/home";
import Layout from "../shared/layout/layout";
import ViewProduct from "../components/viewProduct";

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
      ],
    },
  ]);
};

export default MyRoutes;
