interface quizAnswersProps {
  correct: boolean;
  id: string;
  questionId: string;
  text: string;
}

const help = (quizAnswers: quizAnswersProps[]) => {
  const findCorrectAnswers = () => {
    let correctAnswers = quizAnswers.find(
      (answer: {correct: boolean}) => answer.correct === true,
    );
    return correctAnswers;
  };
  const findIncorrectAnswer = () => {
    let help = quizAnswers.filter(
      (answer: {correct: boolean}) => answer.correct !== true,
    );
    let randomIndex = Math.floor(Math.random() * help.length);
    let randomAnswer = help.find(
      (element: any, i: number) => i === randomIndex,
    );
    return randomAnswer;
  };

  quizAnswers = [findCorrectAnswers(), findIncorrectAnswer()];
  return quizAnswers.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

export default {help};
