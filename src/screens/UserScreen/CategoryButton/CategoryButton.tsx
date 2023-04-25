import React from 'react';

import {View} from 'react-native';

import AppButton from '../../../components/Button/AppButton';

interface CategoryProps {
  category?: string;
  command?: () => void;
}

const CategoryButton = ({category = 'Categories', command}: CategoryProps) => {
  return (
    <View>
      <AppButton
        onPress={command}
        text={category}
        textStyle="text-primary font-medium text-[18px]"
        styles="bg-secondary mt-[20px] rounded-none mx-auto h-[40px] w-[70%]"
      />
    </View>
  );
};

export default CategoryButton;
