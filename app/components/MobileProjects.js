import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileProjectCards({ project, isExpanded, onToggle }) {
  return (
    <motion.div
      className="mb-6 overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-br from-gray-200 via-white to-gray-100 p-0.5 rounded-lg transition-all duration-300 hover:shadow-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Card Header - Always visible */}
          <div className="px-4 py-5 cursor-pointer" onClick={onToggle}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-primary-dark">
                {project.title}
              </h3>
              <span className="text-sm text-gray-500">
                {isExpanded ? "Tap to collapse" : "Tap to expand"}
              </span>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 pb-5"
              >
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-center my-3">
                    <span className="inline-block rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-white shadow-sm">
                      {project.tech}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <div className="flex gap-3 items-center">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block z-20"
                          aria-label="View GitHub Repository"
                        >
                          <FontAwesomeIcon
                            className="h-8 text-gray-700 transition-all duration-300 hover:text-primary hover:scale-110"
                            icon={faSquareGithub}
                          />
                        </a>
                      ) : (
                        <div className="w-8"></div>
                      )}
                    </div>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block z-20"
                      >
                        <Button
                          className="bg-primary hover:bg-primary-dark transition-all duration-300 normal-case text-sm"
                          variant="contained"
                          size="small"
                        >
                          View Demo
                        </Button>
                      </a>
                    ) : (
                      <div className="w-20"></div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
