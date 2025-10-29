"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { aboutContent } from "../data/aboutData";
import { Card, CardHeader, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { Code2, Sparkles, Rocket, User } from "lucide-react";

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
    <div className="w-full max-w-[83.33vw] mx-auto py-8">
      <AboutCard />
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

const AboutCard = () => {
  const sections = [
    { icon: <Code2 className="w-5 h-5 text-blue-500" />, content: aboutContent.intro },
    { icon: <Sparkles className="w-5 h-5 text-purple-500" />, content: aboutContent.techFocus },
    { icon: <Rocket className="w-5 h-5 text-emerald-500" />, content: aboutContent.journey },
    { icon: <Sparkles className="w-5 h-5 text-amber-500" />, content: aboutContent.currentFocus },
    { icon: <User className="w-5 h-5 text-red-500" />, content: aboutContent.background },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[60vh] overflow-y-auto pr-2"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgb(156 163 175) transparent"
      }}
    >
      <div className="space-y-5">
        {sections.map((section, index) => (
          <Card
            key={index}
            className={cn(
              "group relative transition-all duration-300 hover:shadow-lg",
              "hover:-translate-y-0.5 will-change-transform",
              "overflow-hidden bg-white border-2 border-gray-200/80 hover:border-gray-300"
            )}
          >
            <CardHeader className="relative space-y-0 p-5 pb-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
                  {section.icon}
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-2 px-5 pb-5 pt-0">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-[450] text-justify">
                {section.content}
              </p>
            </CardContent>

            <div
              className={cn(
                "absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-200/70 to-transparent dark:via-white/10",
                "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300"
              )}
            />
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutCards;
