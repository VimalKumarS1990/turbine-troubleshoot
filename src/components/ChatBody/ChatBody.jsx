import React from "react";
import "./ChatBody.css";

const ChatBody = ({ userInput }) => {
  console.log(userInput);
  return (
    <div style={{ fontSize: "1em", display: "inline-block" }}>
      {/* <Typewriter words={userInput} typeSpeed={60} cursor={true} loop={1} /> */}
      <ul className="list-unstyled">
        {userInput?.map((item, index) =>
          item.user && item.msg ? (
            <li key={index} className="question">
              <p className={userInput.length ? "typewriter" : ""}>{item.msg}</p>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ChatBody;
