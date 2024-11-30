"use client";
import Image from "next/image";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";

const ProjectDetails = ({ imgUrl, tech, title, github, demo, description }) => {
  return (
    <div className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 text-slate-50 border-secondary-content border-2 border-copy max-w-lg p-1 rounded-lg mr-2 w-5/6 sm:w-1/2 ">
      <Image
        src={imgUrl}
        alt={`Ben's ${title} Project`}
        width={600}
        height={400}
        quality={85}
        className="mb-3 rounded-lg object-cover"
        style={{ objectFit: "cover" }}
      />
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {tech}
      </span>
      <p className="mt-1.5 text-lg font-medium text-success-content font-bold underline">
        {title}
      </p>
      <p className="text-sm text-success-content ">{description}</p>
      <div className="flex items-center justify center gap-3 mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="h-9 text-success-content cursor-pointer hover:scale-125"
            icon={faSquareGithub}
          />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <Button className="p-1 mb-2" variant="contained">
            Demo
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
