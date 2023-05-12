import {useContext, useEffect, useRef, useState} from 'react';
import {AnswersContext} from '../../../../App';
import {Alert, BackHandler} from 'react-native';
import api from '../../../api/methods';
import BackgroundTimer from 'react-native-background-timer';

export const useQuizScreenViewModel = (navigation: any) => {
  const {
    allAnswers,
    setAllAnswers,
    answers,
    checked,
    writtenAnswer,
    quizInfo,
    setHelpUsed,
    userId,
    setChecked,
    setAnswers,
  } = useContext(AnswersContext);

  const [hintUsed, setHintUsed] = useState(false);
  const [flag, setFlag] = useState(false);
  const [flagHelp, setFlagHelp] = useState(false);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [index, setIndex] = useState(0);

  const intervalRef = useRef<any>();

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const showHint = () => {
    if (!flag) {
      if (!hintUsed) {
        setHintUsed(true);
        setFlag(true);
      }
    }
  };

  const useHelp = () => {
    setHelpUsed(true);
    setFlagHelp(true);
  };

  const checkIfAnswered = (answer: any[]) => {
    if (answer.length !== 0) {
      return true;
    } else {
      Alert.alert('WARNING', "You didn't answer question!", [
        {
          text: 'Ok',
        },
      ]);
      return false;
    }
  };

  const saveAnswer = () => {
    if (quizInfo && quizInfo.questions && quizInfo.questions[index]) {
      const questionType = quizInfo.questions[index].type;
      switch (questionType.toLowerCase()) {
        case 'single':
          if (checkIfAnswered(checked)) {
            setAllAnswers([...allAnswers, checked]);
            setChecked('');
            return true;
          } else break;
        case 'text':
          if (checkIfAnswered(writtenAnswer)) {
            setAllAnswers([
              ...allAnswers,
              {
                questionId: quizInfo?.questions[index].id,
                text: writtenAnswer,
                correct: false,
              },
            ]);

            return true;
          } else break;
        case 'multiple':
          if (checkIfAnswered(answers)) {
            setAllAnswers([...allAnswers, ...answers]);
            setAnswers('');
            return true;
          } else break;
        default:
          break;
      }
    }
  };

  const quizLength = quizInfo?.questions?.length
    ? quizInfo.questions.length - 1
    : 0;

  const onNext = () => {
    setFlag(false);
    setHelpUsed(false);
    if (index === quizLength) {
      if (saveAnswer()) {
        onSubmit();
      } else return;
      onSubmit();
    } else {
      if (saveAnswer()) {
        setIndex(index + 1);
      } else return;
    }
  };

  const onSubmit = () => {
    saveAnswer();
    BackgroundTimer.clearInterval(intervalRef.current);
    setFinishedQuiz(true);
  };

  const endQuiz = async (quizId: string, userId: string, allAnswers: any) => {
    try {
      await api.endQuiz(quizId, userId, allAnswers).then(response => {
        if (quizInfo && response && response.status === 200) {
          navigation.navigate('EndScreen', {
            quizId: quizInfo.id,
            score: response.data,
          });
        } else {
          console.log(response);
        }
      });
    } catch (e) {
      console.log('This is error', e);
    } finally {
      setAllAnswers([]);
    }
  };

  useEffect(() => {
    if (finishedQuiz === true) {
      setFinishedQuiz(false);
      endQuiz(quizInfo?.id, userId, allAnswers);
    }
  }, [finishedQuiz]);

  return {
    quizInfo,
    quizLength,
    showHint,
    hintUsed,
    setHintUsed,
    flag,
    setFlag,
    flagHelp,
    useHelp,
    setHelpUsed,
    index,
    onSubmit,
    onNext,
    intervalRef,
  };
};
