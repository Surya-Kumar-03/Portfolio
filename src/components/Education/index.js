import College from "./College";
import School from "./School";
import CertificationCarousel from "./certifications";
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
      <div className="flex flex-col justify-center items-center rounded-xl mt-4 mb-4 p-4 bg-yellow-50 mx-5">
        <h1 className="text-3xl text-center animateSkillsHeading">
          Few of my{" "}
          <br></br>
          <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
            Certifications
          </span>{" "}
          ..
        </h1>
        <CertificationCarousel></CertificationCarousel>
      </div>
    </div>
  );
}

export default Education;
