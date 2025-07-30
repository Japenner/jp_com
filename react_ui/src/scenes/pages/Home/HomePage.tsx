import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <Box className="home__container">
      <Box className="home__name">Jacob Penner</Box>
      <Box className="home__title">Full Stack Software Developer</Box>
      <Box>
        <HeroSection />
      </Box>
    </Box>
  );
};

export default HomePage;
