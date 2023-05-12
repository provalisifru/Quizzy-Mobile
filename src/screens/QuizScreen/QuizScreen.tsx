import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Heading from '../../feature/Heading/Heading';
import {AnswersContext} from '../../../App';
import {useContext, useEffect, useRef, useState} from 'react';
import QuizLogic from './QuizLogic/QuizLogic';
import Timer from './Timer';
import api from '../../api/methods';

import BackgroundTimer from 'react-native-background-timer';

interface QuizScreenProps {
  navigation: any;
}

const QuizScreen = ({navigation}: QuizScreenProps) => {
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

  const intervalRef = useRef<any>();

  const [hintUsed, setHintUsed] = useState(false);
  const [flag, setFlag] = useState(false);
  const [flagHelp, setFlagHelp] = useState(false);
  const [finishedQuiz, setFinishedQuiz] = useState(false);

  const [index, setIndex] = useState(0);

  const quizLength = quizInfo?.questions?.length
    ? quizInfo.questions.length - 1
    : 0;

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

  useEffect(() => {
    if (finishedQuiz === true) {
      setFinishedQuiz(false);
      endQuiz(quizInfo?.id, userId, allAnswers);
    }
  }, [finishedQuiz]);

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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="bg-primary h-full">
        <Heading
          navigation={navigation}
          iconName={false}
          isInvitationShown={false}
        />
        <View className="bg-secondary rounded-xl m-2">
          <Text className="text-black font-bold self-center m-2 text-[28px]">
            Football players quiz
          </Text>
          <View className="flex flex-row items-center m-auto mb-6">
            {hintUsed ? (
              <Icon name="lightbulb-o" size={40} color="gray" />
            ) : (
              <TouchableOpacity onPress={showHint}>
                <Icon name="lightbulb-o" size={40} color="black" />
              </TouchableOpacity>
            )}
            <Timer
              ref={intervalRef}
              time={quizInfo && quizInfo.time ? quizInfo?.time : 0}
              onSubmit={onSubmit}
            />
            {quizInfo &&
            quizInfo.questions &&
            quizInfo.questions[index].type.toLowerCase() !== 'text' ? (
              flagHelp ? (
                <Icon name="star-half-o" size={40} color="gray" />
              ) : (
                <TouchableOpacity onPress={useHelp}>
                  <Icon name="star-half-o" size={40} color="black" />
                </TouchableOpacity>
              )
            ) : null}
          </View>
          <View className="bg-white w-[90%] m-auto rounded-xl">
            {flag ? (
              <Text className="self-center text-[20px] font-bold">
                {quizInfo &&
                  quizInfo.questions &&
                  quizInfo?.questions[index].hint}
              </Text>
            ) : null}

            <QuizLogic index={index} />
          </View>
          <AppButton
            onPress={onNext}
            text={index === quizLength ? 'Finish' : 'Next'}
            textStyle="text-white text-[25px]"
            styles="bg-primary p-[5px] my-6 self-center w-[130px] text-[25px] rounded-[12px]"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default QuizScreen;
