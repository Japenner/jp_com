import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { motion } from "framer-motion";

declare type Props = {
  setSelectedPage: any;
};

const Landing = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="landing-container">
      {/* IMAGE SECTION */}
      <div className="landing__image-container">
        {isAboveMediumScreens ? (
          <div className="landing__image">
            <img alt="profile" src="https://github.com/japenner.png" />
          </div>
        ) : (
          <img alt="profile" src="https://github.com/japenner.png" />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="landing__main">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="landing__heading-container">
            Jacob <span className="landing__heading_last-name">Penner</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
