import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ResumePage from "../../scenes/pages/ResumePage";
import NotesPage from "../../scenes/pages/Notes/NotesPage";
import ContactPage from "../../scenes/pages/ContactPage";
import HomePage from "../../scenes/pages/Home/HomePage";
import AboutPage from "../../scenes/pages/AboutPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
