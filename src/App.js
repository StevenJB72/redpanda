import logo from './logo.svg';
import './App.css';
import Loading from '.Loading';
import React, { useState, useEffect } from 'react';


function App() {


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a data fetching operation
    setTimeout(() => {
      setData({ message: 'Data fetched successfully!' });
      setIsLoading(false);
    }, 3000); // Example delay of 3 seconds
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading /> : <h1>Loaded!</h1>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
