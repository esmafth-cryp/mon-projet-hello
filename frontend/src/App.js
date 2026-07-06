import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Chargement...');

  useEffect(() => {
    // Appeler l'API Flask déployée sur Railway
    fetch('https://mon-projet-hello.up.railway.app/greetings')
      .then(res => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.text();
      })
      .then(data => setMessage(data))
      .catch(err => setMessage('Erreur: ' + err.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Application Full-Stack</h1>
        <p>Message du backend :</p>
        <p style={{ fontSize: '24px', color: '#61dafb' }}>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;