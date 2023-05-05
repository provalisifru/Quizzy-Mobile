import React, {useContext, useState} from 'react';
import OneAnswer from '../Questions/OneAnswer';
import MultipleAnswers from '../Questions/MultipleAnswers';
import WriteAnswer from '../Questions/WriteAnswer';
import {AnswersContext} from '../../../../App';

interface QuizLogicProps {
  index: number;
  helpUsed: boolean;
}

const QuizLogic = ({index}: QuizLogicProps) => {
  const {quizInfo, helpUsed} = useContext(AnswersContext);

  let quizAnswers = quizInfo.questions[index].answers;

  const findCorrectAnswer = () => {
    let help = quizAnswers.find(answer => answer.correct === true);
    return help;
  };
  const findIncorrectAnswer = () => {
    let help = quizAnswers.filter(answer => answer.correct !== true);
    let randomIndex = Math.floor(Math.random() * help.length);
    let randomAnswer = help.find((element, i) => i === randomIndex);
    return randomAnswer;
  };
  if (helpUsed) {
    quizAnswers = [findCorrectAnswer(), findIncorrectAnswer()];
    quizAnswers.sort(() => (Math.random() > 0.5 ? 1 : -1));
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
