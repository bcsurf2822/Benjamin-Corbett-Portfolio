'use client'
import { Button } from "@mui/material";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export const ClearNav = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <p>Projects</p>
      <Button className="bg-secondary-light rounded-lg text-primary-dark font-bold" onClick={() => window.open("/fake_resume.pdf")}>
        My Resume
      </Button>
    </header>
  );
};