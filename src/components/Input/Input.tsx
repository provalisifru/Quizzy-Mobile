import React from 'react';
import {TextInput} from 'react-native';

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
    <TextInput
      onChangeText={setState}
      onFocus={onFocus}
      value={value}
      placeholder={placeholder}
      className={`text-[24px] ${styles}`}
      placeholderTextColor={'#AAAAAA'}
    />
  );
};

export default Input;
