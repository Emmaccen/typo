import React, { useEffect, useState } from "react";
import { Progress, Input } from "antd";
import TypingTextContainer from "../components/shared-components/TypingTextContainer";
import { calculator } from "../utils/shared-function/testCalculator";
import "../styles/testStartPage.scss";
const { TextArea } = Input;

const content =
  "Of course, describing real objects as both particles and waves is necessarily somewhat imprecise. Properly speaking, the objects described by quantum physics are neither particles nor waves, but a third category that shares some properties of waves";

const TestStartPage = () => {
  const [refresh, setRefresh] = useState(false);
  const [userTimer, setUserTimer] = useState({
    initialTime: 60_000,
  });
  const [userInput, setUserInput] = useState("");
  const [userInfo, setUserInfo] = useState({
    totalTestWords: `${calculator.checkTotalWords(content)}`,
    averageTimeRequired: `${calculator.calculateAverageTimeRequiredToType(
      content
    )}`,
    textContent: content,
    totalTimeSet: 10_000,
    timeLeft: "",
  });
  const [result, setResult] = useState({
    correctWords: 0,
    wrongWords: 0,
    totalTypedWords: "",
    completionStatus: "",
    accuracy: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setRefresh(new Date().getTime().toLocaleString());
      setResult({
        ...result,
        ...calculator.recalculateUserResults(userInfo, userInput),
      });
    }, 5000);
  }, [refresh]);

  useEffect(() => {
    // window.speechSynthesis.speak(new SpeechSynthesisUtterance(content));
  }, []);

  //   const recalculateUserResults = () => {
  //     let values = calculator.calculateCorrectAndWrongWords(userInput, content);
  //     values["accuracy"] = (
  //       (values.correctWords / userInfo.totalTestWords) *
  //       100
  //     ).toFixed(0);

  //     setResult({ ...result, ...values });
  //     console.log({ result });
  //   };
  return (
    <div className="testStartPageContainer">
      <div className="grid textInputArea">
        <div className="actionArea">
          <TypingTextContainer
            text={content}
            time={userInfo.averageTimeRequired}
          />
          <TextArea
            onChange={(e) => setUserInput(e.target.value.toLowerCase())}
            value={userInput}
            placeholder="Start typing here..."
            rows={6}
          />
        </div>

        <div className="centered analytics">
          <div>
            <div className="textCenter">
              <Progress type="circle" percent={30} width={150} />
              <p>Time Left</p>
            </div>
            <div className="flexWrap">
              <span className="capsule textnoWrap">
                Total Words : {calculator.checkTotalWords(content)}
                Correct Words : {result.correctWords}
                Wrong Words : {result.wrongWords}
                Accuracy : {result.accuracy}% completionStatus :
                {result.completionStatus}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestStartPage;
