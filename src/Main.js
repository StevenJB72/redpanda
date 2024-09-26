import React from 'react';
import './Main.css';
import Home from'./3dimage.js';

//https://github.com/StevenJB72
//https://www.linkedin.com/in/steven-baird-b226aa290/
//make it more like an app type design 
//NOTES: add link to github, linkedin, and a CV
//NOTES: add a list of projects
//NOTES: add moving background with three.js 
//NOTES: add a landing page with an animation on it
//NOTES: make projects a list

function Main() {
  return (
    <div className="App">
      <h1>Steven Baird
        Software Engineer</h1>
      
      <div className="nav">

        <Home />
      </div>


      
    </div>
  );
}

export default Main;
