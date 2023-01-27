import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Layout;
