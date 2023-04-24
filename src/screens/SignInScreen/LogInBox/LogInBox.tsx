import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../../components/Input/Input';
import AppButton from '../../../components/Button/AppButton';

const LogInBox = () => {
  return (
    <View className="bg-secondary mx-[25px] py-[30px] px-[10px] rounded-[60px]">
      <Text className="text-primary text-center text-[26px]">
        Number 1. online quiz in the world
      </Text>
      <Text className="text-white text-center text-[40px] my-[10px]">
        Login
      </Text>
      <View className="m-2 px-[20px] bg-white rounded-[60px]">
        <Input placeholder="Enter username..." />
      </View>
      <View className="m-2 px-[20px] bg-white rounded-[60px]">
        <Input placeholder="Enter password..." />
      </View>
      <AppButton
        text="Sign In"
        textStyle="text-white text-[20px]"
        styles="bg-primary mt-[20px] mx-auto w-[90px] rounded-[60px]"
      />
      <Text className="text-primary text-center mt-[10px] text-[20px] font-bold">
        Continue as guest
      </Text>
    </View>
  );
};

export default LogInBox;
