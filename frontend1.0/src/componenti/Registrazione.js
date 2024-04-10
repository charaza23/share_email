import React, { useState } from 'react';

const Registrazione = ({ onLoginClick }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRegistrazione = async () => {
    try {
      // Effettua la richiesta al server per la registrazione
      const response = await fetch('/api/registrazione', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      // Se la richiesta ha successo, esegui il login utilizzando la funzione onLoginClick
      if (response.ok) {
        onLoginClick(); // Effettua il login
      } else {
        throw new Error('Errore durante la registrazione');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Registrazione</h2>
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
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button onClick={handleRegistrazione}>Registrati</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Hai già un account? <button onClick={onLoginClick}>Login</button></p>
    </div>
  );
};

export default Registrazione;
