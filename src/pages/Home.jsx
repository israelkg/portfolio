import Hero from "../components/Hero";
import TechCarousel from "../components/TechCarousel";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="bg-cream dark:bg-ink overflow-hidden transition-colors duration-300">
      <Hero />
      <TechCarousel />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
