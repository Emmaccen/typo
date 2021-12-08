import React, { useState, useEffect } from "react";

const TypingTextContainer = ({
  text,
  time,
  wordCount,
  wrongWordsToHighlight,
}) => {
  const [words, setWords] = useState(text);

  useEffect(() => {
    setWords(() => {
      let placeInDom = text.trim().split(" ");
      wrongWordsToHighlight.forEach((key) => {
        // console.log("Wrong : ", key, "pos : ", Object.keys(key)[0]);
        // console.log(wrongWordsToHighlight);
        placeInDom[
          Object.keys(key)[0]
        ] = `<span style="color: red; text-decoration : underline">${
          placeInDom[Object.keys(key)[0]]
        }</span>`;
      });

      let result = "";
      placeInDom.forEach((item) => (result += item + " "));
      console.log(result);

      return result;
    });
  }, [wrongWordsToHighlight]);

  return (
    <div className="lucius">
      <div className="typingTextContainer">
        <div className="cardBackground">
          <div className="flex-space-btw">
            <span className="lightFont">{wordCount} Words</span>
            <span className="lightFont">{time} mins on average</span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: words }}></p>
        </div>
      </div>
    </div>
  );
};

export default TypingTextContainer;
