import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

interface CategoriesPopUp {
  categories: Array<string>;
  closePopup: any;
  chooseCategory: any;
}

const CategoriesPopup = ({
  closePopup,
  chooseCategory,
  categories,
}: CategoriesPopUp) => {
  const list = categories.map((category, id) => {
    return (
      <TouchableOpacity
        key={id}
        onPress={() => {
          chooseCategory(category);
          closePopup();
        }}>
        <Text className="font-medium text-[20px] text-primary">{category}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView className="bg-secondary w-full h-full ">
      <TouchableOpacity
        onPress={closePopup}
        className="flex items-end mt-5 mr-5">
        <Icon name="close" size={30} color="#155263" />
      </TouchableOpacity>
      <View className="flex flex-column items-center space-y-5">
        <Text className="font-bold text-[36px] text-primary">Categories</Text>
        {list}
      </View>
    </ScrollView>
  );
};

export default CategoriesPopup;
