import {View} from 'react-native';
import Title from '../../components/Title/Title';
import AppButton from '../../components/Button/AppButton';
import EndMessage from './EndMessage/EndMessage';
import {useState, useContext} from 'react';

import EndFunction from '../../components/EndFunction/EndFunction';
import InviteEndFunction from '../../components/InviteEndFunction/InviteEndFunction';
import Scoreboard from './Scoreboard/Scoreboard';
import {AnswersContext} from '../../../App';

interface EndScreenProps {
  navigation: any;
  route: any;
}

const EndScreen = ({navigation, route}: EndScreenProps) => {
  const {allAnswers} = useContext(AnswersContext);

  console.log('Ovo su finalni odgovori', allAnswers);

  const {quizId} = route.params;

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
      <EndMessage
        Component={InviteEndFunction}
        navigation={navigation}
        icon="🎂"
        title="Good job"
        message="Some message for you my winner woohoo let's go"
      />
      <Scoreboard quizId={quizId} />
    </View>
  );
};

export default EndScreen;
