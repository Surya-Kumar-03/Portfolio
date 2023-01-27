import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import WorkIcon from "@mui/icons-material/LocalLibraryOutlined";
import School from "@mui/icons-material/SchoolOutlined";
import Interests from "@mui/icons-material/InterestsOutlined";
import Experience from "@mui/icons-material/WorkHistoryOutlined";
import Contact from "@mui/icons-material/ContactsOutlined";
import { Icon } from "@iconify/react";

function SideBar() {
  return (
    <div>
      <Link
        to="/"
        className="flex flex-col items-center w-screen sm:w-56 h-screen bg-gray-700"
      >
        <img src={logo} alt="logo" className="w-56"></img>
        <nav className="flex flex-col justify-center">
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            className="sidebar-option"
          >
            <HomeIcon
              className="sidebar-icon"
              style={{ fontSize: "1.9rem" }}
            ></HomeIcon>
            <h1 className="sidebar-text">Home</h1>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/experience"
            className="sidebar-option"
          >
            <Experience
              className="sidebar-icon"
              style={{ fontSize: "1.9rem" }}
            ></Experience>
            <h1 className="sidebar-text">Experience</h1>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/skills"
            className="sidebar-option"
          >
            <WorkIcon
              className="sidebar-icon"
              style={{ fontSize: "1.9rem" }}
            ></WorkIcon>
            <h1 className="sidebar-text">Skills</h1>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/education"
            className="sidebar-option"
          >
            <School
              className="sidebar-icon"
              style={{ fontSize: "1.9rem" }}
            ></School>
            <h1 className="sidebar-text">Education</h1>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/interests"
            className="sidebar-option"
          >
            <Interests
              className="sidebar-icon"
              style={{ fontSize: "1.9rem" }}
            ></Interests>
            <h1 className="sidebar-text">Interests</h1>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/contact_me"
            className="sidebar-option"
          >
            <Contact
              className="sidebar-icon"
              style={{ fontSize: "1.9rem" }}
            ></Contact>
            <h1 className="sidebar-text">Contact</h1>
          </NavLink>
        </nav>
        <div className="flex flex-row h-screen items-end ">
          <Link
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bandepalli-surya/",
                "_blank"
              )
            }
          >
            <Icon icon="mdi:linkedin" className="sidebar-profileIcon" />
          </Link>
          <Link
            onClick={() =>
              window.open("https://github.com/Surya-Kumar-03", "_blank")
            }
          >
            <Icon icon="carbon:logo-github" className="sidebar-profileIcon" />
          </Link>
          <Link
            onClick={() =>
              window.open("https://leetcode.com/bsuryakumar03/", "_blank")
            }
          >
            <Icon icon="cib:leetcode" className="sidebar-profileIcon" />
          </Link>
          <Link
            onClick={() =>
              window.open(
                "https://auth.geeksforgeeks.org/user/bsuryakumar03/practice/",
                "_blank"
              )
            }
          >
            <Icon
              icon="simple-icons:geeksforgeeks"
              className="sidebar-profileIcon"
            />
          </Link>
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
