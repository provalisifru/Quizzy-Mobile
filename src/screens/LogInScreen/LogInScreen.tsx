import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import LogInBox from './LogInBox/LogInBox';
import Title from '../../components/Title/Title';

interface LogInScreen {
  navigation: any;
}

export const SignInScreen = ({navigation}: LogInScreen) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="bg-primary h-full">
        <View className="flex flex-row  justify-center items-center m-[50px]">
          <Title styles="w-[150px] h-[150px]" />
        </View>
        <LogInBox navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
