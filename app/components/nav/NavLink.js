"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CVButton from "./CVButton";

const NavContent = () => {
  return (
    <nav className="flex justify-evenly items-center w-full gap-3 relative z-10">
      <NavLink href="/#home" text="home" />
      <NavLink href="/#about" text="about" />
      <NavLink href="/#experience" text="experience" />
      <NavLink href="/#project" text="projects" />
      <NavLink href="/#contact" text="contact" />
      <CVButton />
    </nav>
  );
};

const NavLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="block h-[30px] overflow-hidden text-sm font-bold"
      rel="nofollow"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-700">{text}</span>
        <span className="flex items-center h-[30px] text-blue-600">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

export default NavContent;
