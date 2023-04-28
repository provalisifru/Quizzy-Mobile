import React from 'react';
import {View} from 'react-native';
import Title from '../../components/Title/Title';
import AppButton from '../../components/Button/AppButton';

interface HeadingProps {
  navigation: any;
}

const HeadingWithoutInvitation = ({navigation}: HeadingProps) => {
  return (
    <View className="flex flex-row items-center justify-around my-[30px] bg-primary">
      <Title styles="text-secondary text-[40px] text-[40px]" />
      <AppButton
        onPress={() => navigation.navigate('LogIn')}
        text="Log out"
        textStyle="text-primary text-[20px]"
        styles="bg-secondary w-[100px] p-1 rounded-[60px]"
      />
    </View>
  );
};

export default HeadingWithoutInvitation;
