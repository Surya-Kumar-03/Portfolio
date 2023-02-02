import College from "./College";
import School from "./School";

function Education() {
  return (
    <div className="flex flex-col flex-grow min-h-screen h-auto justify-center items-center sm:ml-56">
      <h1 className="text-styling text-5xl m-4 animateHeading -z-10">
        Education:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <div className="lg:flex lg:flex-row">
        <College></College>
        <School></School>
      </div>
    </div>
  );
}

export default Education;
