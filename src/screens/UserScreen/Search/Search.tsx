import React from 'react';
import {View} from 'react-native';
import Input from '../../../components/Input/Input';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = ({setSearch, onFocus}) => {
  return (
    <View className="px-[20px] bg-white rounded-[60px] w-[350px] m-auto flex flex-row items-center">
      <Icon name="search" size={40} color="#AAAAAA" />
      <Input
        setState={setSearch}
        onFocus={onFocus}
        placeholder="Search"
        styles="text-[26px] mx-[5px] text-black"
      />
    </View>
  );
};

export default Search;
