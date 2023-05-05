import React from 'react';
import {View} from 'react-native';
import QuizBox from './QuizBox/QuizBox';
import Heading from '../../feature/Heading/Heading';

interface QuizInfoProps {
  navigation: any;
  route: any;
}

const QuizInfo = ({route, navigation}: QuizInfoProps) => {
  let {quizId, name, description, category, time} = route.params;
  return (
    <View className="bg-primary h-full">
      <Heading
        navigation={navigation}
        iconName={false}
        isInvitationShown={false}
      />
      <QuizBox
        name={name}
        description={description}
        category={category}
        time={time}
        navigation={navigation}
        quizId={quizId}
      />
    </View>
  );
};

export default QuizInfo;
