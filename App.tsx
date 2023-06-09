/// <reference types="nativewind/types" />

import React, {Dispatch, SetStateAction, createContext, useState} from 'react';
import LoginNavigator from './src/navigator/Navigator';
import api from './src/api/methods';
import {QuizInfoInterface} from './src/Interfaces';

export const AnswersContext = createContext<{
  allAnswers: string[];
  setAllAnswers: Dispatch<SetStateAction<string[]>>;
  getQuizInfo: (
    quizId: string,
    dispatch: (success: boolean, data: any) => void,
  ) => void;
  quizInfo?: QuizInfoInterface;
}>({
  allAnswers: [],
  setAllAnswers: () => {},
  getQuizInfo: quizId => {},
  quizInfo: {},
});

const AppProvider = ({children}: any) => {
  const [allAnswers, setAllAnswers] = useState<
    {questionId: any; text: any; correct: boolean}[]
  >([]);

  const [quizInfo, setQuizInfo] = useState<QuizInfoInterface>();
  const [checked, setChecked] = useState<string>('');
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const [answers, setAnswers] = useState('');
  const [isGuest, setIsGuest] = useState(false);
  const [userId, setUserId] = useState('');
  const [scoreboard, setScoreboard] = useState([]);
  const [isLoadingScoreboard, setIsLoadingScoreboard] = useState(false);
  const [isInvite, setIsInvite] = useState(false);
  const [inviteId, setInviteId] = useState('');

  const [helpUsed, setHelpUsed] = useState(false);

  const getQuizInfo = (
    quizId: string,
    dispatch: (success: boolean, data: any) => void,
  ) => {
    api.getQuiz(quizId).then(response => {
      if (response?.status === 200) {
        setQuizInfo(response.data);
        dispatch(true, response.data);
      } else {
        console.log('Error', response.error);
        dispatch(false, null);
      }
    });
  };

  return (
    <AnswersContext.Provider
      value={{
        allAnswers,
        setAllAnswers,
        quizInfo,
        getQuizInfo,
        checked,
        setChecked,
        writtenAnswer,
        setWrittenAnswer,
        answers,
        setAnswers,
        isGuest,
        setIsGuest,
        userId,
        setUserId,
        helpUsed,
        setHelpUsed,
        scoreboard,
        setScoreboard,
        isLoadingScoreboard,
        setIsLoadingScoreboard,
        isInvite,
        setIsInvite,
        setQuizInfo,
        inviteId,
        setInviteId,
      }}>
      {children}
    </AnswersContext.Provider>
  );
};

export const App = () => {
  return (
    <AppProvider>
      <LoginNavigator />
    </AppProvider>
  );
};

export default App;
