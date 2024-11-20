"use client";

import Reveal from "../util/Reveal";

export default function Hero() {
  return (
    <div>
      <section className="text-slat-100 overflow-hidden py-24 md:py-32">
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
                  Full Stack Developer
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-copy md:text-base">
                I build complex software with React and NextJS
              </p>
            </Reveal>
            <Reveal>
              {/* <OutlineButton
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView();
                }}
                className="pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 mt-4 bg-indigo-500 text-zinc-100 border-indigo-500 md:mt-6"
              >
                Contact Me */}
              {/* </OutlineButton> */}
            </Reveal>
          </div>
          {/* <DotGrid /> */}
        </div>
      </section>
    </div>
  );
}
