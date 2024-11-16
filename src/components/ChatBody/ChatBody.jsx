import React from "react";
import "./ChatBody.css";

const ChatBody = ({ chatData }) => {
  console.log("User Input: ", chatData);
  return (
    <div
      className="col"
      style={{
        fontSize: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
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
            <p>
              <span
                className={item.user === "bot-user" ? "botUser" : "typewriter"}
              >
                &nbsp;&nbsp;{item.msg}&nbsp;&nbsp;
              </span>
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ChatBody;
