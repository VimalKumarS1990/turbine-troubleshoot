import React from "react";
import "./ChatBody.css";
import { RiRobot3Line } from "react-icons/ri";
import TypingEffect from "../Reusable/TypingEffect/TypingEffect";

const ChatBody = ({ chatData }) => {
  console.log("User Input: ", chatData);
  return (
    <div
      className="col"
      style={{
        fontSize: "1em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {chatData?.map((item, index) =>
        item.user && item.msg ? (
          <div
            key={index}
            className="row"
            style={{
              textAlign: item.user === "bot-user" ? "end" : "left",
            }}
          >
            <div>
              <span className={item.user === "bot-user" ? "botUser" : ""}>
                <span>
                  {item.user === "bot-user" ? (
                    <span>&nbsp;&nbsp;{item.msg}&nbsp;&nbsp;</span>
                  ) : (
                    <span className="d-flex">
                      <RiRobot3Line style={{ fontSize: "1.5em" }} />
                      <TypingEffect text={item.msg} typingSpeed={50} />
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
