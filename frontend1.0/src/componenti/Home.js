import React, { useState } from 'react';
import styles from './Home.css';

function Home({ onLogout }) {
  const [inputCode, setInputCode] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/utente/${inputCode}/email`);
      if (!response.ok) {
        throw new Error('Errore durante la richiesta');
      }
      const data = await response.json();
      setEmail(data.email);
      setError('');
    } catch (error) {
      setEmail('');
      setError(error.message);
    }
  };

  const handleLogout = () => {
    // Implementa la logica per effettuare il logout sul server, se necessario

    // Reindirizza l'utente alla pagina di login o registrazione
    onLogout();
  };

  return (
    <div className={styles.container}>
      <div className={styles['form-container']}>
        <h2>Inserisci ID</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="inputCode">Codice:</label>
          <input
            type="text"
            id="inputCode"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            required
          />
          <button type="submit">Invia</button>
        </form>
        {email && <p>Email corrispondente: {email}</p>}
        {error && <p className={styles['error-message']}>{error}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
