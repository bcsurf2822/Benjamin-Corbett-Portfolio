"use client";
import Image from "next/image";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";

const ProjectDetails = ({ imgUrl, tech, title, github, demo, description }) => {
  const paragraphs = description.split(". ").filter(Boolean);

  return (
    <div className="relative shrink-0 w-[340px] h-[500px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="w-full h-[180px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
        <Image
          src={imgUrl}
          alt={`Ben Corbett's ${title} Project`}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 340px"
          className="object-cover"
          quality={90}
        />
      </div>

      <div className="p-5 flex flex-col h-[320px]">
        <div className="flex justify-center mb-3">
          <span className="inline-block rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-white shadow-sm">
            {tech}
          </span>
        </div>

        <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-1">
          {title}
        </h3>

        <div className="flex-grow overflow-y-auto pr-1 custom-scrollbar">
          <div className="text-sm text-gray-600 space-y-2">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph + (index < paragraphs.length - 1 ? "." : "")}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            {github ? (
              <a
                href={github}
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

          {demo ? (
            <a
              href={demo}
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

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.8);
        }

        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.5) rgba(243, 244, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
