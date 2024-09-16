import React from "react";
import Navbar from "./Components/ui/Navbar";
import AboutSection from "./Components/ui/AboutSection";

const About = () => {
  return (
    <div
      className="relative items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/Main.png')` }}
    >
      <div className="relative z-10 flex justify-center pt-8">
        <Navbar />
      </div>
      <div className="py-20 text-white">
      <AboutSection /> 
      </div>
    </div>
  );
};

export default About;
