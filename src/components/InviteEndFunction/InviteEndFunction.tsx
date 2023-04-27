import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface InviteEndFunctionProps {
  navigation: any;
  icon: string;
}

const InviteEndFunction = ({navigation, icon}: InviteEndFunctionProps) => {
  return (
    <View className="flex flex-column items-center">
      <Text className="font-bold text-[120px] text-black">{icon}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text className="text-primary text-center text-[20px] m-5 font-bold">
          Back to quizzes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InviteEndFunction;
