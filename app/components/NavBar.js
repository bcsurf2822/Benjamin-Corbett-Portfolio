"use client";
// import React from "react";
// import Link from 'next/link';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

// export default function NavBar() {
//   return (
//     <div>
//       <nav className="flex items-center justify-between flex-wrap  p-6 border-b-4 border-cyan-400 shadow-lg">
//         <div className="flex items-center flex-shrink-0 text-cyan-400 mr-6">
//           <h3 className="font-extrabold text-3xl tracking-tight flex flex-col gap-5 ">Benjamin Corbett <span className="text-lg italic">Full-Stack Developer</span></h3>
//         </div>

//         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//           <div className="text-lg font-bold lg:flex-grow ">
//             <Link  href="/about"   className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white mr-4 hover:underline">
//               About
//             </Link>
//             <Link
//               href="/cv"
//               className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white hover:underline mr-4"
//             >
//               CV
//             </Link>
//             <Link
//               href="/projects"
//               className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white mr-4 hover:underline"
//             >
//               Projects
//             </Link>
//             <Link
//               href="/contact"
//               className="block mt-4 lg:inline-block lg:mt-0  text-cyan-400  hover:text-white hover:underline"
//             >
//               Contact
//             </Link>
//           </div>
//           <div>
//             <Link
//               href="/"

//             >
//               <FontAwesomeIcon className="h-8   text-cyan-400 hover:text-white " icon={faHouseChimney} />
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="bg-gray-50">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
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
      >
        <FiMenu />
      </motion.button>
      <Logo />
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

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <GradientShadowButton text="home" />
      </Link>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Solutions" />
      <MenuLink text="Community" />
      <MenuLink text="Pricing" />
      <MenuLink text="Company" />
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

const GradientShadowButton = ({ text }) => {
  return (
    <div className="group relative w-fit transition-transform duration-300 active:scale-95">
      <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
        <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          {text}
        </span>
      </button>

      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );
};

export default NavBar;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
