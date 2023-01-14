import React from "react";

function Register() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">B-Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <input type="file" />
          <button> Sign Up</button>
        </form>
        <p>Do not have an account ? Login</p>
      </div>
    </div>
  );
}

export default Register;
