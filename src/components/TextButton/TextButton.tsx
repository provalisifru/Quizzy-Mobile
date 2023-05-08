import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const TextButton = ({navigation, text = 'Back to quizzes'}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text className="text-primary text-center text-[20px] m-5 font-bold">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
