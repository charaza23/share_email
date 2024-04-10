import React, { useState } from 'react';

const Login = ({ onRegistratiClick, onLogin }) => { // Aggiunto onLogin alle props

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Effettua la richiesta al server per il login
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Se la richiesta ha successo, imposta lo stato dell'utente come autenticato
      if (response.ok) {
        onLogin(); // Invoca la funzione di login passata come prop
      } else {
        throw new Error('Credenziali non valide');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className = "Login">
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleLogin}>Login</button> {/* Aggiunto onClick per invocare handleLogin */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Non hai un account? <button onClick={onRegistratiClick}>Registrati</button></p>
    </div>
  );
};

export default Login;
