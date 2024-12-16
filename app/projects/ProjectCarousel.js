"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

import { projects } from "../data/projects";
import ProjectDetails from "./ProjectDetails";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const ProjectCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  // const CARD_BUFFER =
  //   width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;
  const CARD_BUFFER = 1

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (projects.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="h-[100vh] py-8 mt-10" ref={ref}>
      <div className="relative ">
        <div className="  rounded-lg p-5  ">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl text-primary-dark font-bold">
            projects<span className="text-secondary">.</span>
            </h2>

            <div className="flex items-center gap-2 ">
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
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {projects.map((project) => {
              return <ProjectDetails key={project.id} {...project} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
