import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Layout;
