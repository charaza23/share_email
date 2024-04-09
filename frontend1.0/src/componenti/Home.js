import React, { useState, useEffect } from 'react';
import styles from './Home.css';

function Home() {
  const [inputCode, setInputCode] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await fetch(`/api/user/${inputCode}/email`);
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

    if (inputCode !== '') {
      fetchEmail();
    }
  }, [inputCode]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputCode.trim() !== '') {
      setInputCode(inputCode.trim());
    }
  };

  return (
    <div className={styles.container}>
      <h1>QR Code Scanner</h1>
      <div className={styles['form-container']}>
        <h2>Inserisci un codice</h2>
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
      </div>
    </div>
  );
}

export default Home;
