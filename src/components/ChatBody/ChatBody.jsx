import React from "react";
import "./ChatBody.css";
import { RiRobot3Line } from "react-icons/ri";
import TypingEffect from "../Reusable/TypingEffect";
import ScrollToBottom from "../Reusable/ScrollToBottom/ScrollToBottom";

const ChatBody = ({ chatData, botUser }) => {
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
              textAlign: item.role === botUser ? "end" : "left",
            }}
          >
            <div>
              {totalCharacters > 200 && <ScrollToBottom section="parent" />}
              <span className={item.role === botUser ? "botUser" : ""}>
                <span>
                  {item.role === botUser ? (
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
