import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Input from '../Input/Input';
import AppButton from '../Button/AppButton';

interface EndFunctionProps {
  navigation: any;
}

const EndFunction = ({navigation}: EndFunctionProps) => {
  return (
    <View>
      <View className=" px-[20px] bg-white rounded-[50px] my-5">
        <Input styles="text-[16px]" placeholder="Enter friend's username..." />
      </View>
      <View className="flex-row items-center mb-4">
        <AppButton
          // onPress={command}
          text="Invite"
          textStyle="text-white text-[18px]"
          styles="bg-primary w-[100px] h-[50px] rounded-[60px]"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text className="text-primary text-center text-[20px] ml-10 font-bold">
            Back to quizzes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EndFunction;
