import { useState } from "react";
import SLetter from "../../assets/S.png";
import Logo from "../LogoHome";
import { NavLink } from "react-router-dom";

function Home() {
  const [sStatus, setsStatus] = useState(true);
  function handleChange() {
    setsStatus(false);
  }
  return (
    // Container
    <div className="flex flex-col sm:flex-row sm:w-screen h-[85vh] sm:h-screen justify-center sm:items-center sm:ml-60">
      <div className="home-container">
        {/* Text */}
        <p className="text-4xl m-2 text-styling animateFont-before">Hi, I'm</p>

        <h1 className="flex flex-row items-end mt-2 mb-2">
          <img
            src={SLetter}
            alt=""
            className="schar-style"
            onLoad={handleChange}
          ></img>
          <h1 className="-ml-3 text-5xl animateName">
            {sStatus ? "S" : null}urya
          </h1>
        </h1>
        <div className="flex flex-col items-center">
          <h1 className="text-styling text-4xl m-4 text-center animateFont-after">
            I utilize technology to solve problems.
          </h1>
          <h1 className="text-xl font-thin text-center animateFont-after px-3">
            Click around to discover more about me!{" "}
          </h1>
          <div className="flex flex-row justify-center gap-5 animateCardsProjects">
            <a href={process.env.REACT_APP_RESUME_LINK} target="__blank">
              <button
                className="w-40 mt-3 text-md bg-yellow-200 rounded-md placeholder:text-2xl p-3 
                shadow-md cursor-pointer hover:bg-teal-100 transition-all duration-1000"
              >
                View Resume
              </button>
            </a>
            <NavLink to="/contact_me">
              <button
                className="w-40 mt-3 text-md border-2 border-yellow-200 hover:border-teal-100 rounded-md placeholder:text-2xl p-3 
                shadow-md cursor-pointer hover:bg-teal-100 transition-all duration-1000"
              >
                Contact Me
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Logo></Logo>
    </div>
  );
}

export default Home;
