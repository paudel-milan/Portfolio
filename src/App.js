import React from "react";
import Header from "./Components/Header";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Hero from "./Components/Hero";


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
};

export default App;
