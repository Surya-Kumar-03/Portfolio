import Sathyabama from "./Sathyabama";
import Sda from "./Sda";

function Education() {
  return (
    <div className="flex flex-col justify-center m-4">
      <h1 className="text-styling text-5xl m-4 animateHeading">Education: </h1>
      <h1 className="-mt-10 ml-4 mb-2">_________________________</h1>
      <Sathyabama></Sathyabama>
      <Sda></Sda>
    </div>
  );
}

export default Education;
