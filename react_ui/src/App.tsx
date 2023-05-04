import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Landing from "./scenes/pages/Landing/Landing";
import About from "./scenes/pages/About/About";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/global/Footer/Footer";

function App() {
  const [theme, colorMode] = useMode();
  const [selectedPage, setSelectedPage] = useState("");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const links: string[] = ["About"];

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
            <Topbar
              links={links}
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <main className="content">
              <Routes>
                <Route path="/" element={<Landing setSelectedPage={setSelectedPage} />} />
                <Route path="/about" element={<About setSelectedPage={setSelectedPage} />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
