const help = quizAnswers => {
  const findCorrectAnswers = () => {
    let correctAnswers = quizAnswers.find(answer => answer.correct === true);
    return correctAnswers;
  };
  const findIncorrectAnswer = () => {
    let help = quizAnswers.filter(answer => answer.correct !== true);
    let randomIndex = Math.floor(Math.random() * help.length);
    let randomAnswer = help.find((element, i) => i === randomIndex);
    return randomAnswer;
  };

  quizAnswers = [findCorrectAnswers(), findIncorrectAnswer()];
  return quizAnswers.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

export default {help};
