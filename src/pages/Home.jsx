import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-950">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
