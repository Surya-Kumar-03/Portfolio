import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import SocialMedia from "./socialMedia";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [messageNotSent, setMessageNotSent] = useState(false);
  const [loaderDisplay, setloaderDisplay] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setloaderDisplay(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setMessageSent(true);
          setMessageNotSent(false);
          setloaderDisplay(false);
          e.target.reset();
        },
        (error) => {
          setMessageSent(false);
          setMessageNotSent(true);
          setloaderDisplay(false);
        }
      );
  };

  return (
    <div className="flex flex-col min-h-[85vh] sm:min-h-screen justify-center items-center sm:ml-56 w-full">
      <h1 className="text-styling text-5xl m-4 mt-4 animateSkillsHeading">
        Contact Me:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <Backdrop
        sx={{ color: "#ffd700", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loaderDisplay}
        className="sm:pl-56"
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex flex-col w-full h-auto animateFont-form items-center justify-center p-2">
        <form ref={form} onSubmit={sendEmail}>
          <ul className="flex flex-col w-full h-auto justify-center items-center">
            <div className="flex flex-row justify-center items-center w-full h-auto">
              <li className="mb-2 mr-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  className="w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
                  required
                ></input>
              </li>
              <li className="mb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  autoComplete="off"
                  className="w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
                  required
                ></input>
              </li>
            </div>
            <li className="mb-2 w-full">
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                autoComplete="off"
                className="w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
                required
              ></input>
            </li>
            <li className="mb-2 w-full">
              <textarea
                placeholder="Message"
                name="message"
                autoComplete="off"
                className="w-full h-56 text-2xl bg-gray-200 rounded-md placeholder:text-2xl
                 p-5 shadow-sm resize-none scrollBarStyle-TextArea"
                required
              ></textarea>
            </li>
            <li>
              <input
                type="submit"
                className="w-full text-2xl bg-yellow-200 rounded-md placeholder:text-2xl p-3 
                shadow-md cursor-pointer hover:bg-teal-100 transition-all duration-1000"
                value="Send Message"
              ></input>
            </li>
          </ul>
        </form>
        {messageSent ? (
          <Alert severity="success" className="mt-4">
            <AlertTitle>
              <h1 className="font-bold">Message Sent!</h1>
            </AlertTitle>
            Thanks for getting in touch —{" "}
            <strong>I'll get back to you soon!</strong>
          </Alert>
        ) : null}
        {messageNotSent ? (
          <Alert severity="error" className="mt-4">
            <AlertTitle>
              <h1 className="font-bold">Sorry, something went wrong!</h1>
            </AlertTitle>
            Contact me at —{" "}
            <a href="mailto:suryawrks4u@gmail.com" className="font-bold">
              suryawrks4u@gmail.com
            </a>
          </Alert>
        ) : null}

        <h1 className="text-3xl text-center mt-8">
          <span className="cardsSubtitleFont text-5xl m-1 text-pink-600 italic">
            Connect
          </span>{" "}
          with me on..
        </h1>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
}

export default Contact;
