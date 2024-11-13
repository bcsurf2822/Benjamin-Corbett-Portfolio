"use client";
import { FaCode } from "react-icons/fa";
import { IoFishOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { aboutMeData } from "../data/AboutMe";
import Image from "next/image";

const AboutCards = () => {
  const { life,  tech } = aboutMeData;
  return (
    <div className="bg-slate-900 w-full mt-10 py-12">
      <div className="flex flex-col justify-around gap-5 w-full max-w-screen-lg mx-auto md:flex-row">
        <ShimmerBorderCard title="me." content={life} />
        <ShimmerBorderCard title="tech." content={tech} />
      </div>
    </div>
  );
};

const ShimmerBorderCard = ({ title, content }) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-600 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
      <div className="relative z-10 min-h-full flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-700 p-8 transition-colors duration-500 group-hover:bg-slate-800">
      {title === "me." ? (
          <Image
            src="/images/ben-mtn.jpg" // Make sure this path is correct
            alt="Profile"
            width={100}  // Equivalent to w-24 in Tailwind
            height={100} // Equivalent to h-24 in Tailwind
            className="relative z-10 rounded-full object-cover border-2 border-indigo-500"
            priority
          />
        ) : (
          <FaCode className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />
        )}

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
          {title}
        </h4>
        <p className="relative z-10 text-slate-400">{content}</p>
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
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default AboutCards;
