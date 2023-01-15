import React from "react";

function Message() {
  return (
    <div className="message">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt="Sender Photo"
        />
        <span>Just Now</span>
      </div>
      <div className="message-content">
        <p>hello </p>
        <img
          src="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt="Receiver Photo"
        />
      </div>
    </div>
  );
}

export default Message;
