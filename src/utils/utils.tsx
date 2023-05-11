interface quizAnswersProps {
  correct: boolean;
  id: string;
  questionId: string;
  text: string;
}

export const help = (quizAnswers: quizAnswersProps) => {
  let correctAnswers = quizAnswers.filter(
    (answer: {correct: boolean}) => answer.correct === true,
  );
  let incorrectAnswers = quizAnswers.filter(
    (answer: {correct: boolean}) => answer.correct !== true,
  );

  let halfLength = Math.floor(incorrectAnswers.length / 2);
  let randomIncorrectAnswers = incorrectAnswers.slice(
    0,
    Math.floor(halfLength),
  );

  let answers = [...correctAnswers, ...randomIncorrectAnswers];
  return answers;
};

const formatTime = seconds => {
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? '0' + extraSeconds : extraSeconds;

  return `${minutes}:${extraSeconds}`;
};

export default {help, formatTime};
