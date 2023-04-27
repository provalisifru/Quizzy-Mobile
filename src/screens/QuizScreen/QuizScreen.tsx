import {Text, View, TouchableOpacity} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Title from '../../components/Title/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import OneAnswer from './Questions/OneAnswer';
import WriteAnswer from './Questions/WriteAnswer';
import MultipleAnswers from './Questions/MultipleAnswers';

interface QuizScreenProps {
  navigation: any;
}

const QuizScreen = ({navigation}: QuizScreenProps) => {
  return (
    <View className="bg-primary h-full">
      <View className="flex flex-row items-center justify-around my-[30px] bg-primary">
        <Title styles="text-secondary text-[40px] text-[40px]" />
        <AppButton
          onPress={() => navigation.navigate('LogIn')}
          text="Log out"
          textStyle="text-primary text-[20px]"
          styles="bg-secondary w-[100px] p-1 rounded-[60px]"
        />
      </View>
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
          <OneAnswer />
          <WriteAnswer placeholder="Write in the answer" />
          <MultipleAnswers />
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
