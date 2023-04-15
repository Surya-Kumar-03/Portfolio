import quickQuizizz from "../../assets/quickquizizz.webp";
import events from "../../assets/events.webp";
import portfolio from "../../assets/portfolio.webp";
import property from "../../assets/property.webp";
import spaceShip from "../../assets/spaceShip.webp";
import steganography from "../../assets/steganography.webp";
import notesApp from "../../assets/notesApp.webp";
import CardProj from "./CardProj";
import BackTop from "../../backTop";

const projects = [
  {
    title: "Events@Sathyabama",
    subheader:
      "A Event Management System to effortlessly manage all college events.",
    src: events,
    tech: "HTML5, CSS3, Material UI, Tailwind CSS, NextJS, ReactJS, Django, Django REST Framework, MySQL",
  },
  {
    title: "Personal Portfolio",
    subheader: "The website you are currently on!",
    src: portfolio,
    tech: "HTML5, CSS3, Tailwind CSS, ReactJS, Material UI, Npm & sub-libraries, Netlify",
  },
  {
    title: "Quick-Quizizz",
    subheader: "A responsive online web-based quiz-app with timer.",
    src: quickQuizizz,
    tech: "HTML5, CSS3, Bootstrap 5, Vanilla JS ES6, NodeJS, ExpressJS, MongoDB, Mongoose, Cyclic",
    github: "https://github.com/Surya-Kumar-03/Quick-Quizizz",
    live: "https://lazy-erin-seahorse-tux.cyclic.app/",
    description:
      "A responsive and user-friendly full-stack quiz web app for students to assess themselves and gain knowledge. Teachers can add, change or delete questions as needed (CRUD Operations) and view students’ results.",
  },
  {
    title: "Property Booking System",
    subheader:
      "This project was developed for a hackathon within a time frame of 6 hours.",
    src: property,
    tech: "ReactJS, Tailwind CSS, Material UI, HTML5, CSS3, Django, Django REST Framework, MySQL",
    github: "https://github.com/Surya-Kumar-03/Property-Booking-System",
    live: "https://hotel-rental.onrender.com/login",
    description:
      "A responsive full-stack property booking system, aimed at simplifying the tedious process of finding accommodations.",
  },
  {
    title: "Space-Ship Model",
    subheader:
      "A cross-domain (Web-ML) application that predicts an astronaut's survival rate.",
    src: spaceShip,
    tech: "ReactJS, HTML5, CSS3, Material UI, Bootstrap, NodeJS, ExpressJS, Netlify",
    github: "https://github.com/Surya-Kumar-03/Space-Ship-Model",
    live: "https://space-ship-model.netlify.app/",
    description:
      "A cross-domain (Web-ML) application that makes appropriate predictions for an astronaut's survival by passing necessary parameters. It was a sarcastic project made for a hypothetical situation.",
  },
  {
    title: "Steganography Implementation",
    subheader: "A basic implementation of the idea of steganography.",
    src: steganography,
    tech: "HTML5, CSS3, Bootstrap 5, Tailwind CSS, Javascript ES6",
    github: "https://github.com/Aryanamish/Steganography",
    live: "https://aryanamish.github.io/Steganography/",
    description:
      "Steganography is the practice of hiding information within other seemingly innocent media. This can include hiding a message within an image, audio file, or even other text. The goal of steganography is to conceal the existence of the message, rather than encrypting it, making it more difficult to detect. This project is a basic implementation of the idea of steganography.",
  },
  {
    title: "Notes-App",
    subheader: "A simple notes web app for everyday productivity.",
    src: notesApp,
    tech: "HTML5, CSS3, ReactJS",
    github: "https://github.com/Surya-Kumar-03/Notes-App",
    description:
      "A simple and responsive notes web app for everyday productivity and keeping track of ideas.",
  },
];

function Projects() {
  return (
    <div className="flex flex-col flex-grow h-auto w-screen justify-center items-center sm:ml-56">
      <h1 className="text-styling text-5xl m-4 mt-4 animateSkillsHeading">
        Projects:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <div className="flex flex-col gap-3 mt-3 mb-6 flex-wrap justify-center md:mx-32 md:flex md:flex-row">
        {projects.map((project) => (
          <CardProj
            title={project.title}
            subheader={project.subheader}
            src={project.src}
            tech={project.tech}
            github={project.github}
            live={project.live}
            description={project.description}
          />
        ))}
      </div>
      <BackTop>
        <button className="bg-white p-2 sm:hidden rounded-lg border cursor-pointer border-gray-500 shadow-md opacity-95 select-none">
          Back to Top
        </button>
      </BackTop>
    </div>
  );
}

export default Projects;
