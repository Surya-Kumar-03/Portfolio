import Portfolio from "./portfolio";
import QuickQuizizz from "./quickQuizizz";
import SpaceShip from "./spaceShip";
import Steganography from "./steganography";
import NotesApp from "./notesapp";
import PropertyMan from "./propertyMan";
import EventsSathyabama from "./events";

function Projects() {
  return (
    <div className="flex flex-col flex-grow h-auto w-screen justify-center items-center sm:ml-56">
      <h1 className="text-styling text-5xl m-4 mt-4 animateSkillsHeading">
        Projects:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <div className="flex flex-col gap-3 mt-3 mb-3 lg:flex lg:flex-row">
        <EventsSathyabama></EventsSathyabama>
        <Portfolio></Portfolio>
      </div>
      <div className="flex flex-col gap-3 mb-3 lg:flex lg:flex-row">
        <QuickQuizizz></QuickQuizizz>
        <PropertyMan></PropertyMan>
      </div>
      <div className="flex flex-col gap-3 lg:flex lg:flex-row mb-3">
        <SpaceShip></SpaceShip>
        <Steganography></Steganography>
      </div>
      <div className="flex flex-col gap-3 lg:flex lg:flex-row mb-6">
        <NotesApp></NotesApp>
      </div>
    </div>
  );
}

export default Projects;
