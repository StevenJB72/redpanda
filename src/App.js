import React from 'react';
import './App.css';
import Contact from './Contact';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <main className='main'>

        <section className='home'>
          <h1>Steven J Baird</h1>
          <p>Software Engineer</p>
        </section>
        <section className='projects'>
          <Projects />
        </section>
        <section className='about'>
          <About />
        </section>
      </main>

      <footer>
        <Contact />
      </footer>

    </div>
  );
}

export default App;