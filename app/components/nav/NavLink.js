"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between relative">
      <NavLeft />
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      
      <Link href="/#home">
        <NavLink text="home" />
      </Link>
      <Link href="/#about">
        <NavLink text="about" />
      </Link>
      <Link href="/#projects">
        <NavLink text="projects" />
      </Link>
      {/* <Link href="/cv">
        <NavLink text="cv" />
      </Link> */}
      <Link href="/#contact">
        <NavLink text="contact" />
      </Link>
    </div>
  );
};

const NavLink = ({ text }) => {
  return (
    <div>
      <a rel="nofollow" className="block h-[30px] overflow-hidden font-medium">
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-white font-bold ">
            {text}
          </span>

          <span className="flex items-center h-[30px] text-primary-dark font-bold">
            {text}
          </span>
        </motion.div>
      </a>
    </div>
  );
};

export default FlipNav;
