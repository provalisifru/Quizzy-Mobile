import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  styles?: string;
  onPress?: () => void;
  text?: string;
  textStyle?: string;
  isDisabled?: boolean;
}

const AppButton = ({
  isDisabled,
  styles,
  onPress,
  text = '',
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={0.5}
      onPress={onPress}
      className={`m-1 p-2 rounded-xl ${styles}`}>
      <Text className={`text-center m-auto ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
