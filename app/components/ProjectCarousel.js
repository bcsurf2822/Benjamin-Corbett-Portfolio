"use client";
import { useState } from "react";
import { projects } from "../data/projectData";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleToggleProject = (projectId) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="text-center py-6 md:py-8 mb-8">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-700 font-bold relative z-10">
            projects<span className="text-slate-600">.</span>
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-slate-300/30 -rotate-1 rounded-full"></div>
        </div>
      </div>

      {/* Desktop and Tablet Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Mobile View - Keep accordion style for small screens */}
      <div className="block sm:hidden">
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white p-4 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] transition-all duration-300"
            >
              <button
                onClick={() => handleToggleProject(project.id)}
                className="w-full text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="text-xs text-gray-500">{project.tech}</div>
              </button>

              {expandedProjectId === project.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-white py-2 text-sm font-medium text-gray-700 text-center shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-white py-2 text-sm font-medium text-blue-600 text-center shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
