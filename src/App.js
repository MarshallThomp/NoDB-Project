import React from 'react';
import './PawPrintsApp.css';
import Nav from './components/Nav'
import Dogs from './components/Dogs' 


function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <Dogs />
      <footer>
        Marshall Thompson
      </footer>
    </div>
  );
}

export default App;
