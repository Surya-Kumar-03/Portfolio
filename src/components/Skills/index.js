import SkillsSphere from "./skillsSphere";

function Skills() {
  // c cpp javascript python
  //Heroku google cloud cyclic render netlify
  // git github vscode
  return (
    <div className="flex flex-col flex-grow justify-center items-center z-[-1] m-4 overflow-hidden">
      <h1 className="text-styling text-5xl m-4 animateHeading">Skills: </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <h1 className="text-3xl text-center">My Websites are usually a bundle of..</h1>
      <SkillsSphere></SkillsSphere>
    </div>
  );
}

export default Skills;
