import React from 'react';
import {Image, Text, View} from 'react-native';

const Logo = require('../../assets/QuizzyLogoTrans.png');

interface TitleProps {
  styles?: string;
  logo?: boolean;
}

const Title = ({styles, logo}: TitleProps) => {
  return (
    <View>
      {logo ? (
        <View className={`${styles} bg-secondary rounded-xl`}>
          <Image className="w-full h-full" source={Logo}></Image>
        </View>
      ) : (
        <Text className="text-secondary text-[42px] font-bold">QUIZZY</Text>
      )}
    </View>
  );
};

export default Title;
