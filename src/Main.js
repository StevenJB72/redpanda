// Main.js
import React from 'react';
import './Main.css';
import Home from './Background'; // Assuming this renders the Spline background

function Main() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-title">
          <span className="name">Steven J Baird</span>
          <span className="profession">Software Engineer</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Spline Background */}
      <div className="background-container">
        <Home />
      </div>

      {/* Overlay Content */}
      <div className="content">
        <h2>Welcome to My Portfolio</h2>
        <p>This section can contain your information and other content displayed over the background.</p>
      </div>
    </div>
  );
}

export default Main;
