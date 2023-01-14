import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">B chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Test</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
