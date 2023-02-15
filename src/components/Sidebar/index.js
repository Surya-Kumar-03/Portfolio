import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import ImageLoader from "../Loader/loader";
import { useLocation } from "react-router-dom";

function SideBar() {
  //Check whether the device is Mobile or not
  const [width, setWidth] = useState(window.innerWidth);

  //Location
  const location = useLocation();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    if (location.pathname === "/") {
      setPageNo(1);
    } else if (location.pathname === "/skills") {
      setPageNo(2);
    } else if (location.pathname === "/projects") {
      setPageNo(3);
    } else if (location.pathname === "/education") {
      setPageNo(4);
    } else if (location.pathname === "/contact_me") {
      setPageNo(5);
    }
  }, [location]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const showSidebar = width <= 640; //output

  // Bool to check whether Navbar Open or Closed
  const [navbarOpen, setNavbarOpen] = useState(!showSidebar);
  function handleChange() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <div>
      <div
        to="/"
        className="flex flex-col items-center pb-4 sm:pb-2 w-screen sm:w-56 h-auto sm:h-screen bg-gray-700 sm:fixed z-10"
      >
        <div className="flex flex-row w-full items-center justify-start">
          <Icon
            onClick={handleChange}
            className="text-white h-9 w-9 rounded-md ml-3 sm:hidden animateHamburger"
            icon="quill:hamburger"
          />
          <div className="flex flex-row flex-grow justify-center items-center">
            <ImageLoader
              className="flex justify-center items-center w-16 mr-8 sm:mr-0 sm:w-56 h-[64px] sm:h-[224px] text-[#cdd5db] 
              text-2xl font-thin"
              src={logo}
              alt="logo"
            ></ImageLoader>
            {/* <img
              src={logo}
              alt="logo"
              className="w-16 mr-8 sm:mr-0 sm:w-56"
            ></img> */}
          </div>
        </div>
        <nav className="flex flex-col justify-center ml-11 sm:ml-0">
          {navbarOpen ? (
            <>
              <NavLink
                exact="true"
                activeclassname="active"
                to="/"
                className={
                  pageNo === 1
                    ? "sidebar-optionSelected sidebar-option"
                    : "sidebar-option"
                }
                onClick={navbarOpen && showSidebar ? handleChange : null}
              >
                <Icon
                  icon="material-symbols:home-app-logo"
                  color="#cfd5db"
                  width="30"
                  height="30"
                  className="sidebar-icon"
                />
                <h1 className="sidebar-text">Home</h1>
              </NavLink>
              <NavLink
                exact="true"
                activeclassname="active"
                to="/skills"
                className={
                  pageNo === 2
                    ? "sidebar-optionSelected sidebar-option"
                    : "sidebar-option"
                }
                onClick={navbarOpen && showSidebar ? handleChange : null}
              >
                <Icon
                  icon="icon-park-outline:brain"
                  color="#cfd5db"
                  width="30"
                  height="30"
                  className="sidebar-icon"
                />
                <h1 className="sidebar-text">Skills</h1>
              </NavLink>
              <NavLink
                exact="true"
                activeclassname="active"
                to="/projects"
                className={
                  pageNo === 3
                    ? "sidebar-optionSelected sidebar-option"
                    : "sidebar-option"
                }
                onClick={navbarOpen && showSidebar ? handleChange : null}
              >
                <Icon
                  icon="eos-icons:project-outlined"
                  color="#cfd5db"
                  width="30"
                  height="30"
                  className="sidebar-icon"
                />
                <h1 className="sidebar-text">Projects</h1>
              </NavLink>
              <NavLink
                exact="true"
                activeclassname="active"
                to="/education"
                className={
                  pageNo === 4
                    ? "sidebar-optionSelected sidebar-option"
                    : "sidebar-option"
                }
                onClick={navbarOpen && showSidebar ? handleChange : null}
              >
                <Icon
                  icon="fluent-mdl2:education"
                  color="#cfd5db"
                  width="30"
                  height="30"
                  className="sidebar-icon"
                />
                <h1 className="sidebar-text">Education</h1>
              </NavLink>
              {/* <NavLink
                exact="true"
                activeclassname="active"
                to="/interests"
                className="sidebar-option"
                onClick={navbarOpen && showSidebar ? handleChange : null}
              >
                <Icon
                  icon="material-symbols:interests-outline"
                  color="#cfd5db"
                  width="30"
                  height="30"
                  className="sidebar-icon"
                />
                <h1 className="sidebar-text">Interests</h1>
              </NavLink> */}
              <NavLink
                exact="true"
                activeclassname="active"
                to="/contact_me"
                className={
                  pageNo === 5
                    ? "sidebar-optionSelected sidebar-option"
                    : "sidebar-option"
                }
                onClick={navbarOpen && showSidebar ? handleChange : null}
              >
                <Icon
                  icon="material-symbols:contact-mail-rounded"
                  color="#cfd5db"
                  width="30"
                  height="30"
                  className="sidebar-icon"
                />
                <h1 className="sidebar-text">Contact</h1>
              </NavLink>
            </>
          ) : null}
        </nav>
        <div className="flex flex-row h-max sm:h-screen items-start sm:items-end ">
          {navbarOpen ? (
            <>
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
                <Icon
                  icon="carbon:logo-github"
                  className="sidebar-profileIcon"
                />
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
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
