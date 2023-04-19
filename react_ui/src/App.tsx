import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import HomePage from './scenes/pages/HomePage';
import AboutPage from './scenes/pages/AboutPage';
import ResumePage from './scenes/pages/ResumePage';
import NotesPage from './scenes/pages/Notes/NotesPage';
import ContactPage from './scenes/pages/ContactPage';
// import { useState } from 'react';
// import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
// import ProSidebar from './scenes/global/ProSidebar';
// import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <ProSidebarProvider> */}
          <div className="app">
            <BrowserRouter>
              {/* <ProSidebar /> */}
              <main className="content">
                <Topbar />
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
        {/* </ProSidebarProvider> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
