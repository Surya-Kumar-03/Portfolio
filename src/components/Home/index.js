import SLetter from "../../assets/S.png";

function Home() {
  return (
    // Container
    <div className="home-container">
      {/* Text */}
      <p className="text-4xl m-2 text-styling">Hi, I'm</p>
      <h1 className="flex flex-row items-end mt-2 mb-2">
        <img
          src={SLetter}
          alt="Software Engineer"
          className="schar-style"
        ></img>
        <h1 className="-ml-3 text-5xl">urya</h1>
      </h1>
      <div className="flex flex-col items-center">
        <h1 className="text-styling page-alignStyles">
          I utilise technology to solve problems.
        </h1>
        {/* <h2></h2> */}
      </div>
    </div>
  );
}

export default Home;
