import React from "react";
import AboutCards from "../components/AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-0 bg-neutral-50 scroll-mt-[80px] h-[100vh] flex items-center border-y-2 border-neutral-200 "
    >
      <AboutCards />
    </section>
  );
}
