import React, {useContext, useEffect, useState} from 'react';
import OneAnswer from '../Questions/OneAnswer';
import MultipleAnswers from '../Questions/MultipleAnswers';
import WriteAnswer from '../Questions/WriteAnswer';
import {AnswersContext} from '../../../../App';
import {help} from '../../../utils/utils';

interface QuizLogicProps {
  index: number;
}

const QuizLogic = ({index}: QuizLogicProps) => {
  const {quizInfo, helpUsed, setChecked, setAnswers} =
    useContext(AnswersContext);
  const [quizAnswers, setQuizAnswers] = useState(quizInfo.questions[0].answers);

  useEffect(() => {
    setQuizAnswers(quizInfo.questions[index].answers);
  }, [index]);

  useEffect(() => {
    if (helpUsed) {
      setQuizAnswers(help(quizAnswers));
      switch (quizInfo?.questions[index].type.toLowerCase()) {
        case 'multiple':
          setAnswers('');
        case 'single':
          setChecked('');
        default:
          break;
      }
    }
  }, [helpUsed]);

  switch (quizInfo?.questions[index].type.toLowerCase()) {
    case 'multiple':
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
