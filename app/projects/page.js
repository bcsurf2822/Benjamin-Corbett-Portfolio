import ProjectCarousel from "../components/ProjectCarousel";

export default function Projects() {
  return (
    <section
      id="project"
      className="flex scroll-mt-[80px] h-[100vh]   items-center bg-neutral-50 border-b-2 border-neutral-200 "
    >
      <ProjectCarousel />
    </section>
  );
}
