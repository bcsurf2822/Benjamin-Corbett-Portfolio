"use client";
import { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import NavContent from "./NavLink";

export const ClearNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: "0%",
      }}
      transition={{
        duration: 1.25,
        ease: "easeInOut",
      }}
      className="h-[72px] w-full flex justify-evenly sticky top-0 z-50 bg-zinc-900/50 backdrop-blur-md "
    >
      {" "}
      <NavContent />
    </motion.nav>
  );
};
