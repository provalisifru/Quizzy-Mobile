/// <reference types="nativewind/types" />

import React, {Dispatch, SetStateAction, createContext, useState} from 'react';
import LoginNavigator from './src/screens/LogInScreen/LoginNavigator/LoginNavigator';
import api from './src/api/methods';

export const AnswersContext = createContext<{
  allAnswers: string[];
  setAllAnswers: Dispatch<SetStateAction<string[]>>;
  getQuizInfo: (quizId: string) => void;
  quizInfo?: object; //<Interface>; //NAPRAVI INTERFEJS
}>({
  allAnswers: [],
  setAllAnswers: () => {},
  getQuizInfo: quizId => {},
  quizInfo: {},
});

const AppProvider = ({children}: any) => {
  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const [quizInfo, setQuizInfo] = useState(); // i ovde

  const getQuizInfo = (quizId: string) => {
    api.getQuiz(quizId).then(response => {
      if (response?.status === 200) {
        setQuizInfo(response.data);
      } else {
        console.log('Error', response.error);
      }
    });
  };

  return (
    <AnswersContext.Provider
      value={{allAnswers, setAllAnswers, getQuizInfo, quizInfo}}>
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
