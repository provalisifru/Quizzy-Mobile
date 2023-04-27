import React, {useState} from 'react';
import {View} from 'react-native';
import LogInBox from './LogInBox/LogInBox';
import Title from '../../components/Title/Title';

import Icon from 'react-native-vector-icons/FontAwesome';

interface LogInScreen {
  navigation: any;
}

export const SignInScreen = ({navigation}: LogInScreen) => {
  return (
    <View className="bg-primary h-full">
      <View className="flex flex-row  justify-center items-center m-[70px]">
        <Icon name="question-circle" size={40} color="#FFC93C" />
        <Title styles="text-secondary text-[40px] mx-5" />
        <Icon name="question-circle" size={40} color="#FFC93C" />
      </View>
      <LogInBox navigation={navigation} />
    </View>
  );
};

export default SignInScreen;
