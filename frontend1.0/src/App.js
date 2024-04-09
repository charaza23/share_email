import React from 'react';
import './App.css';
import Home from './componenti/Home'; // Importa il componente Home.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Applicazione</h1>
      </header>
      <main>
        <Home /> {/* Includi il componente Home.js */}
      </main>
    </div>
  );
}

export default App;