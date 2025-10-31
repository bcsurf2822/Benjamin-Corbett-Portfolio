"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Tech logos with your updated paths
const techLogos = [
  { name: "React", path: "/logos/react.svg", size: 40 },
  { name: "Next.js", path: "/logos/nextdotjs.svg", size: 40 },
  { name: "TypeScript", path: "/logos/typescript.svg", size: 36 },
  { name: "JavaScript", path: "/logos/javascript.svg", size: 36 },
  { name: "Redux", path: "/logos/redux.svg", size: 36 },
  { name: "React Query", path: "/logos/reactquery.svg", size: 38 },
  { name: "Tailwind CSS", path: "/logos/tailwindcss.svg", size: 40 },
  { name: "Framer Motion", path: "/logos/framermotion.svg", size: 38 },
  { name: "Angular", path: "/logos/angular.svg", size: 38 },
  { name: "Node.js", path: "/logos/nodedotjs.svg", size: 38 },
  { name: "Express", path: "/logos/express.svg", size: 38 },
  { name: ".NET", path: "/logos/dotnet.svg", size: 38 },
  { name: "C#", path: "/logos/csharp.svg", size: 36 },
  { name: "Python", path: "/logos/python.svg", size: 38 },
  { name: "Azure", path: "/logos/azure.svg", size: 40 },
  { name: "AWS", path: "/logos/aws.svg", size: 40 },
  { name: "GCP", path: "/logos/gcp.svg", size: 40 },
  { name: "Digital Ocean", path: "/logos/digitalocean.svg", size: 38 },
  { name: "OpenAI", path: "/logos/openai.svg", size: 38 },
  { name: "Hugging Face", path: "/logos/huggingface.svg", size: 40 },
  { name: "LangChain", path: "/logos/langchain.svg", size: 38 },
  { name: "MongoDB", path: "/logos/mongodb.svg", size: 42 },
  { name: "PostgreSQL", path: "/logos/postgresql.svg", size: 38 },
  { name: "Firebase", path: "/logos/firebase.svg", size: 38 },
  { name: "Docker", path: "/logos/docker.svg", size: 40 },
  { name: "Git", path: "/logos/git.svg", size: 38 },
  { name: "GitHub", path: "/logos/github.svg", size: 40 },
];

export default function Hero() {
  const containerRef = useRef(null);
  const logosContainerRef = useRef(null);
  const [animatedLogos, setAnimatedLogos] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerWidth, setContainerWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    // Distribute logos across 3 rows for better layout
    const logosPerRow = 9;
    const firstRow = techLogos.slice(0, logosPerRow);
    const secondRow = techLogos.slice(logosPerRow, logosPerRow * 2);
    const thirdRow = techLogos.slice(logosPerRow * 2);

    const logoGap = 60;
    const calculateRowPositions = (logos, rowY) => {
      const rowWidth = (logos.length - 1) * logoGap;
      const startX = (containerWidth - rowWidth) / 2;

      return logos.map((logo, i) => ({
        ...logo,
        baseX: startX + i * logoGap,
        baseY: rowY,
        returnDuration: 1.2 + Math.random() * 0.8,
        jiggle: 2 + Math.random() * 2,
        jiggleDuration: 2 + Math.random() * 1.5,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      }));
    };

    const row1Logos = calculateRowPositions(firstRow, 40);
    const row2Logos = calculateRowPositions(secondRow, 100);
    const row3Logos = calculateRowPositions(thirdRow, 160);

    setAnimatedLogos([...row1Logos, ...row2Logos, ...row3Logos]);
  }, [containerWidth]);

  const handleMouseMove = (e) => {
    if (!logosContainerRef.current) return;

    const rect = logosContainerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      className="h-[100vh] text-slate-100 overflow-hidden flex flex-col justify-center items-center relative"
      ref={containerRef}
    >
      <div className="mb-24 z-20 bg-neutral-50/80 backdrop-blur-sm p-8 rounded-2xl">
        <Reveal>
          <h1 className="text-4xl sm:text-6xl font-black text-primary-dark md:text-8xl text-center">
            Benjamin Corbett<span className="text-secondary">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="my-2 text-xl sm:text-2xl text-copy md:my-4 md:text-4xl text-center">
            NJ Based{" "}
            <span className="font-semibold text-indigo-500">
              Full-Stack Developer
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <div className="flex justify-center mt-6">
            <Link href="#project">
              <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2">
                View My Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </Reveal>
      </div>

      <div
        className="relative w-full h-56 z-10"
        ref={logosContainerRef}
        onMouseMove={handleMouseMove}
      >
        {animatedLogos.map((logo, index) => {
          const dx = mousePosition.x - logo.baseX;
          const dy = mousePosition.y - logo.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const influenceRadius = 100;
          const isHovered = hoveredIndex === index;

          const repulsionForce =
            distance < influenceRadius
              ? (1 - distance / influenceRadius) * 40
              : 0;

          const angle = Math.atan2(dy, dx);
          const repulsionX = -Math.cos(angle) * repulsionForce;
          const repulsionY = -Math.sin(angle) * repulsionForce;

          // Scroll-based bounce effect
          const scrollBounce = Math.sin(scrollY * 0.02 + index) * 3;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{ left: logo.baseX, top: logo.baseY }}
              animate={{
                x:
                  distance < influenceRadius
                    ? repulsionX
                    : [-logo.jiggle, logo.jiggle, -logo.jiggle],
                y:
                  distance < influenceRadius
                    ? repulsionY + scrollBounce
                    : [-logo.jiggle, logo.jiggle, -logo.jiggle, scrollBounce],
                rotate:
                  distance < influenceRadius ? repulsionX * 0.2 : [-2, 2, -2],
                scale: isHovered ? 1.3 : 1,
              }}
              transition={{
                x:
                  distance < influenceRadius
                    ? {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }
                    : {
                        duration: logo.jiggleDuration,
                        repeat: Infinity,
                        repeatType: "mirror",
                      },
                y:
                  distance < influenceRadius
                    ? {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }
                    : {
                        duration: logo.jiggleDuration,
                        repeat: Infinity,
                        repeatType: "mirror",
                      },
                rotate: {
                  duration: logo.jiggleDuration,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                filter: [
                  "brightness(1)",
                  "brightness(1.5) saturate(1.5)",
                  "brightness(1)",
                ],
              }}
            >
              <Image
                src={logo.path}
                alt={`${logo.name} logo`}
                width={logo.size}
                height={logo.size}
                className="object-contain transition-all duration-300"
                style={{
                  filter: isHovered ? "drop-shadow(0 0 10px rgba(99, 102, 241, 0.8))" : "none",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// Reusing your existing Reveal component
const Reveal = ({ children, width = "w-fit" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${width} mx-auto`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500"
      />
    </div>
  );
};
