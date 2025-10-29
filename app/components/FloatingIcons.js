"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Selected tech logos for floating display
const floatingLogos = [
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

export default function FloatingIcons() {
  const containerRef = useRef(null);
  const [animatedLogos, setAnimatedLogos] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerWidth, setContainerWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    const logosPerRow = 9;
    const firstRow = floatingLogos.slice(0, logosPerRow);
    const secondRow = floatingLogos.slice(logosPerRow, logosPerRow * 2);
    const thirdRow = floatingLogos.slice(logosPerRow * 2);

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
      }));
    };

    const row1Logos = calculateRowPositions(firstRow, 40);
    const row2Logos = calculateRowPositions(secondRow, 100);
    const row3Logos = calculateRowPositions(thirdRow, 160);

    setAnimatedLogos([...row1Logos, ...row2Logos, ...row3Logos]);
  }, [containerWidth]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative w-full h-56 z-10"
      ref={containerRef}
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
                  ? repulsionY
                  : [-logo.jiggle, logo.jiggle, -logo.jiggle],
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
                filter: isHovered
                  ? "drop-shadow(0 0 10px rgba(99, 102, 241, 0.8))"
                  : "none",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
