import React, { useEffect } from "react";
// import useMediaQuery from "../../../hooks/useMediaQuery";

declare type Props = {
  setSelectedPage: any;
};

const Landing = (props: Props) => {
  // Use this to hide/show content on larger screens
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { setSelectedPage } = props;

  useEffect(() => {
    setSelectedPage("home");
  });

  return (
    <div className="home__container">
      <div className="home__intro">I'm <span className="home__name">Jacob Penner</span>,</div>
      <div className="home__title">a full stack alchemist, transforming experience into growth</div>
    </div>
  );
};

export default Landing;
