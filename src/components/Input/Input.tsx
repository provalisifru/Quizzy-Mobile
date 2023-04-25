import React from 'react';
import {View, TextInput} from 'react-native';

interface InputProps {
  placeholder?: string;
  styles?: string;
  value?: string;
  setUsername?: () => void;
  setPassword?: () => void;
}

const Input = ({
  placeholder,
  styles,
  value,
  setUsername,
  setPassword,
}: InputProps) => {
  let change;

  if (setUsername) {
    change = 'username';
  } else if (setPassword) {
    change = 'password';
  }

  if (change === 'username') {
    return (
      <View>
        <TextInput
          onChangeText={text => {
            setUsername(text);
          }}
          value={value}
          placeholder={placeholder}
          className={`text-[24px] ${styles}`}
          placeholderTextColor={'#AAAAAA'}
        />
      </View>
    );
  } else if (change === 'password') {
    return (
      <View>
        <TextInput
          onChangeText={text => {
            setPassword(text);
          }}
          value={value}
          placeholder={placeholder}
          className={`text-[24px] ${styles}`}
          placeholderTextColor={'#AAAAAA'}
        />
      </View>
    );
  }
};

export default Input;
