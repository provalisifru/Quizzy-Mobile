import React from 'react';
import {View, Text, Image} from 'react-native';

import FootballPhoto from '../../assets/sport.jpg';
import GeographyPhoto from '../../assets/geography.png';
import FlagsPhoto from '../../assets/flags.jpg';

interface CardsProps {
  title?: string;
  description?: string;
  category?: string;
}

const Cards = ({title, description, category}: CardsProps) => {
  var imgSource = '';
  switch (category) {
    case 'sport':
      imgSource = Image.resolveAssetSource(FootballPhoto).uri;
      break;
    case 'geography':
      imgSource = Image.resolveAssetSource(GeographyPhoto).uri;
      break;
    case 'flags':
      imgSource = Image.resolveAssetSource(FlagsPhoto).uri;
      break;
    default:
      imgSource = Image.resolveAssetSource(FootballPhoto).uri;
  }

  return (
    <View className="flex flex-column items-center bg-secondary h-[290px] m-3 p-4 rounded-xl">
      <Image
        className="w-[90%] h-[150px] rounded-xl"
        source={{uri: imgSource}}
      />
      <Text className="flex w-[90%] font-bold text-[24px] text-black my-2">
        {title}
      </Text>
      <Text className="flex w-[90%] font-medium text-[16px] text-black">
        {description}
      </Text>
    </View>
  );
};

export default Cards;
