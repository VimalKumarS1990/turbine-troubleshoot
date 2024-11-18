import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, typingSpeed }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index, text.length, typingSpeed]);

  return (
    <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
      <span>{text.substring(0, index)}</span>
    </div>
  );
};

export default TypingEffect;
