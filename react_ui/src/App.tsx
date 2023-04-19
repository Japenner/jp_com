import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import HomePage from './scenes/pages/HomePage';
import AboutPage from './scenes/pages/AboutPage';
import ResumePage from './scenes/pages/ResumePage';
import NotesPage from './scenes/pages/Notes/NotesPage';
import ContactPage from './scenes/pages/ContactPage';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <BrowserRouter>
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
