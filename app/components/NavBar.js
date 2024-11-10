import React from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap  p-6 border-b-4 border-cyan-400 shadow-lg">
        <div className="flex items-center flex-shrink-0 text-cyan-400 mr-6">
          <h3 className="font-extrabold text-3xl tracking-tight flex flex-col gap-5 ">Benjamin Corbett <span className="text-lg italic">Full-Stack Developer</span></h3>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg font-bold lg:flex-grow ">
            <Link  href="/about"   className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white mr-4 hover:underline">
              About
            </Link>
            <Link
              href="/cv"
              className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white hover:underline mr-4"
            >
              CV
            </Link>
            <Link
              href="/projects"
              className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white mr-4 hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white hover:underline"
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              href="/"
          
            >
              <FontAwesomeIcon className="h-8   text-cyan-400 hover:text-white " icon={faHouseChimney} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
