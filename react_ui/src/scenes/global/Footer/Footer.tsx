import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          Copyright © 2023 Jacob Penner
        </div>
        <nav className="footer__nav">
          <a className="footer__nav_link" href="https://github.com/japenner" aria-label="github" title="check out my github">Github</a>
          <a className="footer__nav_link" href="https://linkedin.com/in/japenner" aria-label="linkedin" title="join me on linkedin">LinkedIn</a>
          <a className="footer__nav_link" href="mailto:japenner@gmail.com?subject=Hi%20Jacob!" aria-label="email" title="send me an email">Email</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
