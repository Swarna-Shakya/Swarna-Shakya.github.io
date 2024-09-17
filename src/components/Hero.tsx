import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Hero;
