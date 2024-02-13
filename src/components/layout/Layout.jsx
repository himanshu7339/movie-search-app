import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="layout ">
      <Header />
      <div className="sidebar-content grid grid-cols-[300px_minmax(900px,_1fr)] ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
