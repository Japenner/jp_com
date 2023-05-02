import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Landing from "./scenes/sections/Landing/Landing";
import About from "./scenes/sections/About/About";
import Resume from "./scenes/sections/Resume/Resume";
import NotesPage from "./scenes/pages/Notes/NotesPage";
import Contact from "./scenes/sections/Contact/Contact";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotNav from "./scenes/global/DotNav/DotNav";
import { motion } from "framer-motion";

function App() {
  const [theme, colorMode] = useMode();
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const links: string[] = ["Home", "About"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <BrowserRouter>
            <main className="content">
              <Topbar
                links={links}
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <DotNav
                links={links}
                isAboveMediumScreens={isAboveMediumScreens}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <section id="home" className="section__landing">
                <motion.div
                  style={{ margin: "0 0 -200px 0" }}
                  viewport={{ amount: "all" }}
                  onViewportEnter={() => setSelectedPage("home")}
                >
                  <Landing setSelectedPage={setSelectedPage} />
                </motion.div>
              </section>
              <section id="about" className="section__about">
                <motion.div
                  style={{ margin: "0 0 -200px 0" }}
                  viewport={{ amount: "all" }}
                  onViewportEnter={() => setSelectedPage("about")}
                >
                  <About />
                </motion.div>
              </section>
              <section id="resume" className="section__resume">
                <motion.div
                  style={{ margin: "0 0 -200px 0" }}
                  viewport={{ amount: "all" }}
                  onViewportEnter={() => setSelectedPage("resume")}
                >
                  <Resume />
                </motion.div>
              </section>
              <section id="contact" className="section__contact">
                <motion.div
                  style={{ margin: "0 0 -200px 0" }}
                  viewport={{ amount: "all" }}
                  onViewportEnter={() => setSelectedPage("contact")}
                >
                  <Contact />
                </motion.div>
              </section>
              <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                {/* <Route path="/about" element={<AboutPage />} /> */}
                {/* <Route path="/resume" element={<ResumePage />} /> */}
                <Route path="/notes" element={<NotesPage />} />
                {/* <Route path="/contact" element={<ContactPage />} /> */}
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
