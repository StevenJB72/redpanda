import React, { useState } from 'react';
import './App.css';
import Contact from './Contact';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';

function App() {
  // State to track the currently selected section
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <header>
        {/* Pass the setActiveSection function to Nav so it can update the state */}
        <Nav setActiveSection={setActiveSection} />
      </header>

      <main className='main'>
        {/* Conditional rendering based on activeSection state */}
        {activeSection === 'home' && (
          <section className='home'>
            <h1>Steven J Baird</h1>
            <p>Software Engineer</p>
          </section>
        )}
        {activeSection === 'projects' && (
          <section className='projects'>
            <Projects />
          </section>
        )}
        {activeSection === 'about' && (
          <section className='about'>
            <About />
          </section>
        )}
      </main>

      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;