import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Loading from './loading'; // Import the Loading component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed
  }, []);
};




function App() {
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
