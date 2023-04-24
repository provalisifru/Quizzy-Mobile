import React from 'react';
import {ScrollView, Text, View, Button} from 'react-native';
import LogInBox from './LogInBox/LogInBox';
import Title from '../../components/Title/Title';

import Icon from 'react-native-vector-icons/FontAwesome';

export const SignInScreen = () => {
  return (
    <ScrollView className="bg-primary">
      <View className="flex flex-row items-center justify-around mb-[60px] mt-[40px]">
        <Icon name="question-circle" size={40} color="#FFC93C" />
        <Title styles="text-secondary text-[40px]" />
        <Icon name="question-circle" size={40} color="#FFC93C" />
      </View>
      <LogInBox />
    </ScrollView>
  );
};

export default SignInScreen;
