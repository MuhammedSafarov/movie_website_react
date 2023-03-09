import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="navbar-name">M's MOVIE</div>
      </div>
      <ul className="navbar-sections">
        <li>Regiter</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
