import React, { useState } from 'react';
import './App.css';
import Login from './componenti/Login';
import Registrazione from './componenti/Registrazione';
import Home from './componenti/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setCurrentPage('home');
  };

  const handleRegistrazione = () => {
    setCurrentPage('registrazione');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  return (
    <div className="App">
      {currentPage === 'login' && <Login onRegistratiClick={handleRegistrazione} onLogin={handleLogin} />}
      {currentPage === 'registrazione' && <Registrazione onLoginClick={handleLogin} />}
      {currentPage === 'home' && <Home onLogout={handleLogout} />}
    </div>
  );
}

export default App;
