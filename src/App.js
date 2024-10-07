import React from 'react';
import './App.css';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="header-left">
          <img src="" alt="Logo Here!" />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="App-body">
        <section id="home">
          <div className='main-home'>
          <h1>Steven J Baird</h1>
          <h2>Software Engineer</h2>
          </div>
        </section>
        
        <section id="projects">
          <Projects />
        </section>

        <section id="about">
          {/* About section content */}
        </section>
      </div>

      <footer className="App-footer">
        <Contact />
      </footer>
    </div>
  );
}

export default App;