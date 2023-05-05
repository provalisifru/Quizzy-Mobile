import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import AppButton from '../../../components/Button/AppButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardImage from '../../../CardImage';
import InstructionsPopup from '../InstructionsPopup/InstructionsPopup';

import {AnswersContext} from '../../../../App';
import formatTime from '../../QuizScreen/TimeFormatter';

interface QuizBoxProps {
  quizId?: string;
  navigation?: any;
  category?: string;
  name?: string;
  description?: string;
  time?: any;
}

const QuizBox = ({
  quizId,
  category,
  name,
  description,
  time,
  navigation,
}: QuizBoxProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {getQuizInfo, quizInfo} = useContext(AnswersContext);

  const OpenInstructions = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    getQuizInfo(quizId ?? '');
  }, []);

  const startQuiz = () => {
    navigation.navigate('Quiz', {quizInfo: quizInfo});
  };

  return (
    <ScrollView className="bg-secondary m-3 rounded-xl">
      <View className="bg-secondary flex flex-column items-center rounded-xl">
        <Text className="text-black text-[28px] text-center font-bold m-2">
          {name}
        </Text>
        <CardImage
          category={category}
          classNameText="w-[90%] h-[150px] mt-5 mb-5 flex"
        />
        <Text className="w-[90%] text-black text-[16px]">{description}</Text>
        <TouchableOpacity className="self-start m-5" onPress={OpenInstructions}>
          <Text className="text-blue-600 font-bold text-[18px] underline">
            Instructions
          </Text>
        </TouchableOpacity>
        <View className="space-y-4">
          <Text className="text-black text-[28px] text-center font-bold mt-5">
            Time to finish the quiz:
          </Text>
          <View className="flex flex-row items-center justify-center mb-6">
            <Icon name="timer-sand" size={30} color="black" />
            <Text className="text-black text-[20px]">
              {formatTime(time)} minutes
            </Text>
          </View>
          <AppButton
            onPress={startQuiz}
            text="START"
            textStyle="text-white text-[25px]"
            styles="bg-primary p-[5px] mx-auto w-[130px] text-[25px] rounded-[60px]"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text className="text-primary text-center mt-[10px] text-[20px] font-bold">
              Back to quizzes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="absolute bottom-[30px] h-[40%] w-[87%] left-[25px] bg-ternary">
          <InstructionsPopup
            command={OpenInstructions}
            time={formatTime(time)}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default QuizBox;
