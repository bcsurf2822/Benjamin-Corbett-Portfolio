"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { aboutContent } from "../data/aboutData";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

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
    <div className="w-full max-w-5xl mx-auto py-8">
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
  const paragraphs = aboutContent.split('\n\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card
        className={cn(
          "group relative transition-all duration-300",
          "overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-gray-200/80 shadow-lg"
        )}
      >
        <CardContent className="relative px-8 py-10 md:px-12 md:py-14">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-800 leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>

        <div
          className={cn(
            "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10",
            "opacity-50"
          )}
        />
      </Card>
    </motion.div>
  );
};

export default AboutCards;
