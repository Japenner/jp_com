import React from 'react';

// Style imports
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Header from './components/Header';
import About from './components/About';

const App = () => {

  return (
    <div>
      <Header />
      <About />
    </div>
  );
}

export default App;
