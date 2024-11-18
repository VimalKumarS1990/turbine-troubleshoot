import React from "react";
import "./ChatBody.css";
import { RiRobot3Line } from "react-icons/ri";
import TypingEffect from "../Reusable/TypingEffect";
import ScrollToBottom from "../Reusable/ScrollToBottom/ScrollToBottom";

const ChatBody = ({ chatData }) => {
  console.log("Chat-Data: ", chatData);

  const totalCharacters = chatData.reduce((sum, obj) => {
    const characterCount = obj.content.length;
    return sum + characterCount;
  }, 0);

  return (
    <div id="parent" className="col chat-container">
      {chatData?.map((item, index) =>
        item.role && item.content ? (
          <div
            key={index}
            className="row pb-3"
            style={{
              textAlign: item.role === "bot-user" ? "end" : "left",
            }}
          >
            <div>
              {totalCharacters > 200 && <ScrollToBottom section="parent" />}
              <span className={item.role === "bot-user" ? "botUser" : ""}>
                <span>
                  {item.role === "bot-user" ? (
                    <span>&nbsp;&nbsp;{item.content}&nbsp;&nbsp;</span>
                  ) : (
                    <span className="d-flex">
                      <RiRobot3Line style={{ fontSize: "1.5em" }} />
                      <TypingEffect text={item.content} typingSpeed={50} />
                    </span>
                  )}
                </span>
              </span>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ChatBody;
