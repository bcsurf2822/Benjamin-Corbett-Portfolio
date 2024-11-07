import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4">
      <h1 className="text-2xl text-center">
        I&apos;d love to help you on your next project or help you design a site
        to build your business
      </h1>
      <h1>Lets Connect!</h1>

      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/benjamin-corbett-84822424a/">
          <FontAwesomeIcon
            className="h-9 text-yellow-300 cursor-pointer"
            icon={faLinkedin}
          />
        </Link>
        <Link href="https://github.com/bcsurf2822">
          <FontAwesomeIcon
            className="h-9 text-yellow-300 cursor-pointer"
            icon={faSquareGithub}
          />
        </Link>
        <Link href="https://calendly.com/ben-corbett-44">
          <FontAwesomeIcon
            className="h-9 text-yellow-300 cursor-pointer"
            icon={faCalendarDays}
          />
        </Link>
      </div>
    </div>
  );
}
