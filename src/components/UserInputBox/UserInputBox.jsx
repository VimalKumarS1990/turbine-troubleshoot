import React, { useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./UserInputBox.css";
import { MdKeyboardVoice } from "react-icons/md";
import { useSpeechRecognition } from "react-speech-kit";
const UserInputBox = (props) => {
  const { botUser, setChatData, facility, turbine } = props;

  const [inputTxt, setInputTxt] = useState("");

  const inputRef = useRef(null);

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => setInputTxt(result),
  });

  const addUserInput = (newInput) => {
    setChatData((prev) => {
      const genChatId = prev[0].chatId;
      const updatedUserInput = [
        ...prev,
        {
          ...newInput,
          chatId: genChatId,
          timestamp: new Date().toLocaleString(),
        },
      ];
      return updatedUserInput;
    });
  };

  const handleKeyInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputTxt !== "") {
        const newInput = {
          facility: facility,
          turbine: turbine,
          role: botUser,
          content: inputTxt,
        };
        addUserInput(newInput);
        setInputTxt("");
      }
      inputRef.current.focus();
    }
  };
  const handleSendButton = (event) => {
    event.preventDefault();
    if (inputTxt !== "") {
      const newInput = {
        facility: facility,
        turbine: turbine,
        role: botUser,
        content: inputTxt,
      };
      addUserInput(newInput);
      setInputTxt("");
    }
    inputRef.current.focus();
  };

  return (
    <div className="user-input bg-light">
      <div className="inner-box ">
        <button
          className="btn"
          disabled={!(facility && turbine)}
          style={{
            borderRadius: "50px",
            padding: "0",
            border: "1px solid black",
          }}
          onMouseDown={listen}
          onMouseUp={stop}
        >
          <MdKeyboardVoice style={{ width: "25px", height: "25px" }} />
        </button>

        <textarea
          type="text"
          disabled={!(facility && turbine)}
          ref={inputRef}
          value={inputTxt}
          placeholder={
            !(facility && turbine)
              ? "Please select Facility & Turbine to enable chat"
              : "Enter the Scada ID/Error Description!"
          }
          className="txt-area"
          onKeyDown={handleKeyInput}
          onChange={(e) => setInputTxt(e.target.value)}
          style={{ height: inputTxt.length > 100 ? "50px" : "30px" }}
        ></textarea>
        <button
          className="btn"
          disabled={!(facility && turbine)}
          style={{
            borderRadius: "50px",
            padding: "0",
            border: "1px solid black",
          }}
          onClick={handleSendButton}
        >
          <FaArrowCircleUp style={{ width: "32px", height: "32px" }} />
        </button>
      </div>
    </div>
  );
};

export default UserInputBox;
