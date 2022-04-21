import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import ToDoListContainer from './components/ToDo/ToDoListContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToDoListContainer></ToDoListContainer>
    </div>
  );
}

export default App;
