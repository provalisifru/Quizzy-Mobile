import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input/Input';
import {AnswersContext} from '../../../../App';

interface WriteAnswerProps {
  placeholder: string;
  quizQuestion: string;
  index: number;
}

const WriteAnswer = ({index, placeholder, quizQuestion}: WriteAnswerProps) => {
  const {setWrittenAnswer} = useContext(AnswersContext);

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        {index + 1}. {quizQuestion}
      </Text>
      <View className="border-solid border-black border-[3px] rounded-xl m-6">
        <Input placeholder={placeholder} setState={setWrittenAnswer} />
      </View>
    </View>
  );
};

export default WriteAnswer;
