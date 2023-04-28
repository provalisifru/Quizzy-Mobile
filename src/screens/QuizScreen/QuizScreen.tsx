import {Text, View, TouchableOpacity, Alert} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadingWithoutInvitation from '../../feature/HeadingWithoutInvitation/HeadingWithoutInvitation';
import {AnswersContext} from '../../../App';
import {useContext} from 'react';
import QuizLogic from './QuizLogic/QuizLogic';

interface QuizScreenProps {
  navigation: any;
  route: any;
}

const QuizScreen = ({route, navigation}: QuizScreenProps) => {
  var {quizInfo} = route.params;

  let index = 1;

  const {allAnswers, setAllAnswers} = useContext(AnswersContext);

  // console.log('this is route parms2', quizInfo);

  return (
    <View className="bg-primary h-full">
      <HeadingWithoutInvitation navigation={navigation} />
      <View className="bg-secondary rounded-xl m-2">
        <Text className="text-black font-bold self-center m-2 text-[28px]">
          Football players quiz
        </Text>
        <View className="flex flex-row items-center m-auto mb-6">
          <TouchableOpacity>
            <Icon name="lightbulb-o" size={40} color="black" />
          </TouchableOpacity>
          <Text className="mx-6 text-black text-[24px]">9:36</Text>
          <TouchableOpacity>
            <Icon name="star-half-o" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View className="bg-white w-[90%] m-auto rounded-xl">
          <QuizLogic quizInfo={quizInfo} index={index} />
        </View>
        <AppButton
          onPress={() => navigation.navigate('EndScreen')}
          text="Next"
          textStyle="text-white text-[25px]"
          styles="bg-primary p-[5px] my-6 self-center w-[130px] text-[25px] rounded-[12px]"
        />
      </View>
    </View>
  );
};

export default QuizScreen;
