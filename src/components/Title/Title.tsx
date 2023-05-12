import React from 'react';
import {Image, Text, View} from 'react-native';

const SadSmiley = require('../../assets/QuizzyLogoTrans.png');

interface TitleProps {
  styles?: string;
}

const Title = ({styles}: TitleProps) => {
  return (
    <View>
      <View className={`${styles} bg-secondary rounded-xl`}>
        <Image className="w-full h-full" source={SadSmiley}></Image>
      </View>
    </View>
  );
};

export default Title;
