import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="email">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="password">
          <label>Password:</label>
          <input type="password" />
        </div>
        <div className='password-link'>Forget password?</div>
        <div className="submit-div"><button type="button">Login</button></div>
      </form>
    </div>
  );
};

export default Login;
