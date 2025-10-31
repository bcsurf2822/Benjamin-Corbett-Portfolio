import React from "react";
import AboutCards from "../components/AboutCards";
import Timeline from "../components/Timeline";

export const metadata = {
  title: "Benjamin Corbett - About",
  description: "Learn about Benjamin Corbett's journey, experience, and personal life.",
};

export default function About() {
  return (
    <section
      id="about"
      className="relative z-0 bg-gradient-to-b from-white via-sky-50/30 to-blue-50/40 scroll-mt-[80px] min-h-[100vh] py-16 md:py-24"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-700 font-bold relative z-10">
              About<span className="text-slate-600">.</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-slate-300/30 -rotate-1 rounded-full"></div>
          </div>
        </div>
        <AboutCards />

        <div id="experience" className="mt-16 md:mt-20 scroll-mt-[80px]">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <h3 className="text-4xl md:text-5xl lg:text-6xl text-slate-700 font-bold relative z-10">
                Experience<span className="text-slate-600">.</span>
              </h3>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-slate-300/30 -rotate-1 rounded-full"></div>
            </div>
          </div>
          <Timeline />
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-[5%] w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
