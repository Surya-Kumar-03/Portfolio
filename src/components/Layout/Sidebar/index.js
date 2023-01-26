import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import WorkIcon from "@mui/icons-material/LocalLibraryOutlined";
import School from "@mui/icons-material/SchoolOutlined";
import Interests from "@mui/icons-material/InterestsOutlined";
import Experience from "@mui/icons-material/WorkHistoryOutlined";
import Contact from "@mui/icons-material/ContactsOutlined";

function SideBar() {
  return (
    <div>
      <Link
        to="/"
        className="flex flex-col items-center w-screen sm:w-56 h-screen bg-gray-700"
      >
        <img src={logo} alt="logo" className="w-56"></img>
        <nav className="flex flex-col justify-center">
          <NavLink exact="true" activeclassname="active" to="/" className="sidebar-option">
            <HomeIcon
              className="sidebar-icon"
              style={{ fontSize: "2.5rem" }}
            ></HomeIcon>
            <h1>Home</h1>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/experience" className="sidebar-option">
            <Experience
              className="sidebar-icon"
              style={{ fontSize: "2.5rem" }}
            ></Experience>
            <h1>Experience</h1>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/skills" className="sidebar-option">
            <WorkIcon
              className="sidebar-icon"
              style={{ fontSize: "2.5rem" }}
            ></WorkIcon>
            <h1>Skills</h1>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/education" className="sidebar-option">
            <School
              className="sidebar-icon"
              style={{ fontSize: "2.5rem" }}
            ></School>
            <h1>Education</h1>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/interests" className="sidebar-option">
            <Interests
              className="sidebar-icon"
              style={{ fontSize: "2.5rem" }}
            ></Interests>
            <h1>Interests</h1>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contact" className="sidebar-option">
            <Contact
              className="sidebar-icon"
              style={{ fontSize: "2.5rem" }}
            ></Contact>
            <h1>Contact</h1>
          </NavLink>
        </nav>
      </Link>
    </div>
  );
}

export default SideBar;
