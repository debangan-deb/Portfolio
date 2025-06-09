import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div >
      <Navbar />
      <main >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
