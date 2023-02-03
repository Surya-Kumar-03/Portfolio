import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [messageNotSent, setMessageNotSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0y939qt",
        "template_joxuh3o",
        form.current,
        "bAxVBVhhLTwBi2ITZ"
      )
      .then(
        () => {
          setMessageSent(true);
          setMessageNotSent(false);
        },
        (error) => {
          setMessageSent(false);
          setMessageNotSent(true);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex flex-col min-h-[85vh] sm:min-h-screen justify-center items-center sm:ml-56 w-full">
      <h1 className="text-styling text-5xl m-4 mt-0 animateSkillsHeading">
        Contact Me:{" "}
      </h1>
      <h1 className="-mt-10 mb-2">____</h1>
      <div className="flex flex-col w-full h-auto animateFont-form items-center justify-center p-2">
        <form ref={form} onSubmit={sendEmail}>
          <ul className="flex flex-col w-full h-auto justify-center items-center">
            <div className="flex flex-row justify-center items-center w-full h-auto">
              <li className="mb-2 mr-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autocomplete="off"
                  className="w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
                  required
                ></input>
              </li>
              <li className="mb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  autocomplete="off"
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
                autocomplete="off"
                className="w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
                required
              ></input>
            </li>
            <li className="mb-2 w-full">
              <textarea
                placeholder="Message"
                name="message"
                autocomplete="off"
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
                value="Send"
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
              <h1 className="font-bold">
                Sorry, something went wrong!
              </h1>
            </AlertTitle>
            Contact me at —{" "}
            <a href="mailto:suryawrks4u@gmail.com" className="font-bold">
              suryawrks4u@gmail.com
            </a>
          </Alert>
        ) : null}
      </div>
    </div>
  );
}

export default Contact;
