import React from 'react';
import Title from '../../components/Title/Title';
import {View} from 'react-native';
import AppButton from '../../components/Button/AppButton';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HeadingProps {
  navigation: any;
  iconName: boolean;
}

const Heading = ({navigation, iconName}: HeadingProps) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');

    navigation.navigate('LogIn');
  };

  return (
    <View className="flex flex-row items-center justify-around my-[30px] bg-primary">
      <Title styles="text-secondary text-[40px] text-[40px]" />
      <View className="ml-[-30px]">
        {iconName ? (
          <Icon
            onPress={() => navigation.navigate('Invitation')}
            name="envelope"
            size={30}
            color="#FFC93C"
          />
        ) : (
          <Icon
            onPress={() => navigation.navigate('Home')}
            name="envelope-open"
            size={30}
            color="#FFC93C"
          />
        )}
      </View>
      <AppButton
        onPress={handleLogout}
        text="Log out"
        textStyle="text-primary text-[20px]"
        styles="bg-secondary w-[90px] p-1 rounded-[60px]"
      />
    </View>
  );
};

export default Heading;
