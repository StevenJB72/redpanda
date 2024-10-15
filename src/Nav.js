import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
      <nav className="Nav">
        <img src={require('./Logo.webp')} alt="Logo Here" />
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        </ul>
      </nav>
    ); 
};

export default Nav;