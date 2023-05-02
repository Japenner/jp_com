import React from "react";
import { Box } from "@mui/material";
// import useMediaQuery from "../../../hooks/useMediaQuery";

declare type Props = {
  setSelectedPage: any;
};

const Landing = ({ setSelectedPage }: Props) => {
  // Use this to hide/show content on larger screens
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="home__container">
      <Box className="home__name">Jacob Penner</Box>
      <Box className="home__title">Full Stack Software Developer</Box>
    </div>
  );
};

export default Landing;
