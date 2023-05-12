import React, {useEffect, useState, forwardRef} from 'react';
import {Text, View} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import utils from '../../utils/utils';

interface TimerProps {
  time: number;
  onSubmit: Function;
}

const Timer = forwardRef(({time, onSubmit}: TimerProps, ref: any) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    ref.current = BackgroundTimer.setInterval(() => {
      setSeconds((seconds: number) => seconds - 1);
    }, 1000);
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
});

export default Timer;
