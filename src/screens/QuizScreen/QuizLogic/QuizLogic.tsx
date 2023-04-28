import React from 'react';
import OneAnswer from '../Questions/OneAnswer';
import MultipleAnswers from '../Questions/MultipleAnswers';
import WriteAnswer from '../Questions/WriteAnswer';

interface QuizLogicProps {
  quizInfo: any;
  index: any;
}

const LogicInfo = ({quizInfo, index}: QuizLogicProps) => {
  const quiz = quizInfo;

  switch (quiz.questions[index].type) {
    case 'multi':
      return (
        <MultipleAnswers
          quizQuestion={quiz.questions[index].text}
          quizAnswers={quiz.questions[index].answers}
        />
      );
      break;
    case 'single':
      return (
        <OneAnswer
          quizQuestion={quiz.questions[index].text}
          quizAnswers={quiz.questions[index].answers}
        />
      );
      break;
    case 'text':
      return (
        <WriteAnswer
          quizQuestion={quiz.questions[index].text}
          placeholder="Write answer here"
        />
      );
      break;
  }
};

export default LogicInfo;
