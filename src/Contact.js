import React from 'react';
import './Contact.css';
import githubLogo from './github-mark/github-mark.svg';
import linkedinLogo from './LinkedIn-Logos/LinkedIn_icon.svg';


const Contact = () => {
    return (
        <div className="contact">
            <a href="https://github.com/StevenJB72" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="Link to GitHub" className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/steven-baird-b226aa290/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="Link to LinkedIn" className="contact-icon" />
            </a>
        </div>
    );
};

export default Contact;