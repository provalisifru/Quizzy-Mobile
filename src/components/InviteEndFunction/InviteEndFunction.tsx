import React from 'react';
import {Text, View} from 'react-native';
import TextButton from '../TextButton/TextButton';

interface InviteEndFunctionProps {
  navigation: any;
  icon: string;
}

const InviteEndFunction = ({navigation, icon}: InviteEndFunctionProps) => {
  return (
    <View className="flex flex-column items-center">
      <Text className="font-bold text-[120px] text-black">{icon}</Text>
      <TextButton navigation={navigation} text={'Back to quizzes'} />
    </View>
  );
};

export default InviteEndFunction;
