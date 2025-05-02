import React from "react";
import AboutCards from "../components/AboutCards";
import { Metadata } from "next";

export const metadata = {
  title: "Benjamin Corbett - About",
  description: "Learn about Benjamin Corbett's journey, experience, and personal life.",
};

export default function About() {
  return (
    <section
      id="about"
      className="relative z-0 bg-gradient-to-b from-neutral-50 to-white scroll-mt-[80px] min-h-[100vh] py-16 md:py-24"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary-dark font-bold relative z-10">
              myStory<span className="text-secondary">.</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/10 -rotate-1 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            From the fishing vessel to the keyboard, this is my journey into software development and the path that brought me here.
          </p>
        </div>
        <AboutCards />
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 right-[5%] w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
}
