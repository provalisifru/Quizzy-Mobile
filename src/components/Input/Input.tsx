import React from 'react';
import {View, TextInput} from 'react-native';

interface InputProps {
  placeholder?: string;
  styles?: string;
  value?: string;
  setState?: (str: string) => void;
  onFocus?: any;
}

const Input = ({
  placeholder,
  styles,
  value,
  setState = () => {},
  onFocus,
}: InputProps) => {
  return (
    <View>
      <TextInput
        onChangeText={setState}
        onFocus={onFocus}
        value={value}
        placeholder={placeholder}
        className={`text-[24px] ${styles}`}
        placeholderTextColor={'#AAAAAA'}
      />
    </View>
  );
};

export default Input;
