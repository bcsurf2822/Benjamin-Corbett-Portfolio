"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ tech, title, github, demo, description }) => {
  const techItems = tech.split("|").map((item) => item.trim());

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] transition-all duration-300 hover:shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] flex flex-col h-full">
      {/* Header Section */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techItems.map((item, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-600 shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="flex-grow mb-4">
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-white py-2 text-sm font-medium text-gray-700 flex items-center justify-center gap-2 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)]"
            aria-label="View GitHub Repository"
          >
            <FontAwesomeIcon icon={faSquareGithub} className="h-4" />
            <span>GitHub</span>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-white py-2 text-sm font-medium text-blue-600 flex items-center justify-center gap-2 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)]"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="h-3" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
