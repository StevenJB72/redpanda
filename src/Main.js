// Main.js
import React, { useState } from 'react';
import './Main.css';
import Home from './Background'; // Assuming this renders the Spline background

function Main() {
  // State to manage the visibility of the contact card
  const [showContactCard, setShowContactCard] = useState(false);

  // Toggle the contact card visibility
  const handleContactClick = () => {
    setShowContactCard(!showContactCard);
  };

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
          <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
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

      {/* Contact Card */}
      {showContactCard && (
        <div className="contact-card">
          <button className="close-btn" onClick={handleContactClick}>X</button>
          <h2>Contact Me</h2>
          <p>
            <a href="https://github.com/StevenJB72" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/steven-baird-b226aa290/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Main;
