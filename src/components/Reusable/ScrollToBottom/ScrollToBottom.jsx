import React from "react";
import "./ScrollToBottom.css";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const ScrollToBottom = ({ section }) => {
  const scrollToLastChild = (e) => {
    console.log("ScrollToBottom");
    e.preventDefault();
    const targetSection = document.getElementById(section);

    if (targetSection) {
      const lastChild = targetSection.lastElementChild;

      if (lastChild) {
        lastChild.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }
  };

  return (
    <div className="scroll-to-bottom-btn">
      <button className="btn-down" onClick={scrollToLastChild}>
        <IoArrowDownCircleOutline style={{ fontSize: "2em" }} />
      </button>
    </div>
  );
};

export default ScrollToBottom;
