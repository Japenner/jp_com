import React from "react";
import { motion } from "framer-motion";

const AnimatedPage = (content: { children: any }) => {
  return (
    <motion.div
      className="m-4"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {content.children}
    </motion.div>
  );
};

export default AnimatedPage;
