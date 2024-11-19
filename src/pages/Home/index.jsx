// import React from 'react'
// import style from "./style.module.css";

import AboutSection from "../../components/AboutSection";
import HomeSection from "../../components/HomeSection";
import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <main id="scroll-container" >
        <HomeSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Home;
