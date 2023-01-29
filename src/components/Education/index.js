import College from "./College";
import School from "./School";

function Education() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center z-[-1] overflow-hidden">
      <h1 className="text-styling text-5xl m-4 animateHeading">Education: </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <div className="sm:flex sm:flex-row">
        <College></College>
        <School></School>
      </div>
    </div>
  );
}

export default Education;
