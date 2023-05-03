import React from 'react';
import {View, TextInput} from 'react-native';

interface InputProps {
  placeholder?: string;
  styles?: string;
  value?: string;
  setState?: (str: string) => void;
}

const Input = ({
  placeholder,
  styles,
  value,
  setState = () => {},
}: InputProps) => {
  return (
    <View>
      <TextInput
        onChangeText={setState}
        value={value}
        placeholder={placeholder}
        className={`text-[24px] ${styles}`}
        placeholderTextColor={'#AAAAAA'}
      />
    </View>
  );
};

export default Input;
