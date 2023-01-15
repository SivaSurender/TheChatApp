import React, { useState } from "react";
import "../style.scss";
import Add from "../img/addAvatar.png";

import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "firebase/auth";

function Register() {
  const [isError, setIsError] = useState(false);
  const submitHandler = async (event) => {
    event.preventDefault();

    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files;

    try {
      const response = await createUserWithEmailAndPassword(email, password);

      console.log(response);
    } catch (error) {
      setIsError(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">B-Chat</span>
        <span className="title">Register</span>
        <form onSubmit={submitHandler}>
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
      {isError && (
        <span>Sorry Something went wrong please try again later</span>
      )}
    </div>
  );
}

export default Register;
