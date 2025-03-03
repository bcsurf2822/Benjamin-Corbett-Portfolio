"use client";
import { motion } from "framer-motion";
import { life, tech } from "../data/aboutData";

const AboutCards = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row w-full max-w-screen-lg px-4 md:justify-center md:mx-auto">
      <ShimmerCard title="about" content={life} />
      <ShimmerCard title="tech" content={tech} />
    </div>
  );
};

const ShimmerCard = ({ content, title }) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 via-white to-gray-100 p-0.5 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:bg-gradient-to-br hover:from-primary-light hover:via-indigo-100 hover:to-primary-light">
      <div className="relative z-10 min-h-full flex flex-col items-center justify-start overflow-hidden rounded-lg bg-white p-6 shadow-md transition-colors duration-300">
        <div className="w-full sticky top-0 bg-white pb-2 border-b border-gray-100">
          <h4 className="relative z-10 text-3xl font-bold text-primary-dark">
            {title}
            <span className="text-secondary">.</span>
          </h4>
        </div>
        <div className="relative z-10 text-gray-600 group-hover:text-gray-800 mt-4 w-full">
          {content.map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 first-letter:text-xl first-letter:font-bold"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary-light/30 via-indigo-200/0 to-secondary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

export default AboutCards;
