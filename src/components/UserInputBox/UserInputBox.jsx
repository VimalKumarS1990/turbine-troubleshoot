import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./UserInputBox.css";
import { MdKeyboardVoice } from "react-icons/md";

const UserInputBox = () => {
  return (
    <div className="user-input bg-light">
      <div className="inner-box ">
        <MdKeyboardVoice
          style={{ marginLeft: "20px", width: "25px", height: "25px" }}
        />
        <textarea
          placeholder="Enter the error code!"
          className="txt-area"
        ></textarea>
        <button className="btn" style={{ borderRadius: "50px", padding: "0" }}>
          <FaArrowCircleUp style={{ width: "32px", height: "32px" }} />
        </button>
      </div>
    </div>
  );
};

export default UserInputBox;
