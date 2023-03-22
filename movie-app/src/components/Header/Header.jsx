import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="navbar-name">
          <Link className="name-link" to="/">
            M's MOVIE
          </Link>
        </div>
      </div>
      <ul className="navbar-sections">
        <li>Regiter</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
