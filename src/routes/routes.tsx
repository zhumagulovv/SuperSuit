import { useRoutes } from "react-router-dom";
import Home from "../components/home/home";
import Layout from "../shared/layout/layout";

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
      ],
    },
  ]);
};

export default MyRoutes;
