"use client";
import Image from "next/image";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";

const ProjectDetails = ({ imgUrl, tech, title, github, demo, description }) => {
  return (
    <div className="relative shrink-0  transition-transform hover:-translate-y-1 text-slate-50 bg-gray-300  max-w-lg p-1 rounded-lg flex flex-col justify-between gap-1 w-full  ">
      <div className="w-full h-[200px] relative">
        <Image
          src={imgUrl}
          alt={`Ben Corbett's ${title} Project`}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, 33vw"
          className="object-cover rounded-xl"
          quality={90}
        />
      </div>
      <span className="rounded-lg  bg-neutral-700 px-1 py-1 text-xs font-bold uppercase text-primary text-center">
        {tech}
      </span>{" "}
      <p className=" text-lg text-success-content font-bold underline ">
        {title}
      </p>
      <div className="h-1/2">
        <p className="text-sm text-success-content ">{description}</p>
      </div>
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
