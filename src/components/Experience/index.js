import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Amazon from "../../assets/Amazon.webp";
import Zoho from "../../assets/Zoho.webp";
import Arcon from "../../assets/ARCON-Privileged-Access-Management-Product-Brochure_Page_01.jpg";
import ImageLoader from "../Loader/loader";

const experienceData = [
  {
    id: 1,
    src: Amazon,
    alt: "Amazon",
    title: "SDE 1 @Amazon",
    duration: "Jun 2025 - Present",
    subheader: "Chennai, India - Onsite",
    description:
      "Currently working with the Books Purchase and Payments Experience team, where I focus on improving the user experience for eBook and Kindle purchases, as well as optimizing payment processes.",
  },
  {
    id: 2,
    src: Zoho,
    alt: "Zoho",
    title: "MTS @Zoho",
    duration: "Feb 2024 - Jun 2025 (1 yr 5 mos)",
    subheader: "Chennai, India - Onsite",
    description:
      "Worked on Network Packet Sensor for high-performance packet processing, NetFlow Analyzer for bandwidth monitoring, and Network Detection and Response (NDR) solutions to enhance network security.",
  },
  {
    id: 3,
    src: Arcon,
    alt: "Arcon",
    title: "SDE Intern @Arcon",
    duration: "Jun 2023 - Dec 2023 (6 mos)",
    subheader: "Mumbai, India - Remote",
    description:
      "Worked on Privileged Access Management (PAM), Infinite Canvas Workflow Editors, and implemented both Two-Factor Authentication (2FA) and Adaptive Multi-Factor Authentication (MFA) solutions.",
  },
];

export default function Experience() {
  return (
    <div
      id="back-to-top-anchor"
      className="flex flex-col flex-grow justify-center items-center m-4 overflow-hidden sm:ml-[15rem]"
    >
      <h1 className="text-styling text-5xl m-4 mt-0 animateSkillsHeading">
        Experience:
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <Parallax />
    </div>
  );
}

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, src, alt, title, duration, subheader, description }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="-mt-32 lg:-mt-10 h-screen w-full snap-center flex justify-center items-center relative animateFont-after">
      <div
        ref={ref}
        className="bg-gray-100 overflow-hidden rounded-lg lg:shadow-black lg:shadow-2xl"
      >
        <ImageLoader
          src={src}
          alt={alt}
          className="w-[22rem] h-[16rem] lg:w-[48rem] lg:h-[28rem] object-cover"
        ></ImageLoader>
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="text-white bg-[#374151] shadow-black shadow-2xl bg-opacity-95 rounded-lg p-6 lg:w-[28rem] m-0 absolute xs:top-1/4 sm:top-2/4 lg:top-1/4 left-[calc(10%)] lg:left-[calc(40%+7.5rem)] -translate-y-1/2 scroll-smooth"
      >
        <span className="text-xl lg:text-4xl">{title}</span>
        <br />
        <span className="text-md lg:text-lg text-2">{subheader}</span>
        <br />
        <span className="text-[#ffd700] text-[0.85rem] lg:text-[1.25rem]">
          {duration}
        </span>
        <br />
        <span className="text-sm font-thin">{description}</span>
      </motion.h2>
    </section>
  );
}

export function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <div id="example" className="w-full h-full snap-y snap-mandatory">
      {experienceData.map((data) => (
        <Image
          key={data.id}
          id={data.id}
          src={data.src}
          alt={data.alt}
          title={data.title}
          duration={data.duration}
          subheader={data.subheader}
          description={data.description}
        />
      ))}
      <motion.div
        className="fixed left-0 right-0 top-0 h-2 shadow-2xl bg-[#ffd700] origin-left"
        style={{ scaleX }}
      />
      <div className="fixed left-1/2 top-40 transform -translate-x-1/2 h-screen w-px bg-gray-300 lg:bg-gray-400 -z-10"></div>
    </div>
  );
}
