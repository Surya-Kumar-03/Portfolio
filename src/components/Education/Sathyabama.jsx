import SathyabamaImg from "../../assets/Sathyabama.svg";
import { Icon } from "@iconify/react";

function Sathyabama() {
  return (
    <div className="flex flex-col items-center sm:flex-row p-4 rounded-lg shadow-lg animateCards mb-5">
      <img
        src={SathyabamaImg}
        className="rounded-full w-32 h-32"
        alt="Sda School"
      ></img>
      <div className="flex flex-col ml-6">
        <div className="flex flex-row items-center">
          <Icon
            icon="icon-park-outline:degree-hat"
            className="w-20 h-20 sm:h-10 sm:w-10 mr-2"
          />
          <h1 className="text-2xl sm:text-3xl">
            Bachelor's in Computer Science and Engineering
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <Icon
            icon="fluent-mdl2:calendar-year"
            className="h-7 w-7 sm:h-9 sm:w-9 mr-3"
          />
          <p className="text-styling text-3xl">(2020 - 2024)</p>
        </div>
        <div className="flex flex-row items-center">
          <Icon
            icon="mdi:college"
            className="h-10 w-8 sm:h-11 sm:w-9 mr-2"
          />
          <p className="text-xl">Sathyabama University</p>
        </div>
        <div className="flex flex-row items-center">
          <Icon
            icon="material-symbols:location-on-outline-rounded"
            className="h-8 w-9 sm:mr-2"
          />
          <p className="text-xl">Chennai</p>
        </div>
      </div>
    </div>
  );
}

export default Sathyabama;
