import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const SkillsSphere = () => (
  <TagCloud
    options={(w) => ({
      radius: Math.min(500, w.innerWidth, w.innerHeight) / 2.2,
      maxSpeed: "normal",
      direction: "135",
    })}
    onClick={(tag, ev) => alert(tag)}
    onClickOptions={{ passive: true }}
    className="flex text-lg text-teal-600 bg-gradient-to-b from-yellow-100 
    md:rounded-full p-6 pt-0 md:pt-4 pb-0 m-2 md:shadow-xl animateFont-after"
  >
    {[
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap5",
      "Javascript ES6",
      "jQuery",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
    ]}
  </TagCloud>
);

export default SkillsSphere;
