import Portfolio from "./portfolio";
import QuickQuizizz from "./quickQuizizz";
import SpaceShip from "./spaceShip";
import Steganography from "./steganography";
import NotesApp from "./notesapp";

function Projects() {
  return (
    <div className="flex flex-col flex-grow h-auto w-screen justify-center items-center sm:ml-56">
      <h1 className="text-styling text-5xl m-4 mt-4 animateSkillsHeading">
        Projects:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <div className="flex flex-col lg:flex lg:flex-row">
        <Portfolio></Portfolio>
        <SpaceShip></SpaceShip>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row">
        <QuickQuizizz></QuickQuizizz>
        <Steganography></Steganography>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row mb-6">
        <NotesApp></NotesApp>
      </div>
    </div>
  );
}

export default Projects;
