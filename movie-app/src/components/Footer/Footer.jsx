import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <button className="signin-btn">Sign in for more access</button>
      <div className="social-media-icons">
        <div className="icons">
          <BsLinkedin className="linkedin icon" />
          <BsInstagram className="instagram icon" />
          <BsGithub className="github icon" />
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
