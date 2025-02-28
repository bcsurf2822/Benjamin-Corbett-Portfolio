"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const life = [
  "I am a full-stack developer who enjoys practicing my current skill set by building responsive and scalable applications.",
  "Outside of tech, I enjoy going to the beach, surfing, skateboarding, spending time with my wife and dog, cooking, hiking, traveling, and doing DIY projects around the house.",
  "Before getting into software, I was a commercial fisherman for 12 years, fishing out of many ports in the country including Alaska, Massachusetts and California.",
  "My time there has taught me countless skills such as leadership, responsibility, and the benefits of hard work.",
  "I've had the privelage to work and laugh with some of the best people and have expereienced so much during our trips at sea.",
];

const tech = [
  "While recovering from an injury sustained on the boat I took my passion for technology to the next level by using online resources to teach myself HTML, JavaScript, and CSS. In 2023 I joined Parsity, an online coding bootcamp, where I built a strong foundation in React, Redux, MongoDB, Express, and Node.",
  "Since finishing my course work, I have been practicing with those technologies on a daily basis while working to master my skills in NextJS.  My current interests are TypeScript, AI integration, and Amazon Web Services(AWS).  My goal is to work alongside a great team at a company where I can continue to grow as a person and developer.",
];

const AboutCards = () => {
  return (
    <div className="flex flex-col gap-1 md:flex-row w-full max-w-screen-lg px-2 md:justify-center md:mx-auto">
      <ShimmerCard title="about." content={life} />
      <ShimmerCard title="tech." content={tech} />
    </div>
  );
};

const ShimmerCard = ({ content, title }) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-0.5 transition-all duration-500 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-primary">
      <div className="relative z-10 min-h-full flex flex-col items-center justify-start overflow-hidden rounded-lg bg-gray-700 p-8 shadow-lg transition-colors duration-500 ">
        <div className="w-full sticky top-0 bg-gray-700 pb-2">
          <h4 className="relative z-10 text-3xl font-bold text-indigo-200 group-hover:text-primary">
            {title}
          </h4>
        </div>
        <div className="relative z-10 text-gray-400 group-hover:text-gray-300 mt-4">
          {content.map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 first-word:font-bold first-letter:text-xl"
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
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-400 via-purple-400/0 to-pink-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default AboutCards;