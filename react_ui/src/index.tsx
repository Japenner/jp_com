import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./scenes/global/DotNav/DotNav.css";
import "./scenes/global/Footer/Footer.css"
import "./scenes/global/Topbar/Topbar.css";
import "./scenes/pages/Notes/NotesPage.css";
import "./scenes/pages/About/About.css";
import "./scenes/pages/Contact/Contact.css";
import "./scenes/pages/Landing/Landing.css";
import "./scenes/pages/Resume/Resume.css";
import "./App.css"
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
