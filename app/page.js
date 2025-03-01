import About from "./about/page";

import Contact from "./contact/page";
import HeroPage from "./hero/page";
import Projects from "./projects/page";

const Home = () => {
  return (
    <main>
      <HeroPage />

      <About />

      <Projects />

      <Contact />
    </main>
  );
};

export default Home;
