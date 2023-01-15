import React from "react";
import More from "../img/more.png";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Reendu</span>
        <div className="chat-icons">
          <img src={More} alt="More" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
