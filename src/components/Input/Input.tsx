import React from 'react';
import {TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputProps {
  placeholder?: string;
  styles?: string;
  value?: string;
  setState?: (str: string) => void;
  onFocus?: any;
  ref?: any;
}

const Input = ({
  placeholder,
  styles,
  value,
  setState = () => {},
  onFocus,
  ref,
}: InputProps) => {
  return (
    <TextInput
      ref={ref}
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
