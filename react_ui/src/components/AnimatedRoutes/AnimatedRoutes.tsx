import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Resume from "../../scenes/pages/Resume/Resume";
import NotesPage from "../../scenes/pages/Notes/NotesPage";
import Contact from "../../scenes/pages/Contact/Contact";
import Landing from "../../scenes/pages/Landing/Landing";
import About from "../../scenes/pages/About/About";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
