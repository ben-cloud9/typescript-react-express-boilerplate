import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const talkToBackend = async () => {
    const res = await axios.get('/api/ping');
    console.log(res.data);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={talkToBackend}>talk to backend</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
