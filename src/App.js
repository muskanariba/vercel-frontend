import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Correct URL for your Vercel backend
    fetch('https://vercel-backend-ten-phi.vercel.app/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>hello frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
