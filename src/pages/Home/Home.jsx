import About from "../../modules/About/About";
import Contact from "../../modules/contact/Contact";
import Hero from "../../modules/hero/Hero";
import Vision from "../../modules/vision/Vision";
import React from "react";

const Home = () => {


  return (
    <div>
      <Hero />
      <About />
      <Vision />
      <Contact />
    </div>
  );
};

export default Home;
