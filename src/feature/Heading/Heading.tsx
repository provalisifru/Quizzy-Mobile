import React from 'react';
import Title from '../../components/Title/Title';
import {View} from 'react-native';
import AppButton from '../../components/Button/AppButton';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Heading = ({navigation}) => {
  return (
    <View className="flex flex-row items-center justify-around my-[30px] bg-primary">
      <Title styles="text-secondary text-[40px] text-[40px]" />
      <Icon name="local-post-office" size={30} color="#FFC93C" />
      <AppButton
        onPress={() => navigation.navigate('LogIn')}
        text="Log out"
        textStyle="text-primary text-[20px]"
        styles="bg-secondary w-[90px] rounded-[60px]"
      />
    </View>
  );
};

export default Heading;
