import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
    sendCountToDjango(count + 1);
  }

  // Function to send the count to Django
  const sendCountToDjango = (countValue : number) => {
    fetch('update-count/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken(), // Include CSRF token for Django
      },
      body: JSON.stringify({ count : countValue}),
    })
    .then(response => response.json())
    .then( data => {
      if (!data.error) {
        console.log('Count sent to Django: ', data);
      }
    })
    .catch(error => console.error('Error: ', error));
  }

  // Utility function to get the CSRF token from cookies
  const getCSRFToken = () => {
    const name = 'csrftoken';
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(name))
        ?.split('=')[1];
    return cookieValue || '';
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
