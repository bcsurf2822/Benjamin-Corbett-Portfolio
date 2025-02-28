import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section
    id="contact"
    className="text-copy overflow-hidden  flex flex-col items-center justify-center scroll-mt-[80px] h-[100vh]  md:px-12 md:py-32  ">
      <h1 className="text-4xl">Lets Connect</h1>

      <h1 className="text-2xl text-center">
        to get started on your next project or design a site to{" "}
        <span className="text-4xl uppercase">build</span> your business!
      </h1>

      <div className="flex gap-6 mt-4">
        <NewTabLink
          link="https://www.linkedin.com/in/benjamin-corbett-84822424a"
          icon={faLinkedin}
        />
        <NewTabLink
          link="https://github.com/bcsurf2822"
          icon={faSquareGithub}
        />
        <NewTabLink
          link="https://calendly.com/ben-corbett-44"
          icon={faCalendarDays}
        />
      </div>
      <p>Email: crystaledgedev22@gmail.com</p>
    </section>
  );
}

const NewTabLink = ({ link, icon }) => (
  <>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        className="h-9 text-success-content cursor-pointer hover:scale-125"
        icon={icon}
      />
    </a>
  </>
);
