import CodingStats from "./CodingStats";
import PLanguages from "./PLanguages";
import SkillsSphere from "./skillsSphere";
import CloudPlatforms from "./CloudPlatforms";
import DevTools from "./DevTools";
import BackTop from "../../backTop";

function Skills() {
  return (
    <div
      id="back-to-top-anchor"
      className="flex flex-col flex-grow justify-center items-center m-4 overflow-hidden sm:ml-60"
    >
      <h1 className="text-styling text-5xl m-4 mt-0 animateSkillsHeading">
        Skills:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <h1 className="text-3xl text-center animateFont-after">
        My{" "}
        <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
          Websites
        </span>{" "}
        are usually a bundle of..
      </h1>
      <SkillsSphere></SkillsSphere>
      <CodingStats></CodingStats>
      <div className="flex flex-col w-full bg-teal-50 my-2 rounded-xl p-3 shadow-md">
        <div className="flex flex-col w-full mr-2 bg-yellow-100 rounded-xl p-2">
          <h1 className="text-3xl text-center animateFont-after">
            I can
            <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
              code
            </span>{" "}
            in..
          </h1>
          <PLanguages></PLanguages>
        </div>
        <div className="flex flex-col w-full mt-2 mr-2 bg-red-100 rounded-xl p-2">
          <h1 className="text-3xl text-center animateFont-after">
            <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
              Cloud platforms 
            </span>{" "}
            I am familiar with..
          </h1>
          <CloudPlatforms></CloudPlatforms>
        </div>
        <div className="flex flex-col w-full mt-2 mr-2 bg-orange-100 rounded-xl p-2">
          <h1 className="text-3xl text-center animateFont-after">
            <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
              Developer tools
            </span>{" "}
            I use..
          </h1>
          <DevTools></DevTools>
        </div>
      </div>
      <BackTop>
        <button className="bg-white p-2 sm:hidden rounded-lg border cursor-pointer border-gray-500 shadow-md opacity-95 select-none">
          Back to Top
        </button>
      </BackTop>
    </div>
  );
}

export default Skills;
