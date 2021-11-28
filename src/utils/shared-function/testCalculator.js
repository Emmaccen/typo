// we'll extend new functionality here 😎

// we can change the configuration of the application here
const config = {
  // usually around 40 words per minute for an average person
  wordsPerMin: 40,
};

const checkTotalWords = (content) => {
  return content.split(" ").length;
};
const calculateAverageTimeRequiredToType = (content, userTimer = false) => {
  // decided not to use the user timer in this function anymore
  // but I'll leave it be for now (since average time is calculated based on config)
  //   userTimer
  //     ? (() => {
  //         return userTimer / 60;
  //       })()
  //     : (() => {
  //         const time = Math.ceil(checkTotalWords(content) / config.wordsPerMin);
  //         return `${time}`;
  //       })();
  const time = Math.ceil(checkTotalWords(content) / config.wordsPerMin);
  return `${Math.ceil(time)}`;
};

const recalculateUserResults = (userInfo, userInput) => {
  let values = calculateCorrectAndWrongWords(userInput, userInfo.textContent);
  values["accuracy"] = (
    (values.correctWords / userInfo.totalTestWords) *
    100
  ).toFixed(0);
  values["totalTypedWords"] = userInput.trim().split(" ").length;
  values["completionStatus"] = (
    (values.totalTypedWords / userInfo.totalTestWords) *
    100
  ).toFixed(0);
  return values;
};

const calculateCorrectAndWrongWords = (userInput, textContent) => {
  // this comparism is case-insensitive
  let correctWords = 0;
  let wrongWords = 0;
  // remove trailing whitespace and split words
  let auditWords = userInput.trim().split(" ");

  textContent
    .trim()
    .split(" ")
    .forEach((word, index) => {
      word.toLowerCase() == auditWords[index] ? correctWords++ : wrongWords++;
    });
  return { correctWords, wrongWords };
};

const calculateTimeLeft = ({ initialTime, timeLeft }) => {
  //   let left = (((timeLeft - 1000) / initialTime) * 100).toFixed(0);
  return {
    initialTime,
    timeLeft: timeLeft - 1,
  };
};

export const calculator = {
  checkTotalWords: (textContent) => checkTotalWords(textContent),
  calculateAverageTimeRequiredToType: (textContent) =>
    calculateAverageTimeRequiredToType(textContent),
  calculateCorrectAndWrongWords: (userInput, textContent) =>
    calculateCorrectAndWrongWords(userInput, textContent),
  recalculateUserResults: (result, userInfo, userInput) =>
    recalculateUserResults(result, userInfo, userInput),
  calculateTimeLeft: (timeObject) => calculateTimeLeft(timeObject),
};
