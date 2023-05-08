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
    let randomIndex = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers.find(
      (element: any, i: number) => i === randomIndex,
    );
    return randomAnswer;
  };

  quizAnswers = [
    ...findCorrectAnswers(),
    returnOneIncorrectAnswer(findIncorrectAnswers()),
  ];
  return quizAnswers.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

const formatTime = seconds => {
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? '0' + extraSeconds : extraSeconds;

  return `${minutes}:${extraSeconds}`;
};

export default {help, formatTime};
