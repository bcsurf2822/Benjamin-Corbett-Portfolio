"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Timeline = () => {
  const items = [
    {
      year: "2025 - Present",
      title: "Developer",
      company: "KLoBot Inc.",
      location: "Newark, NJ",
      description: "Enterprise AI platform team (KLapper) enabling intelligent document analysis using retrieval augmented generation (RAG).",
      achievements: [
        "Reduced UI instability ~80% in KLapper Builder by resolving TypeScript/Angular race conditions",
        "Increased document Q&A response rate ~70% by implementing semantic matching with citations and ACL security",
        "Cut bulk delete time in Azure Cosmos DB from 3-5 minutes to ~30 seconds through optimized stored procedures",
        "Led partner deployments, trainings, and product demos; collaborated with client admins on Azure integration"
      ]
    },
    {
      year: "March 2025 - June 2025",
      title: "Software Developer Intern",
      company: "KLoBot Inc.",
      location: "Newark, NJ",
      description: "Completed 16-week technical internship focused on Python, C#, SPFx/M365, Generative AI, and Azure.",
      achievements: [
        "Contributed features across NetDocShare, imDocShare, and KLapper",
        "Participated in code reviews and mentorship with senior team members",
        "Converted to full-time position ahead of schedule"
      ]
    },
    {
      year: "2024 - 2025",
      title: "Software Developer",
      company: "Chingu",
      location: "Remote",
      description: "Agile/Scrum workplace simulation developing real-world applications in collaborative team environments.",
      achievements: [
        "Developed SolarRise, a sustainable energy platform for Los Angeles residents",
        "Built AiQ, a Google Gemini-powered prompt engineering tool for non-technical users",
        "Implemented data validation flow, reducing processing time by ~60%"
      ]
    },
    {
      year: "Feb 2023 - July 2023",
      title: "Full-Stack Bootcamp",
      company: "Parsity Online Code School",
      location: "Remote",
      achievements: [
        "Completed intensive full-stack program covering MongoDB, React, Next.js, and TypeScript",
        "Mastered Redux Toolkit, responsive design, and modern JavaScript patterns",
        "Built multiple production-ready web applications"
      ]
    },
    {
      year: "2011 - 2024",
      title: "Commercial Fisherman",
      location: "Alaska, NJ, MA, CA",
      achievements: [
        "Managed operations in demanding, fast-paced maritime environments",
        "Developed leadership, teamwork, and crisis management skills",
        "Adapted to extreme conditions and high-pressure decision-making"
      ]
    }
  ];

  return (
    <div className="w-full max-w-[50vw] mx-auto space-y-10 py-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
          className="relative flex items-start group"
        >
          {index !== items.length - 1 && (
            <div className="absolute top-7 left-4 h-[calc(100%+2.5rem)] w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
          )}
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="min-w-[28px] flex justify-center mt-1.5 z-10"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
          </motion.div>
          <div className="ml-6 flex-1 transition-all duration-200 group-hover:translate-x-0.5">
            <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
              <span className="text-sm font-medium px-3 py-1.5 rounded-md bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                {item.year}
              </span>
              {item.location && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.location}
                </span>
              )}
            </div>
            <div className="mb-3">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 tracking-tight text-lg mb-1">
                {item.title}
              </h4>
              {item.company && (
                <p className="font-semibold text-primary text-base mb-2">
                  {item.company}
                </p>
              )}
              {item.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 italic">
                  {item.description}
                </p>
              )}
            </div>
            {item.achievements && (
              <ul className="space-y-2">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-3 mt-1.5 text-xs">▸</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
