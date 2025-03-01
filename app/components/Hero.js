"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

// Tech logos with your updated paths
const techLogos = [
  { name: "React", path: "/logos/react.svg", size: 40 },
  { name: "JavaScript", path: "/logos/javascript.svg", size: 36 },
  { name: "Node.js", path: "/logos/nodedotjs.svg", size: 38 },
  { name: "MongoDB", path: "/logos/mongodb.svg", size: 42 },
  { name: "Express", path: "/logos/express.svg", size: 38 },
  { name: "Redux", path: "/logos/redux.svg", size: 36 },
  { name: "Tailwind CSS", path: "/logos/tailwindcss.svg", size: 40 },
  { name: "TypeScript", path: "/logos/typescript.svg", size: 36 },
  { name: "HTML5", path: "/logos/html5.svg", size: 34 },
  { name: "CSS3", path: "/logos/css.svg", size: 34 },
  { name: "Git", path: "/logos/git.svg", size: 38 },
  { name: "GitHub", path: "/logos/github.svg", size: 40 },
  { name: "Next.js", path: "/logos/nextdotjs.svg", size: 40 },
  { name: "Mui", path: "/logos/mui.svg", size: 40 }
];

export default function Hero() {
  const containerRef = useRef(null);
  const logosContainerRef = useRef(null);
  const [animatedLogos, setAnimatedLogos] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width on mount and resize
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

  // Generate logo positions when container width changes
  useEffect(() => {
    if (containerWidth === 0) return;

    // Split logos into two rows
    const firstRow = techLogos.slice(0, 7);
    const secondRow = techLogos.slice(7);
    
    // Calculate logo positions
    const logoGap = 60; // Gap between logos
    const calculateRowPositions = (logos, rowY) => {
      const rowWidth = (logos.length - 1) * logoGap;
      const startX = (containerWidth - rowWidth) / 2;
      
      return logos.map((logo, i) => ({
        ...logo,
        baseX: startX + (i * logoGap),
        baseY: rowY,
        // Add different return durations for each logo for more realistic movement
        returnDuration: 1.2 + Math.random() * 0.8, // 1.2 to 2 seconds for return
        jiggle: 2 + Math.random() * 2,
        jiggleDuration: 2 + Math.random() * 1.5
      }));
    };
    
    // Position logos in two rows
    const row1Logos = calculateRowPositions(firstRow, 60);
    const row2Logos = calculateRowPositions(secondRow, 120);
    
    setAnimatedLogos([...row1Logos, ...row2Logos]);
  }, [containerWidth]);

  // Track mouse position
  const handleMouseMove = (e) => {
    if (!logosContainerRef.current) return;
    
    const rect = logosContainerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      id="home"
      className="h-[100vh] text-slate-100 overflow-hidden flex flex-col justify-center items-center relative"
      ref={containerRef}
    >
      {/* Name and title */}
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
      </div>

      {/* Tech logos container with mouse tracking */}
      <div 
        className="relative w-full h-44 z-10"
        ref={logosContainerRef}
        onMouseMove={handleMouseMove}
      >
        {animatedLogos.map((logo, index) => {
          // Calculate distance between mouse and this logo
          const dx = mousePosition.x - logo.baseX;
          const dy = mousePosition.y - logo.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Set the influence radius (how close the mouse needs to be to affect the logo)
          const influenceRadius = 100;
          
          // Calculate the repulsion force (stronger when closer)
          // When distance is 0, force is maximum; when distance >= influenceRadius, force is 0
          const repulsionForce = distance < influenceRadius 
            ? (1 - distance / influenceRadius) * 40 // max 40px displacement
            : 0;
            
          // Calculate the direction of repulsion (away from mouse)
          const angle = Math.atan2(dy, dx);
          const repulsionX = -Math.cos(angle) * repulsionForce;
          const repulsionY = -Math.sin(angle) * repulsionForce;
          
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: logo.baseX, top: logo.baseY }}
              animate={{
                x: distance < influenceRadius
                  ? repulsionX
                  : [
                      -logo.jiggle, 
                      logo.jiggle, 
                      -logo.jiggle
                    ],
                y: distance < influenceRadius
                  ? repulsionY
                  : [
                      -logo.jiggle, 
                      logo.jiggle, 
                      -logo.jiggle
                    ],
                rotate: distance < influenceRadius
                  ? repulsionX * 0.2 // subtle rotation away from mouse
                  : [-2, 2, -2],
              }}
              transition={{
                x: distance < influenceRadius
                  ? { 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15
                    }
                  : { 
                      duration: logo.jiggleDuration, 
                      repeat: Infinity, 
                      repeatType: "mirror" 
                    },
                y: distance < influenceRadius
                  ? { 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15
                    }
                  : { 
                      duration: logo.jiggleDuration, 
                      repeat: Infinity, 
                      repeatType: "mirror" 
                    },
                rotate: { 
                  duration: logo.jiggleDuration, 
                  repeat: Infinity, 
                  repeatType: "mirror" 
                }
              }}
            >
              <Image
                src={logo.path}
                alt={`${logo.name} logo`}
                width={logo.size}
                height={logo.size}
                className="object-contain"
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