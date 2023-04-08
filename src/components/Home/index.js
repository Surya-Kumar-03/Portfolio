import { useState } from "react";
import SLetter from "../../assets/S.png";
import Logo from "../LogoHome";

function Home() {
  const [sStatus, setsStatus] = useState(true);
  function handleChange() {
    setsStatus(false);
  }
  return (
    // Container
    <div className="flex flex-col sm:flex-row sm:w-screen h-[85vh] sm:h-screen justify-center sm:items-center sm:ml-56">
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
          <h1 className="text-xl font-thin text-center animateFont-after">
            Hover around to discover more about me!{" "}
          </h1>
        </div>
      </div>
      <Logo></Logo>
    </div>
  );
}

export default Home;
