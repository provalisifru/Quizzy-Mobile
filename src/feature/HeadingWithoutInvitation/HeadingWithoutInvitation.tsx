import React from 'react';
import {View} from 'react-native';
import Title from '../../components/Title/Title';
import AppButton from '../../components/Button/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HeadingProps {
  navigation: any;
}

const HeadingWithoutInvitation = ({navigation}: HeadingProps) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');

    navigation.navigate('LogIn');
  };
  return (
    <View className="flex flex-row items-center justify-around my-[20px] bg-primary">
      <Title styles="text-secondary text-[40px] text-[40px] mr-[60px]" />
      <AppButton
        onPress={handleLogout}
        text="Log out"
        textStyle="text-primary text-[20px]"
        styles="bg-secondary w-[100px] p-1 rounded-[60px]"
      />
    </View>
  );
};

export default HeadingWithoutInvitation;
