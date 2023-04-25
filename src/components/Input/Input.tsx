import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

interface InputProps {
  placeholder?: string;
  styles?: string;
}

const Input = ({placeholder, styles}: InputProps) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
        className={`${styles}`}
        placeholderTextColor={'#AAAAAA'}
      />
    </View>
  );
};

export default Input;
