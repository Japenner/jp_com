import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import HomePage from "./scenes/pages/Home/HomePage";
import AboutPage from "./scenes/pages/AboutPage";
import ResumePage from "./scenes/pages/ResumePage";
import NotesPage from "./scenes/pages/Notes/NotesPage";
import ContactPage from "./scenes/pages/ContactPage";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
// import useMediaQuery from "./hooks/useMediaQuery";
// import DotNav from "./scenes/global/DotNav/DotNav";

function App() {
  const [theme, colorMode] = useMode();
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [user, setUser] = useState({});
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  // const links: string[] = ["Home", "About", "Resume", "Notes", "Contact"];
  const links: string[] = ["Notes"];

  const handleCallbackResponse = (response: any) => {
    setUser(jwtDecode(response.credential));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    /* global google */
    // @ts-ignore
    google.accounts.id.initialize({
      client_id:"",
      callback: handleCallbackResponse,
      // project_id:"polished-watch-128122",
      // auth_uri:"https://accounts.google.com/o/oauth2/auth",
      // token_uri:"https://oauth2.googleapis.com/token",
      // auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
      // redirect_uris:["http://localhost:4000","https://jacobpenner.com","http://localhost"],
      // javascript_origins:["http://localhost:4000","https://jacobpenner.com","http://localhost"]
    });

    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, []);

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
              {/* <DotNav
                links={links}
                isAboveMediumScreens={isAboveMediumScreens}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
