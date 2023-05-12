import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Heading from '../../feature/Heading/Heading';
import QuizLogic from './QuizLogic/QuizLogic';
import Timer from './Timer';
import {useQuizScreenViewModel} from './Hooks/useQuizScreenViewModel';

interface QuizScreenProps {
  navigation: any;
}

const QuizScreen = ({navigation}: QuizScreenProps) => {
  const {
    quizInfo,
    quizLength,
    showHint,
    hintUsed,
    flag,
    flagHelp,
    useHelp,
    index,
    onSubmit,
    onNext,
    intervalRef,
  } = useQuizScreenViewModel(navigation);

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
