import React from "react";

const TypingTextContainer = ({ text, time }) => {
  return (
    <div className="typingTextContainer">
      <div className="cardBackground">
        <div className="flexEnd">
          <span className="lightFont">{time} mins on average</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TypingTextContainer;
