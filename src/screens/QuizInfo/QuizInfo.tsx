import React from 'react';
import {View} from 'react-native';
import QuizBox from './QuizBox/QuizBox';
import Heading from '../../feature/Heading/Heading';

interface QuizInfoProps {
  navigation: any;
  route: any;
}

const QuizInfo = ({route, navigation}: QuizInfoProps) => {
  let {data, inviteId} = route.params;
  return (
    <View className="bg-primary h-full">
      <Heading
        navigation={navigation}
        iconName={false}
        isInvitationShown={false}
      />
      <QuizBox navigation={navigation} data={data} inviteId={inviteId} />
    </View>
  );
};

export default QuizInfo;
