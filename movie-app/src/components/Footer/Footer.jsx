import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <button className="signin-btn">Sign in for more access</button>
      <div className="social-media-icons">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/muhammed-safarov-ba0498246/"
            target="_blank" rel="noopener noreferrer"
          >
            <BsLinkedin className="linkedin icon" />
          </a>
          <a href="https://www.instagram.com/_iamsafarov/" target="_blank" rel="noopener noreferrer">
            <BsInstagram className="instagram icon" />
          </a>
          <a href="https://github.com/MuhammedSafarov" target="_blank" rel="noopener noreferrer">
            <BsGithub className="github icon" />
          </a>
        </div>
      </div>
      <div className="lists">
        <ul className="footer-list">
          <li>Press Room</li>
          <li>Advertising</li>
          <li>Jobs</li>
          <li>Condition of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="copy-right">© 2023 by Muhammed Safarov</div>
    </div>
  );
};

export default Footer;
