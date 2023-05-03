import React, {useContext} from 'react';
import OneAnswer from '../Questions/OneAnswer';
import MultipleAnswers from '../Questions/MultipleAnswers';
import WriteAnswer from '../Questions/WriteAnswer';
import {AnswersContext} from '../../../../App';

interface QuizLogicProps {
  index: number;
}

const QuizLogic = ({index}: QuizLogicProps) => {
  const {quizInfo} = useContext(AnswersContext);

  switch (quizInfo?.questions[index].type) {
    case 'multi':
      return (
        <MultipleAnswers
          index={index}
          quizQuestion={quizInfo.questions[index].text}
          quizAnswers={quizInfo.questions[index].answers}
        />
      );
      break;
    case 'single':
      return (
        <OneAnswer
          index={index}
          quizQuestion={quizInfo.questions[index].text}
          quizAnswers={quizInfo.questions[index].answers}
        />
      );
      break;
    case 'text':
      return (
        <WriteAnswer
          index={index}
          quizQuestion={quizInfo.questions[index].text}
          placeholder="Write answer here"
        />
      );
      break;
    default:
      return <></>;
  }
};

export default QuizLogic;
