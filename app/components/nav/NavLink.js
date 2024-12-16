"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FlipNav = () => {
  return (
    <nav className="flex items-center  justify-between ">
      <NavLeft />
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-6 justfiy-around">
      <NavLink href="/#home" text="home" />

      <NavLink href="/#about" text="about" />

      <NavLink href="/#projects" text="projects" />

      <NavLink href="/#contact" text="contact" />
    </div>
  );
};

const NavLink = ({ href, text }) => {
  return (
    <Link href={href} className="block h-[30px] overflow-hidden font-medium" rel="nofollow">
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white font-bold ">
          {text}
        </span>
        <span className="flex items-center h-[30px] text-primary-dark font-bold">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

export default FlipNav;
