interface quizAnswersProps {
  correct: boolean;
  id: string;
  questionId: string;
  text: string;
}

const help = (quizAnswers: quizAnswersProps) => {
  const findCorrectAnswers = () => {
    let correctAnswers = quizAnswers.filter(
      (answer: {correct: boolean}) => answer.correct === true,
    );
    return correctAnswers;
  };
  const findIncorrectAnswers = () => {
    let help = quizAnswers.filter(
      (answer: {correct: boolean}) => answer.correct !== true,
    );

    return help;
  };

  const returnOneIncorrectAnswer = answers => {
    let randomAnswer = answers.find((element: any, i: number) => i === 1);
    return randomAnswer;
  };

  quizAnswers = [
    ...findCorrectAnswers(),
    returnOneIncorrectAnswer(findIncorrectAnswers()),
  ];
  return quizAnswers;
};

const formatTime = seconds => {
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? '0' + extraSeconds : extraSeconds;

  return `${minutes}:${extraSeconds}`;
};

export default {help, formatTime};
