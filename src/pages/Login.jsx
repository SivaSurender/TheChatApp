import React from "react";
import "../style.scss";
import Add from "../img/addAvatar.png";

function Login() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">B-Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />

          <button> Sign In</button>
        </form>
        <p>Don't havean account? Register</p>
      </div>
    </div>
  );
}

export default Login;
