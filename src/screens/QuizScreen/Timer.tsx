import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import utils from '../../utils/utils';

const Timer = ({time, onSubmit}) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const interval = BackgroundTimer.setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    return () => {
      BackgroundTimer.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      onSubmit();
    }
  }, [seconds]);

  return (
    <View>
      <Text className="mx-6 text-black text-[24px]">
        {utils.formatTime(seconds)}
      </Text>
    </View>
  );
};

export default Timer;
