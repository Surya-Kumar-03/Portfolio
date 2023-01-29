import SdaImg from "../../assets/Sda.svg";
import { Icon } from "@iconify/react";

function Sda() {
  return (
    <div className="flex flex-col items-center sm:flex-row p-4 rounded-lg shadow-lg animateCards mb-5">
      <img
        src={SdaImg}
        className="rounded-full w-32 h-32"
        alt="Sda School"
      ></img>
      <div className="flex flex-col ml-6">
        <div className="flex flex-row items-center">
          <Icon
            icon="icon-park-outline:degree-hat"
            className="w-12 h-12 sm:h-10 sm:w-10 mr-2"
          />
          <h1 className="text-2xl sm:text-3xl">Higher Secondary Schooling</h1>
        </div>
        <div className="flex flex-row items-center">
          <Icon
            icon="fluent-mdl2:calendar-year"
            className="h-7 w-7 sm:h-9 sm:w-9 mr-3"
          />
          <p className="text-styling text-3xl">(2019 - 2020)</p>
        </div>
        <div className="flex flex-row items-center">
          <Icon icon="mdi:college" className="h-10 w-8 sm:h-11 sm:w-9 mr-2" />
          <p className="text-xl">Seventh-Day Adventist School</p>
        </div>
        <div className="flex flex-row items-center">
          <Icon
            icon="material-symbols:location-on-outline-rounded"
            className="h-8 w-8 -ml-1 mr-1 sm:mr-2"
          />
          <p className="text-xl">Hosur</p>
        </div>
      </div>
    </div>
  );
}

export default Sda;
