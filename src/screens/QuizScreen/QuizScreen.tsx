import {Text, View, TouchableOpacity, BackHandler, Alert} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Heading from '../../feature/Heading/Heading';
import {AnswersContext} from '../../../App';
import {useContext, useEffect, useState} from 'react';
import QuizLogic from './QuizLogic/QuizLogic';
import Timer from './Timer';
import api from '../../api/methods';

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
  } = useContext(AnswersContext);

  const [hintUsed, setHintUsed] = useState(false);
  const [flag, setFlag] = useState(false);
  const [flagHelp, setFlagHelp] = useState(false);

  const [index, setIndex] = useState(0);

  console.log(quizInfo);

  let quizLength = quizInfo?.questions.length - 1;

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

  const submit = () => {
    setFlag(false);
    setHelpUsed(false);
    switch (quizInfo?.questions[index].type) {
      case 'single':
        setAllAnswers([...allAnswers, checked]);
        break;
      case 'text':
        setAllAnswers([
          ...allAnswers,
          {
            questionId: quizInfo?.questions[index].id,
            text: writtenAnswer,
            correct: false,
          },
        ]);
        break;
      case 'multi':
        setAllAnswers([...allAnswers, ...answers]);
      default:
        break;
    }
    if (index === quizLength) {
      const endQuiz = async (quizId, userId, allAnswers) => {
        await api.endQuiz(quizId, userId, allAnswers).then(response => {
          if (response?.status === 200) {
            navigation.navigate('EndScreen', {
              quizId: quizInfo.id,
              score: response.data,
            });
            console.log(allAnswers);
          } else {
            console.log(response.error);
          }
        });
      };
      endQuiz(quizInfo?.id, userId, allAnswers);
    } else {
      setIndex(index + 1);
    }
  };

  return (
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
            quizId={quizInfo.id}
            time={quizInfo?.time}
            navigation={navigation}
          />
          {quizInfo.questions[index].type !== 'text' ? (
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
              {quizInfo?.questions[index].hint}
            </Text>
          ) : null}

          <QuizLogic index={index} />
        </View>
        <AppButton
          onPress={submit}
          text={index === quizLength ? 'Finish' : 'Next'}
          textStyle="text-white text-[25px]"
          styles="bg-primary p-[5px] my-6 self-center w-[130px] text-[25px] rounded-[12px]"
        />
      </View>
    </View>
  );
};

export default QuizScreen;
