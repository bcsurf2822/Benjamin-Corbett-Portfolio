"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

import { projects } from "./projectData";
import ProjectDetails from "./ProjectDetails";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;
const SCROLL_INCREMENT = CARD_SIZE / 2;

const ProjectCarousel = () => {
  const [ref] = useMeasure();
  const [offset, setOffset] = useState(0);


  const CARD_BUFFER = 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) <= CARD_SIZE * (projects.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((prev) => prev + SCROLL_INCREMENT);
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((prev) => prev - SCROLL_INCREMENT);
  };

  return (
    <section id="project" className="overflow-x-hidden relative" ref={ref}>
      {/* PROJECTS TITLE and ARROW BUTTONS */}
      <div className="flex justify-evenly mb-4">
        <h2 className="text-3xl text-primary-dark font-bold">
          projects<span className="text-secondary">.</span>
        </h2>
        {/* BUTTONS */}
        <div className="flex items-center gap-2">
          <button
            className={`rounded-lg border-[1px] border-neutral-700 bg-success p-1.5 text-2xl transition-opacity ${
              CAN_SHIFT_LEFT ? "" : "opacity-30"
            }`}
            disabled={!CAN_SHIFT_LEFT}
            onClick={shiftLeft}
          >
            <FiArrowLeft />
          </button>
          <button
            className={`rounded-lg border-[1px] border-neutral-700 bg-success p-1.5 text-2xl transition-opacity ${
              CAN_SHIFT_RIGHT ? "" : "opacity-30"
            }`}
            disabled={!CAN_SHIFT_RIGHT}
            onClick={shiftRight}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
      <motion.div
        animate={{ x: offset }}
        transition={{ ease: "easeInOut" }}
        className="flex gap-1"
      >
        {projects.map((project) => (
          <ProjectDetails key={project.id} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectCarousel;
