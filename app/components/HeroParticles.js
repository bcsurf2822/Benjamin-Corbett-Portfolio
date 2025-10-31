"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import * as THREE from "three";
import { imageToParticles, updateParticlePhysics } from "../utils/particleUtils";
import FloatingIcons from "./FloatingIcons";

// Tech logos organized in a balanced grid
const techLogos = [
  { name: "React", path: "/logos/react.svg" },
  { name: "Next.js", path: "/logos/nextdotjs.svg" },
  { name: "TypeScript", path: "/logos/typescript.svg" },
  { name: "JavaScript", path: "/logos/javascript.svg" },
  { name: "Redux", path: "/logos/redux.svg" },
  { name: "React Query", path: "/logos/reactquery.svg" },
  { name: "Tailwind CSS", path: "/logos/tailwindcss.svg" },
  { name: "Framer Motion", path: "/logos/framermotion.svg" },
  { name: "Angular", path: "/logos/angular.svg" },
  { name: "Node.js", path: "/logos/nodedotjs.svg" },
  { name: "Express", path: "/logos/express.svg" },
  { name: ".NET", path: "/logos/dotnet.svg" },
  { name: "C#", path: "/logos/csharp.svg" },
  { name: "Python", path: "/logos/python.svg" },
  { name: "Azure", path: "/logos/azure.svg" },
  { name: "AWS", path: "/logos/aws.svg" },
  { name: "GCP", path: "/logos/gcp.svg" },
  { name: "Digital Ocean", path: "/logos/digitalocean.svg" },
  { name: "OpenAI", path: "/logos/openai.svg" },
  { name: "Hugging Face", path: "/logos/huggingface.svg" },
  { name: "LangChain", path: "/logos/langchain.svg" },
  { name: "MongoDB", path: "/logos/mongodb.svg" },
  { name: "PostgreSQL", path: "/logos/postgresql.svg" },
  { name: "Firebase", path: "/logos/firebase.svg" },
  { name: "Docker", path: "/logos/docker.svg" },
  { name: "Git", path: "/logos/git.svg" },
  { name: "GitHub", path: "/logos/github.svg" },
];

export default function HeroParticles() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const logoDataRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    camera.position.z = 5;

    const logosPerRow = 9;
    const spacing = 0.8;
    const particlesPerLogo = 400;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    let intersectionPoint = null;

    async function initializeLogos() {
      const rows = Math.ceil(techLogos.length / logosPerRow);
      const logoDataArray = [];

      for (let i = 0; i < techLogos.length; i++) {
        const row = Math.floor(i / logosPerRow);
        const col = i % logosPerRow;
        const logosInThisRow = Math.min(logosPerRow, techLogos.length - row * logosPerRow);

        const offsetX = (logosInThisRow - 1) * spacing / 2;
        const offsetY = ((rows - 1) * spacing) / 2;

        const x = col * spacing - offsetX;
        const y = offsetY - row * spacing;

        try {
          const particleData = await imageToParticles(
            techLogos[i].path,
            particlesPerLogo
          );

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(particleData.positions, 3)
          );
          geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(particleData.colors, 3)
          );

          const material = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: false,
            sizeAttenuation: true,
          });

          const points = new THREE.Points(geometry, material);
          points.position.set(x, y, 0);
          scene.add(points);

          logoDataArray.push({
            points,
            geometry,
            position: { x, y, z: 0 },
            originalPositions: particleData.positions.slice(),
            velocities: particleData.velocities,
            particleCount: particleData.particleCount,
            name: techLogos[i].name,
          });
        } catch (error) {
          console.error(`[HeroParticles-initializeLogos] Failed to load ${techLogos[i].name}:`, error);
        }
      }

      logoDataRef.current = logoDataArray;
      setIsLoading(false);
    }

    initializeLogos();

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersect = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(plane, intersect)) {
        intersectionPoint = intersect;
      }
    }

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let animationId;
    function animate(time) {
      time *= 0.001;

      logoDataRef.current.forEach((logoData) => {
        const positions = logoData.geometry.attributes.position.array;

        let localIntersection = null;
        if (intersectionPoint) {
          const worldToLocal = new THREE.Vector3()
            .copy(intersectionPoint)
            .sub(logoData.points.position);
          localIntersection = worldToLocal;
        }

        updateParticlePhysics(
          {
            positions,
            velocities: logoData.velocities,
            particleCount: logoData.particleCount,
          },
          logoData.originalPositions,
          localIntersection,
          0.25,
          0.08,
          0.04,
          0.92
        );

        logoData.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    sceneRef.current = { scene, camera, renderer };
    animate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      logoDataRef.current.forEach((logoData) => {
        scene.remove(logoData.points);
        logoData.geometry.dispose();
        logoData.points.material.dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="home"
      className="h-[100vh] text-slate-100 overflow-hidden flex flex-col justify-center items-center relative"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ background: "transparent" }}
      />

      <div className="mb-24 z-20 relative p-10 rounded-[3rem] overflow-hidden">
        {/* Glass morphism background with more opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/85 via-slate-100/90 to-slate-200/85 backdrop-blur-2xl border border-white/50" />

        {/* Shimmer effect overlay */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          style={{
            width: "50%",
          }}
        />

        {/* Subtle animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(148, 163, 184, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(203, 213, 225, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(148, 163, 184, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        />

        <div className="relative z-10">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-700 md:text-8xl text-center">
              Benjamin Corbett<span className="text-slate-600">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="my-2 text-xl sm:text-2xl text-slate-600 md:my-4 md:text-4xl text-center">
              NJ Based{" "}
              <span className="font-semibold text-slate-700">
                Full-Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex justify-center mt-6">
              <Link href="#project">
                <button className="px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-lg">
                  View My Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <FloatingIcons />

      {isLoading && (
        <div className="absolute bottom-10 text-white/60 text-sm z-20">
          Loading particle effects...
        </div>
      )}
    </section>
  );
}

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
