import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default Hero;
