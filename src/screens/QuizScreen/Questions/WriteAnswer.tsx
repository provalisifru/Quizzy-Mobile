import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input/Input';
import {AnswersContext} from '../../../../App';

interface WriteAnswerProps {
  placeholder: string;
  quizQuestion: string;
}

const WriteAnswer = ({placeholder, quizQuestion}: WriteAnswerProps) => {
  const {setWrittenAnswer} = useContext(AnswersContext);

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        2. {quizQuestion}
      </Text>
      <View className="border-solid border-black border-[3px] rounded-xl m-6">
        <Input placeholder={placeholder} setState={setWrittenAnswer} />
      </View>
    </View>
  );
};

export default WriteAnswer;
