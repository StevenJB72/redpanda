import React from 'react';
import './Nav.css';

const Nav = ({ setActiveSection }) => {
  return (
    <nav className="Nav">
      <img src={require('./Logo.webp')} alt="Logo Here" />
      <ul>
        <li>
          <button onClick={() => setActiveSection('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => setActiveSection('projects')}>Projects</button>
        </li>
        <li>
          <button onClick={() => setActiveSection('about')}>About</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;