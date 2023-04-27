import React from 'react';
import {View} from 'react-native';
import Title from '../../components/Title/Title';
import AppButton from '../../components/Button/AppButton';
import QuizBox from './QuizBox/QuizBox';

interface QuizInfoProps {
  navigation: any;
  route: any;
}

const QuizInfo = ({route, navigation}: QuizInfoProps) => {
  let {name, description, category, time} = route.params;
  return (
    <View className="bg-primary h-full">
      <View className="flex flex-row items-center justify-around my-[30px] bg-primary">
        <Title styles="text-secondary text-[40px] text-[40px]" />
        <AppButton
          onPress={() => navigation.navigate('LogIn')}
          text="Log out"
          textStyle="text-primary text-[20px]"
          styles="bg-secondary w-[100px] p-1 rounded-[60px]"
        />
      </View>
      <QuizBox
        name={name}
        description={description}
        category={category}
        time={time}
        navigation={navigation}
      />
    </View>
  );
};

export default QuizInfo;
