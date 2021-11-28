import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { Badge, Input, Progress, Divider, Button } from "antd";
import React, { useEffect, useState } from "react";
import TypingTextContainer from "../components/shared-components/TypingTextContainer";
import "../styles/testStartPage.scss";
import { calculator } from "../utils/shared-function/testCalculator";
import { useLocation, useNavigate } from "react-router-dom";
import { dataHandler } from "../utils/shared-function/dataHandler";
const { TextArea } = Input;

const content =
  "Of course, describing real objects as both particles and waves is necessarily somewhat imprecise. Properly speaking, the objects described by quantum physics are neither particles nor waves, but a third category that shares some properties of waves";

const TestStartPage = () => {
  const [refresh, setRefresh] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [userTimer, setUserTimer] = useState({
    initialTime: 120_000,
    timeLeft: 120_000,
  });
  const [endTest, setEndTest] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userInfo, setUserInfo] = useState({
    totalTestWords: 0,
    averageTimeRequired: 0,
    textContent: "",
  });
  const [result, setResult] = useState({
    correctWords: 0,
    wrongWords: 0,
    totalTypedWords: 0,
    completionStatus: 0,
    accuracy: 0,
  });

  useEffect(() => {
    // check if user is not manually routing to this page
    // if they are? take them back to test page
    !location?.state?.newChallenge && navigate("/test", { replace: true });
  }, []);

  useEffect(() => {
    // window.speechSynthesis.speak(new SpeechSynthesisUtterance(content));
    let data = dataHandler.getStateFromLocalStorage("userInfo");
    if (data) {
      const { userTimer, textContent } = data;
      setUserTimer({
        initialTime: userTimer,
        timeLeft: userTimer,
      });
      setUserInfo({
        totalTestWords: `${calculator.checkTotalWords(textContent)}`,
        averageTimeRequired: `${calculator.calculateAverageTimeRequiredToType(
          textContent
        )}`,
        textContent,
      });
    } else {
      // no test/challenge has been initiated
      navigate("/test", { replace: true });
    }
  }, []);

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

  useEffect(() => {
    const startTimer = setInterval(() => {
      setUserTimer((time) => {
        return time.timeLeft >= 1
          ? calculator.calculateTimeLeft(time)
          : (() => {
              clearInterval(startTimer);
              console.log("running this line...");
              return time;
            })();
      });
    }, 1000);
    return () => {
      clearInterval(startTimer);
    };
  }, []);

  return (
    <div className="testStartPageContainer container1 padChildren">
      <div className="grid textInputArea">
        <div className="actionArea">
          <TypingTextContainer
            text={userInfo.textContent}
            time={userInfo.averageTimeRequired}
            wordCount={userInfo.totalTestWords}
          />
          <TextArea
            onChange={(e) => setUserInput(e.target.value.toLowerCase())}
            value={userInput}
            placeholder="Start typing here..."
            rows={6}
          />
          <div className="flex-space-btw actionBtns">
            <Button
              className="largeBtn"
              style={{ backgroundColor: "#333" }}
              size="large"
            >
              Clear / Reset
            </Button>
            <Button className="largeBtn" size="large">
              Submit Challenge
            </Button>
          </div>
        </div>

        <div className="analytics">
          <div className="centered">
            <div>
              <div className="textCenter">
                <div>
                  <Progress
                    type="circle"
                    percent={(
                      (userTimer.timeLeft / userTimer.initialTime) *
                      100
                    ).toFixed(0)}
                    width={150}
                    strokeColor={
                      (
                        (userTimer.timeLeft / userTimer.initialTime) *
                        100
                      ).toFixed(0) > 30
                        ? null
                        : "red"
                    }
                  />
                  <p>Time Left</p>
                </div>
              </div>
              <div className="centered">
                <div className="badges flex">
                  <Badge showZero status="success" count={result.correctWords}>
                    <CheckCircleOutlined />
                  </Badge>
                  <Badge showZero count={result.wrongWords}>
                    <WarningOutlined />
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="progressBars">
            <div>
              <p>Accuracy</p>
              <Progress percent={result.accuracy} status="active" />
            </div>
            <Divider />
            <div>
              <p>completion Status</p>
              <Progress percent={result.completionStatus} status="active" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestStartPage;
