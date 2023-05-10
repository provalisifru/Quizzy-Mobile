import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import utils from '../../utils/utils';

const Timer = ({time, onSubmit}) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    if (seconds === 0) {
      onSubmit();
    }

    return () => {
      clearInterval(interval);
    };
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
