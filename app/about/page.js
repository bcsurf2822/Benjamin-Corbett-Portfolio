import React from "react";
import AboutCards from "../components/AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-0 bg-neutral-50 scroll-mt-[80px] min-h-[100vh] py-12 md:py-0 md:flex md:items-center border-y-2 border-neutral-200"
    >
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl text-primary-dark font-bold inline-block">
            myStory<span className="text-secondary">.</span>
          </h2>
        </div>
        <AboutCards />
      </div>
    </section>
  );
}