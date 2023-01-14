import React from "react";
import "../style.scss";
import Add from "../img/addAvatar.png";

function Register() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">B-Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter Display Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            placeholder="file"
          />
          <label htmlFor="file">
            <img src={Add} alt="Add Avatar Image"></img>
            <span>Add an Avatar</span>
          </label>
          <button> Sign Up</button>
        </form>
        <p>Already have an account ? Login</p>
      </div>
    </div>
  );
}

export default Register;
