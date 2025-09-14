"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { life, tech } from "../data/aboutData";
import Link from "next/link";

const AboutCards = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full max-w-screen-lg px-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CardWithTabs />
        <TimelineCard />
      </div>
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 1.5, ease: "linear" },
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="w-16 h-16 rounded-full border-4 border-transparent border-t-primary border-b-secondary"
      />
    </div>
  );
};

const CardWithTabs = () => {
  const [activeTab, setActiveTab] = useState("code");
  const content = activeTab === "code" ? tech : life;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Card Header with Tabs */}
      <div className="flex border-b border-gray-100">
        <TabButton 
          active={activeTab === "code"} 
          onClick={() => setActiveTab("code")}
          label="code"
        />
        <TabButton 
          active={activeTab === "life"} 
          onClick={() => setActiveTab("life")}
          label="life"
        />
      </div>
      
      {/* Card Content */}
      <div className="px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 space-y-4"
          >
            {content.map((paragraph, i) => (
              <p
                key={i}
                className="mb-4 first-letter:text-2xl first-letter:font-bold first-letter:text-primary first-letter:mr-1"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-light via-secondary to-primary"></div>
    </motion.div>
  );
};

const TabButton = ({ active, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 text-lg font-semibold transition-all duration-200 ${
        active 
          ? "text-primary-dark" 
          : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {label}<span className="text-secondary">.</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};

const TimelineCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-2xl font-bold text-primary-dark">
          experience<span className="text-secondary">.</span>
        </h3>
      </div>
      
      <div className="relative px-6 py-8">
        {/* Timeline items */}
        <Timeline />
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-16 translate-x-16">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
          className="w-full h-full rounded-full bg-gradient-to-br from-primary-light/30 via-indigo-200/20 to-secondary/20 blur-xl"
        />
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const items = [
    {
      year: "June 2025 - Present",
      title: "KLoBot Inc. - Developer",
      description: <>Joined full-time at <Link href="https://www.klobot.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">KLoBot Inc.</Link> contributing to enterprise AI solutions (KLapper) across C#, .NET, Python, React, and Angular. Focused on performance optimization, secure Q&A with citations, and Microsoft 365/SharePoint integrations.</>
    },
    {
      year: "March 2025 - June 2025",
      title: "KLoBot Inc. - Software Developer Intern",
      description: <>Completed a 16-week internship at <Link href="https://www.klobot.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">KLoBot Inc.</Link>, gaining hands-on experience in C#, .NET, Python, SPFx, and Azure. Contributed to NetDocShare, imDocShare, and KLapper while participating in daily standups and Agile sprints. Converted to full-time ahead of schedule.</>
    },
    {
      year: "2024 - 2025",
      title: "Chingu – Agile/Scrum Developer",
      description: "Collaborated remotely with a team of 9 to build applications such as SolarRise (sustainable energy platform) and AiQ (AI prompt engineering tool), implementing data validation, UX improvements, and Google Gemini API integrations."
    },
    {
      year: "Feb 2023 - July 2023",
      title: "Parsity Online Code School",
      description: "Completed a full-stack coding bootcamp covering MongoDB, React, Next.js, TypeScript, Redux Toolkit, responsive design, and modern JavaScript patterns."
    },
    {
      year: "2011 - 2024",
      title: "Commercial Fisherman",
      description: "Worked across Alaska, New Jersey, Massachusetts, and California, managing operations in demanding and fast-paced environments."
    }
  ];

  return (
    <div className="space-y-8 pl-4">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
          className="relative flex items-start group"
        >
          {index !== items.length - 1 && (
            <div className="absolute top-6 left-3 h-[calc(100%+2rem)] w-0.5 bg-gradient-to-b from-primary-light to-secondary-light"></div>
          )}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="min-w-[22px] flex justify-center mt-1 z-10"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:shadow-primary/20 transition-shadow duration-300">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </motion.div>
          <div className="ml-8 transition-all duration-300 group-hover:translate-x-1">
            <div className="mb-2">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-primary/10 transition-colors duration-300 inline-block">
                {item.year}
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutCards;
