import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="sm:flex sm:flex-row">
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
