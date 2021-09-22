import Layout from "../src/shared/Layout";
import Intro from "../src/sections/Intro";
import About from "../src/sections/About";
import Projects from "../src/sections/Projects";
import ProjectsScroll from "../src/sections/ProjectsScroll";
import Contact from "../src/sections/Contact";

export default function Home() {
  return (
    <Layout footerColor="FBFBFB">
      <Intro />
      <About />
      <Projects />
      <ProjectsScroll />
      <Contact />
    </Layout>
  );
}
