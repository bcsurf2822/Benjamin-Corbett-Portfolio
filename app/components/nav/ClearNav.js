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
      className="h-[72px] w-full flex justify-evenly sticky top-0 z-50 overflow-hidden"
    >
      {/* Glass morphism background with light blue tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border-b border-white/20" />

      {/* Shimmer effect overlay */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          width: "50%",
        }}
      />

      {/* Subtle animated gradient overlay */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      />

      <NavContent />
    </motion.nav>
  );
};
