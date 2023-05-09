import React, {useContext} from 'react';
import OneAnswer from '../Questions/OneAnswer';
import MultipleAnswers from '../Questions/MultipleAnswers';
import WriteAnswer from '../Questions/WriteAnswer';
import {AnswersContext} from '../../../../App';
import utils from '../../../utils/utils';

interface QuizLogicProps {
  index: number;
  helpUsed: boolean;
}

const QuizLogic = ({index}: QuizLogicProps) => {
  const {quizInfo, helpUsed, setHelpUsed} = useContext(AnswersContext);

  let quizAnswers = quizInfo.questions[index].answers;

  if (helpUsed) {
    quizAnswers = utils.help(quizAnswers);
  }

  switch (quizInfo?.questions[index].type) {
    case 'multi':
      return (
        <MultipleAnswers
          index={index}
          quizQuestion={quizInfo.questions[index].text}
          quizAnswers={quizAnswers}
        />
      );
    case 'single':
      return (
        <OneAnswer
          index={index}
          quizQuestion={quizInfo.questions[index].text}
          quizAnswers={quizAnswers}
        />
      );
    case 'text':
      return (
        <WriteAnswer
          index={index}
          quizQuestion={quizInfo.questions[index].text}
          placeholder="Write answer here"
        />
      );
    default:
      return <></>;
  }
};

export default QuizLogic;
