import CodingStats from "./CodingStats";
import PLanguages from "./PLanguages";
import SkillsSphere from "./skillsSphere";
import CloudPlatforms from "./CloudPlatforms";
import DevTools from "./DevTools";

function Skills() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center m-4 overflow-hidden sm:ml-60">
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
        <h1 className="text-3xl text-center animateFont-after">
          I can
          <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
            code
          </span>{" "}
          in..
        </h1>
        <PLanguages></PLanguages>
        <h1 className="text-3xl text-center animateFont-after mt-4">
          <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
            Cloud platforms
          </span>{" "}
          I am familiar with..
        </h1>
        <CloudPlatforms></CloudPlatforms>
        <h1 className="text-3xl text-center animateFont-after mt-4">
          <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
            Developer tools
          </span>{" "}
          I use..
        </h1>
        <DevTools></DevTools>
      </div>
    </div>
  );
}

export default Skills;
