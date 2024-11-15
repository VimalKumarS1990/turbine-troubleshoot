import React from "react";
import "./ChatSpace.css";

import ChatBody from "../ChatBody/ChatBody";

const ChatSpace = () => {
  return (
    <section className="chat-space card mx-1">
      <div className="card-body d-flex">
        <ChatBody />
      </div>
    </section>
  );
};

export default ChatSpace;
