import React from 'react';
import {View} from 'react-native';
import Title from '../../components/Title/Title';
import AppButton from '../../components/Button/AppButton';
import QuizBox from './QuizBox/QuizBox';
import HeadingWithoutInvitation from '../../feature/HeadingWithoutInvitation/HeadingWithoutInvitation';

interface QuizInfoProps {
  navigation: any;
  route: any;
}

const QuizInfo = ({route, navigation}: QuizInfoProps) => {
  let {name, description, category, time} = route.params;
  return (
    <View className="bg-primary h-full">
      <HeadingWithoutInvitation navigation={navigation} />
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
