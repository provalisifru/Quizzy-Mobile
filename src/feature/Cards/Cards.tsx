import {View, Text, TouchableOpacity} from 'react-native';

import CardImage from '../../CardImage';

interface CardsProps {
  title?: string;
  description?: string;
  category?: string;
  onPress?: any;
}

const Cards = ({title, description, category, onPress}: CardsProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex flex-column items-center bg-secondary h-[290px] m-3 p-4 rounded-xl">
        <CardImage
          classNameText="w-[90%] h-[150px] rounded-xl"
          category={category}
        />
        <Text className="flex w-[90%] font-bold text-[24px] text-black my-2">
          {title}
        </Text>
        <Text className="flex w-[90%] font-medium text-[16px] text-black">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
