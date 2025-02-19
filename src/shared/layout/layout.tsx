import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Navbar />
    </>
  );
};

export default Layout;
