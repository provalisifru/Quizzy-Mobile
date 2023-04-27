import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input/Input';

interface WriteAnswerProps {
  placeholder: string;
}

const WriteAnswer = ({placeholder}: WriteAnswerProps) => {
  const [answer, setAnswer] = useState('');

  return (
    <View className="m-5">
      <Text className="text-black m-2 underline font-medium text-[18px]">
        2. How old is Christiano Ronaldo?
      </Text>
      <View className="border-solid border-black border-[3px] rounded-xl m-6">
        <Input placeholder={placeholder} setState={setAnswer} />
      </View>
    </View>
  );
};

export default WriteAnswer;
