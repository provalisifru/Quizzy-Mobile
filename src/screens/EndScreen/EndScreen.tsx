import {View} from 'react-native';
import Title from '../../components/Title/Title';
import AppButton from '../../components/Button/AppButton';
import EndMessage from './EndMessage/EndMessage';

import InviteEndFunction from '../../components/InviteEndFunction/InviteEndFunction';
import Scoreboard from './Scoreboard/Scoreboard';

interface EndScreenProps {
  navigation: any;
  route: any;
}

let icon: string, title: string, message: string, isInvite: boolean;
const results = 'finishedQuiz';

switch (results as string) {
  case 'win':
    title = 'You won!';
    message =
      'You just scored better than your friend! 🥳Here’s a cake for you:';
    icon = '🎂';
    isInvite = true;
    break;
  case 'lost':
    title = 'Oh no, you lost!';
    message =
      'Seems like your friend knows more than you do, more luck next time! No cake for you. 😓';
    icon = '😭';
    isInvite = true;
    break;
  case 'tie':
    title = 'It’s a tie!';
    message =
      'Seems like your friend and you know the same, you can play another quiz!';
    icon = '🟰';
    isInvite = true;
    break;
  case 'highScore':
    title = 'Congratulations!';
    message =
      ' You’ve just made high score on scoreboard with 27 right answers on this quiz!';
    isInvite = false;
    break;
  case 'finishedQuiz':
    title = 'Nice!';
    message =
      'You’ve scored 22 of right answers on this quiz! Go on, call your friend to play with you and see who’s better!';
    isInvite = false;
}

const EndScreen = ({navigation, route}: EndScreenProps) => {
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
        icon={icon}
        title={title}
        message={message}
        isInvite={isInvite}
        quizId={quizId}
      />
      <Scoreboard quizId={quizId} />
    </View>
  );
};

export default EndScreen;
