import React from 'react';
import {Text, View} from 'react-native';

interface TitleProps {
  styles?: string;
}

const Title = ({styles}: TitleProps) => {
  return (
    <View>
      <Text className={`${styles}`}>QUIZZY</Text>
    </View>
  );
};

export default Title;
