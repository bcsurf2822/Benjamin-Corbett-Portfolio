"use client";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "../data/about";

const AboutCards = () => {
  const { life, tech } = about;
  return (
    <div className="flex flex-col gap-3 md:flex-row  w-full max-w-screen-lg px-2 md:justify-center md:mx-auto">
      <ShimmerBorderCard title="me." content={life} />
      <ShimmerBorderCard title="tech." content={tech} />
    </div>
  );
};

const ShimmerBorderCard = ({ title, content }) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-0.5 transition-all duration-500 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-primary">
      <div className="relative z-10 min-h-full flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-gray-800 p-8 shadow-lg transition-colors duration-500 group-hover:bg-gray-900">
        {title === "me." ? (
          <Image
            src="/images/ben-mtn.jpg"
            alt="Profile"
            width={100}
            height={100}
            className="relative z-10 rounded-full object-cover border-4 border-primary"
            priority
          />
        ) : (
          <FaCode className="relative z-10 mb-10 mt-2 rounded-full border-4 border-indigo-500 bg-gray-900 p-4 text-7xl text-primary" />
        )}

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-indigo-200 group-hover:text-primary">
          {title}
        </h4>
        <p className="relative z-10 text-gray-400 group-hover:text-gray-300">
          {content}
        </p>
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
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-400 via-purple-400/0 to-pink-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default AboutCards;
