import React from "react";
import More from "../img/more.png";
import Input from "./Input";
import Messages from "./Messages";

function Chat() {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Reendu</span>
        <div className="chat-icons">
          <img src={More} alt="More" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
