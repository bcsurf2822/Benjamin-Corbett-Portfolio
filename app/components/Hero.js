"use client";

import Reveal from "./util/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-[100vh] text-slat-100 overflow-hidden  flex flex-col justify-center items-center"
    >
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-primary-dark md:text-8xl">
              Benjamin Corbett<span className="text-secondary">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-copy md:my-4 md:text-4xl">
              NJ Based{" "}
              <span className="font-semibold text-indigo-500">
                Full-Stack Developer
              </span>
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
