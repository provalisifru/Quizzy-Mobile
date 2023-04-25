import React from 'react';
import {Pressable, Text} from 'react-native';

interface ButtonProps {
  styles?: string;
  onPress?: () => void;
  text?: string;
  textStyle?: string;
}

const AppButton = ({styles, onPress, text = '', textStyle}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} className={`m-1 p-2 rounded-xl ${styles}`}>
      <Text className={`text-center m-auto ${textStyle}`}>{text}</Text>
    </Pressable>
  );
};

export default AppButton;
