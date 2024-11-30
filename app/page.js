

import About from "./about/page";
import Hero from "./components/hero/Hero";
import Contact from "./contact/page";
import Projects from "./projects/page";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
