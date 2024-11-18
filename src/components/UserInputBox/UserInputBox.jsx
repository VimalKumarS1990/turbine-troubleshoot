import React, { useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./UserInputBox.css";
import { MdKeyboardVoice } from "react-icons/md";
const UserInputBox = (props) => {
  const { botUser, setChatData, toast, facility, turbine } = props;

  const [inputTxt, setInputTxt] = useState("");

  const inputRef = useRef(null);

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

  const handleTxtToSpeech = () => {
    toast.error("This feature is currently not available!");
    inputRef.current.focus();
  };

  return (
    <div className="user-input bg-light">
      <div className="inner-box ">
        <button
          className="btn"
          disabled={!(facility && turbine)}
          style={{ borderRadius: "50px", padding: "0" }}
          onClick={handleTxtToSpeech}
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
