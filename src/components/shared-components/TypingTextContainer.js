import React from "react";

const TypingTextContainer = ({ text, time, wordCount }) => {
  return (
    <div className="typingTextContainer">
      <div className="cardBackground">
        <div className="flex-space-btw">
          <span className="lightFont">{wordCount} Words</span>
          <span className="lightFont">{time} mins on average</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TypingTextContainer;
