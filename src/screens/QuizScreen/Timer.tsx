import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import formatTime from './TimeFormatter';

const Timer = ({time, navigation, quizId}) => {
  const [seconds, setSeconds] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    if (seconds === 0) {
      navigation.navigate('EndScreen', {quizId: quizId});
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <View>
      <Text className="mx-6 text-black text-[24px]">{formatTime(seconds)}</Text>
    </View>
  );
};

export default Timer;
