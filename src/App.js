import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigbar from "./components/Navigbar";

const App = () => {
  return ( 
  <Router>
    <Navigbar />
    <Routes>
      <Route path="/" element={<About />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;