"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


const NavBar = () => {
  return (
    <div className="bg-gray-50 ">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[3px] border-slate-900  flex items-center justify-between relative">
      <NavLeft isOpen={setIsOpen} />
    </nav>
  );
};

const Logo = () => {
  return (
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-gray-800"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      ></motion.button>
      <Logo />
      <Link href="/">
        <NavLink text="home" />
      </Link>
      <Link href="/about">
        <NavLink text="about" />
      </Link>
      <Link href="/projects">
        <NavLink text="projects" />
      </Link>
      <Link href="/cv">
        <NavLink text="cv" />
      </Link>
      <Link href="/contact">
        <NavLink text="contact" />
      </Link>
    </div>
  );
};

const NavLink = ({ text }) => {
  return (
    <motion.div whileHover={{ y: -30 }}>
      <span className="flex items-center h-[30px] text-gray-500">{text}</span>
    </motion.div>
  );
};

export default NavBar;

