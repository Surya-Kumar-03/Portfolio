import CardEdu from "./CardEdu";
import SathyabamaImg from "../../assets/Sathyabama.webp";
import SdaImg from "../../assets/Sda.webp";
import CertificationCarousel from "./certifications";
import BackTop from "../../backTop";

function Education() {
  return (
    <div className="flex flex-col flex-grow min-h-screen h-auto justify-center items-center sm:ml-56">
      <h1 className="text-styling text-5xl m-4 animateHeading -z-10">
        Education:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <div className="lg:flex lg:flex-row">
        <CardEdu
          src={SathyabamaImg}
          alt="Sathyabama University"
          course="Bachelor's in Computer Science and Engineering"
          duration="(2020 - 2024)"
          location="Sathyabama University, Chennai."
        ></CardEdu>
        <CardEdu
          src={SdaImg}
          alt="SDA School"
          course="Elementary to Higher Secondary Education"
          duration="(2006 - 2020)"
          location="Seventh-Day Adventist School, Hosur."
        ></CardEdu>
      </div>
      <div className="flex flex-col justify-center items-center rounded-xl mt-4 mb-4 p-1 sm:p-4 bg-yellow-50 mx-5">
        <h1 className="text-3xl text-center animateSkillsHeading">
          Few of my <br></br>
          <span className="cardsSubtitleFont text-5xl text-pink-600 italic">
            Accolades
          </span>{" "}
          ..
        </h1>
        <CertificationCarousel></CertificationCarousel>
      </div>
      <BackTop>
        <button className="bg-white p-2 sm:hidden rounded-lg border cursor-pointer border-gray-500 shadow-md opacity-95 select-none">
          Back to Top
        </button>
      </BackTop>
    </div>
  );
}

export default Education;
