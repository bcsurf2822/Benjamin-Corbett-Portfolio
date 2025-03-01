import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileProjectCards({ 
  project, 
  isExpanded, 
  onToggle 
}) {
  return (
    <motion.div 
      className="mb-6 overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="bg-gradient-to-br from-gray-200 via-white to-gray-100 p-0.5 rounded-lg transition-all duration-300 hover:shadow-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Card Header - Always visible */}
          <div 
            className="px-4 py-5 cursor-pointer"
            onClick={onToggle}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-primary-dark">{project.title}</h3>
              <span className="text-sm text-gray-500">
                {isExpanded ? "Tap to collapse" : "Tap to expand"}
              </span>
            </div>
            
            {/* Preview of technologies */}
            <div className="mt-2 flex flex-wrap gap-1">
              {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="inline-block px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies && project.technologies.length > 3 && (
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          {/* Expandable Content */}
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
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  
                  {/* Full list of technologies if available */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="inline-block px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-3">
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                          <FontAwesomeIcon
                            className="h-8 text-gray-800 dark:text-gray-200 cursor-pointer transition-transform hover:scale-110"
                            icon={faSquareGithub}
                          />
                        </a>
                      ) : null}
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block">
                          <Button 
                            className="p-1 text-sm" 
                            variant="contained"
                            size="small"
                          >
                            View Demo
                          </Button>
                        </a>
                      ) : null}
                    </div>
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