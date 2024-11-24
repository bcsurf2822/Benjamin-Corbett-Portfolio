"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { projects } from "../data/projects";

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

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

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
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl text-slate-50">My Projects</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
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
            {projects.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, tech, title, github, demo, description }) => {
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

export default ProjectCarousel;

// const projects = [
//   {
//     id: 1,
//     imgUrl: "/images/weather-project.png",
//     tech: "React | Redux | NextJS",
//     title: "Weather Station",
//     description:
//       " A fully responsive weather application that features a custom component that uses Google Autocomplete API and Openweather API to display a 5 day forecast chart for Temperature Humidity and Pressure",
//     github: "https://github.com/bcsurf2822/WeatherStation",
//     demo: "https://weather-station-one.vercel.app/",
//   },
//   {
//     id: 2,
//     imgUrl: "/images/contact-project.png",
//     tech: "NextJs | React | Bootstrap",
//     title: "Contact List v2",
//     description:
//       "Includes features to add or delete a contact.  Double-click on the list item to view the information card of the contact.",
//     github: "https://github.com/bcsurf2822/contact-list-v2",
//     demo: "https://contact-list-v2-navy.vercel.app/",
//   },
//   {
//     id: 4,
//     imgUrl: "/images/weather-project.png",
//     tech: "React | Redux | NextJS",
//     title: "Weather Station",
//     description:
//       " A fully responsive weather application that features a custom component that uses Google Autocomplete API and Openweather API to display a 5 day forecast chart for Temperature Humidity and Pressure",
//     github: "https://github.com/bcsurf2822/WeatherStation",
//     demo: "https://weather-station-one.vercel.app/",
//   },
//   {
//     id: 5,
//     imgUrl: "/images/weather-project.png",
//     tech: "React | Redux | NextJS",
//     title: "Weather Station",
//     description:
//       " A fully responsive weather application that features a custom component that uses Google Autocomplete API and Openweather API to display a 5 day forecast chart for Temperature Humidity and Pressure",
//     github: "https://github.com/bcsurf2822/WeatherStation",
//     demo: "https://weather-station-one.vercel.app/",
//   },
//   {
//     id: 6,
//     imgUrl: "/images/weather-project.png",
//     tech: "React | Redux | NextJS",
//     title: "Weather Station",
//     description:
//       " A fully responsive weather application that features a custom component that uses Google Autocomplete API and Openweather API to display a 5 day forecast chart for Temperature Humidity and Pressure",
//     github: "https://github.com/bcsurf2822/WeatherStation",
//     demo: "https://weather-station-one.vercel.app/",
//   },
//   {
//     id: 7,
//     imgUrl: "/images/weather-project.png",
//     tech: "React | Redux | NextJS",
//     title: "Weather Station",
//     description:
//       " A fully responsive weather application that features a custom component that uses Google Autocomplete API and Openweather API to display a 5 day forecast chart for Temperature Humidity and Pressure",
//     github: "https://github.com/bcsurf2822/WeatherStation",
//     demo: "https://weather-station-one.vercel.app/",
//   },
// ];
