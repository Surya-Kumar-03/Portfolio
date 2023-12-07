import quickQuizizz from "../../assets/quickquizizz.webp";
import events from "../../assets/events.webp";
import portfolio from "../../assets/portfolio.webp";
import property from "../../assets/property.webp";
import spaceShip from "../../assets/spaceShip.webp";
import steganography from "../../assets/steganography.webp";
import notesApp from "../../assets/notesApp.webp";
import MusicWebApp from "../../assets/MusicWebApp.webp";
import CardProj from "./CardProj";
import BackTop from "../../backTop";
import Gfg from "../../assets/gfg.png";

const projects = [
  {
    title: "Events@Sathyabama",
    subheader: "An Event Management System to effortlessly manage all college events.",
    src: events,
    github: "https://github.com/Events-Sathyabama/Events-Sathyabama",
    live: "https://events-sathyabama.netlify.app/",
    tech: "NextJS, ReactJS, TypeScript, Material UI, Tailwind CSS, REST APIs, JWT, Django, MySQL",
    prod: "https://events-sathyabama.vercel.app/",
    description:
      "Utilized NextJS, Material UI, TypeScript and ReactJS to develop a college-specific event management system for 17000+ students, 1000+ faculty, and administrators.\n Streamlined event management by implementing SEO-focused SSR resulting in 50% faster load times, 70% quicker event announcements, and 60% more efficient approval.\n Integrated approval mechanisms and single-click applications resulting in a 40% surge in application volume.\n",
  },
  {
    title: "Personal Portfolio",
    subheader: "The website you are currently on!",
    src: portfolio,
    github: "https://github.com/Surya-Kumar-03/Portfolio",
    live: "https://bandepalli-surya.netlify.app/",
    tech: "HTML5, CSS3, Tailwind CSS, ReactJS, Material UI, Npm & sub-libraries, Netlify",
  },
  {
    title: "GFG Code Formatter",
    subheader: "A Browser Extension to enhance code readability with code formatting on GeeksforGeeks Practise Platform.",
    src: Gfg,
    github: "https://github.com/Surya-Kumar-03/GFG-Code-Formatter",
    tech: "JavaScript Injection, DOM Manipulation, Parsers, HTML, CSS",
    prod: "https://microsoftedge.microsoft.com/addons/detail/geeksforgeeks-code-format/ekjbfkjlafjaegpnbdgkheflepldlgfb",
    description:
      "Built a browser extension for the GeeksforGeeks Practice Portal focused on enhancing code formatting and readability, estimated to save 10% of coding time.",
  },
  {
    title: "Quick-Quizizz",
    subheader: "A responsive online web-based quiz-app with timer.",
    src: quickQuizizz,
    tech: "HTML, CSS, JavaScript, REST APIs, NodeJS, ExpressJS, MongoDB",
    github: "https://github.com/Surya-Kumar-03/Quick-Quizizz",
    live: "https://lazy-erin-seahorse-tux.cyclic.app/",
    description:
      "Designed a quiz web app with CRUD functionality offering real-time answer assessment, scoring, proctoring and question randomization.",
  },
  {
    title: "SongStreamHub",
    subheader: "A music player app with optimized data retrieval and secure authentication.",
    src: MusicWebApp,
    tech: "NodeJS, GraphQL, JWT, OAuth, Firebase Storage, MongoDB, ReactJS, Redux, TypeScript, Tailwind CSS",
    github: "https://github.com/Surya-Kumar-03/SongStreamHub",
    description:
      "Created a music player app using MongoDB for metadata, Firebase Storage, and GraphQL enhancing data retrieval by 30% while addressing overfetching, underfetching, and error handling. \nIncorporated OAuth and JWT, reducing login times by 40% to elevate the overall user experience.",
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
      "A cross-domain (Web-ML) application that makes appropriate predictions for an astronaut's survival by passing necessary parameters. \nIt was a sarcastic project made for a hypothetical situation.",
  },
  {
    title: "Steganography Implementation",
    subheader: "A basic implementation of the idea of steganography.",
    src: steganography,
    tech: "HTML5, CSS3, Bootstrap 5, Tailwind CSS, Javascript ES6",
    github: "https://github.com/Aryanamish/Steganography",
    live: "https://aryanamish.github.io/Steganography/",
    description:
      "Steganography is the practice of hiding information within other seemingly innocent media. \nThis can include hiding a message within an image, audio file, or even other text. \nThe goal of steganography is to conceal the existence of the message, rather than encrypting it, making it more difficult to detect. \nThis project is a basic implementation of the idea of steganography.",
  },
  {
    title: "Notes-App",
    subheader: "A simple notes web app for everyday productivity.",
    src: notesApp,
    tech: "HTML5, CSS3, ReactJS, Firebase",
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
            prod={project.prod}
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
