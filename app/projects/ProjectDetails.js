"use client";
import Image from "next/image";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";

const CARD_WIDTH = 350;
const MARGIN = 20;

const ProjectDetails = ({ imgUrl, tech, title, github, demo, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 text-slate-50 border-neutral-500"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
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
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{description}</p>
      <div className="flex items-center justify center gap-3 mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="h-9 text-slate-50 cursor-pointer hover:scale-125"
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
