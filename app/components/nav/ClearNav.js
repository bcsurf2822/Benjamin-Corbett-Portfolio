"use client";
import { Button } from "@mui/material";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";

import FlipNav from "./NavLink";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

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
      className={`h-[72px]  px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md`}
    >
      {" "}
      <FlipNav />
      <Button
        className="bg-secondary-light rounded-lg text-primary-dark font-bold"
        onClick={() => window.open("/fake_resume.pdf")}
      >
        My Resume
      </Button>
    </motion.nav>
  );
};
