import CodingStats from "./CodingStats";
import SkillsSphere from "./skillsSphere";

function Skills() {
  // c cpp javascript python
  //Heroku google cloud cyclic render netlify
  // git github vscode
  return (
    <div className="flex flex-col flex-grow justify-center items-center m-4 overflow-hidden sm:ml-60">
      <h1 className="text-styling text-5xl m-4 animateSkillsHeading">
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
    </div>
  );
}

export default Skills;
