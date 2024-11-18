import React, { useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./UserInputBox.css";
import { MdKeyboardVoice } from "react-icons/md";
const UserInputBox = (props) => {
  const { disableUserInput, botUser, setChatData, toast } = props;

  const [inputTxt, setInputTxt] = useState("");

  const inputRef = useRef(null);

  const addUserInput = (newInput) => {
    setChatData((prev) => {
      const updatedUserInput = [...prev];
      updatedUserInput.push(newInput);
      return updatedUserInput;
    });
  };

  const handleKeyInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputTxt !== "") {
        const newInput = { role: botUser, content: inputTxt };
        addUserInput(newInput);
        setInputTxt("");
      }
      inputRef.current.focus();
    }
  };
  const handleSendButton = (event) => {
    event.preventDefault();
    if (inputTxt !== "") {
      const newInput = { role: botUser, content: inputTxt };
      addUserInput(newInput);
      setInputTxt("");
    }
    inputRef.current.focus();
  };

  const handleTxtToSpeech = () => {
    toast.error("This feature is currently not available!");
    inputRef.current.focus();
  };

  return (
    <div className="user-input bg-light">
      <div className="inner-box ">
        <button
          className="btn"
          style={{ borderRadius: "50px", padding: "0" }}
          onClick={handleTxtToSpeech}
        >
          <MdKeyboardVoice style={{ width: "25px", height: "25px" }} />
        </button>

        <textarea
          type="text"
          disabled={disableUserInput}
          ref={inputRef}
          value={inputTxt}
          placeholder="Enter the error code!"
          className="txt-area"
          onKeyDown={handleKeyInput}
          onChange={(e) => setInputTxt(e.target.value)}
          style={{ height: inputTxt.length > 100 ? "50px" : "30px" }}
        ></textarea>
        <button
          className="btn"
          style={{ borderRadius: "50px", padding: "0" }}
          onClick={handleSendButton}
        >
          <FaArrowCircleUp style={{ width: "32px", height: "32px" }} />
        </button>
      </div>
    </div>
  );
};

export default UserInputBox;
