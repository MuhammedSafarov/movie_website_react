import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
      <div className="name">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className="surname">
          <label>Surname:</label>
          <input type="text" />
        </div>
        <div className="email">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="password">
          <label>Password:</label>
          <input type="password" />
        </div>
        <div className="password-link">Do you have account?</div>
        <div className="submit-div">
          <button type="button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
