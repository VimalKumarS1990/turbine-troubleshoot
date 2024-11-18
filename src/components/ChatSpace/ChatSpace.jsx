import React from "react";
import "./ChatSpace.css";

import ChatBody from "../ChatBody/ChatBody";
const ChatSpace = ({ chatData }) => {
  return (
    <section className="chat-space card mx-1">
      <div className="card-body d-flex" style={{ padding: "5px" }}>
        <ChatBody chatData={chatData} />
      </div>
    </section>
  );
};

export default ChatSpace;
