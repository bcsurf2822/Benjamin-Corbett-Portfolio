"use client";

import { useRef, useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

import { projects } from "../data/projectData";
import ProjectDetails from "./ProjectDetails";

const ProjectCarousel = () => {
  const carouselRef = useRef(null);
  const leftIntervalRef = useRef(null);
  const rightIntervalRef = useRef(null);


  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const { scrollLeft, scrollWidth, offsetWidth } = carousel;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + offsetWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState);
    return () => carousel.removeEventListener("scroll", updateScrollState);
  }, []);


  const SCROLL_SPEED = 10;


  const startScrollLeft = () => {
    leftIntervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft -= SCROLL_SPEED;
      }
    }, 16); 
  };

 
  const stopScrollLeft = () => {
    clearInterval(leftIntervalRef.current);
  };

  const startScrollRight = () => {
    rightIntervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += SCROLL_SPEED;
      }
    }, 16);
  };


  const stopScrollRight = () => {
    clearInterval(rightIntervalRef.current);
  };

  const [measureRef] = useMeasure();

  return (
    <section className="relative" ref={measureRef}>
      {/* PROJECTS TITLE and ARROW BUTTONS */}
      <div className="flex justify-evenly mt-16 mb-8">
        <h2 className="text-5xl text-primary-dark font-bold">
          projects<span className="text-secondary">.</span>
        </h2>
        {/* BUTTONS */}
        <div className="flex items-center gap-2">
          <button
            className={`rounded-lg border border-neutral-700 bg-primary p-1.5 text-2xl transition-transform duration-300 hover:scale-110 ${
              canScrollLeft ? "" : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
            onMouseEnter={startScrollLeft}
            onMouseLeave={stopScrollLeft}
          >
            <FiArrowLeft />
          </button>
          <button
            className={`rounded-lg border border-neutral-700 bg-primary p-1.5 text-2xl transition-transform duration-300 hover:scale-110 ${
              canScrollRight ? "" : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
            onMouseEnter={startScrollRight}
            onMouseLeave={stopScrollRight}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-1 overflow-x-auto scroll-smooth"
      >
        {projects.map((project) => (
          <ProjectDetails key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
