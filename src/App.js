import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import Contact from './Contact';
import githubLogo from './github-mark/github-mark.png';
import linkedinLogo from './LinkedIn-Logos/LI-In-Bug.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <h1>Steven J Baird</h1>
          <h2>Software Engineer</h2>
        </div>
        
        <nav className="header-right">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="App-body">
        <section id="home">
          {/* Home section content */}
        </section>
        
        <section id="projects">
          <Projects />
        </section>

        <section id="about">
          {/* About section content */}
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <footer>
  <a href="https://github.com/StevenJB72">
    <img src={githubLogo} alt="Link to GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/steven-baird-b226aa290/">
    <img src={linkedinLogo} alt="Link to LinkedIn" />
  </a>
</footer>
    </div>
  );
}

export default App;