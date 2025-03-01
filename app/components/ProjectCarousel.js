"use client";
import { useRef, useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { projects } from "../data/projectData";
import ProjectDetails from "./ProjectDetails";
import MobileProjectCards from "./MobileProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCarousel = () => {
  const carouselRef = useRef(null);
  const leftIntervalRef = useRef(null);
  const rightIntervalRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  // Track which project is expanded (if any)
  const [expandedProjectId, setExpandedProjectId] = useState(null);

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

  // Scroll settings
  const SCROLL_SPEED = 20;
  const SCROLL_DISTANCE = 400;

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

  // One-time scroll functions for click events
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -SCROLL_DISTANCE,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: SCROLL_DISTANCE,
        behavior: 'smooth'
      });
    }
  };

  // Handle toggling project expansion
  const handleToggleProject = (projectId) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  const [measureRef] = useMeasure();

  return (
    <div className="w-full" ref={measureRef}>
      {/* Title Section - Visible on both desktop and mobile */}
      <div className="text-center py-6 md:py-8">
        <h2 className="text-4xl md:text-5xl text-primary-dark font-bold inline-block relative">
          projects<span className="text-secondary">.</span>
        </h2>
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex justify-end px-8 mb-4">
          <div className="flex items-center gap-4">
            <button
              className={`transition-transform duration-300 hover:scale-110 focus:outline-none ${
                canScrollLeft ? "" : "opacity-40 cursor-not-allowed"
              }`}
              disabled={!canScrollLeft}
              onClick={scrollLeft}
              onMouseEnter={startScrollLeft}
              onMouseLeave={stopScrollLeft}
              aria-label="Scroll left"
            >
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className="text-3xl text-primary"
                style={{
                  filter: canScrollLeft ? 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.15))' : 'none'
                }}
              />
            </button>
            <button
              className={`transition-transform duration-300 hover:scale-110 focus:outline-none ${
                canScrollRight ? "" : "opacity-40 cursor-not-allowed"
              }`}
              disabled={!canScrollRight}
              onClick={scrollRight}
              onMouseEnter={startScrollRight}
              onMouseLeave={stopScrollRight}
              aria-label="Scroll right"
            >
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="text-3xl text-primary"
                style={{
                  filter: canScrollRight ? 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.15))' : 'none'
                }}
              />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-8 pb-4 carousel-container"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent'
          }}
        >
          {projects.map((project) => (
            <ProjectDetails key={project.id} {...project} />
          ))}
        </div>
        
        {/* Add this CSS to make scrollbar always visible */}
        <style jsx global>{`
          .carousel-container::-webkit-scrollbar {
            height: 8px;
            display: block;
          }
          
          .carousel-container::-webkit-scrollbar-track {
            background: rgba(243, 244, 246, 0.5);
            border-radius: 20px;
          }
          
          .carousel-container::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.5);
            border-radius: 20px;
            border: 2px solid rgba(243, 244, 246, 0.5);
          }
          
          .carousel-container::-webkit-scrollbar-thumb:hover {
            background-color: rgba(156, 163, 175, 0.8);
          }
          
          /* For Firefox */
          .carousel-container {
            scrollbar-width: thin;
            scrollbar-color: rgba(156, 163, 175, 0.5) rgba(243, 244, 246, 0.5);
          }
        `}</style>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="px-6 pb-12">
          {projects.map((project) => (
            <MobileProjectCards 
              key={project.id} 
              project={project} 
              isExpanded={expandedProjectId === project.id}
              onToggle={() => handleToggleProject(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;