import {Text, View} from 'react-native';
import EndMessage from './EndMessage/EndMessage';

import InviteEndFunction from '../../components/InviteEndFunction/InviteEndFunction';
import Scoreboard from './Scoreboard/Scoreboard';
import Heading from '../../feature/Heading/Heading';
import {RouteProp} from '@react-navigation/native';
import {AnswersContext} from '../../../App';
import {useContext, useEffect, useState} from 'react';

interface MyParams {
  quizId: string;
  score: string;
}

interface EndScreenProps {
  navigation: any;
  route: RouteProp<Record<string, MyParams>, string>;
}

const EndScreen = ({navigation, route}: EndScreenProps) => {
  const {quizId, score} = route.params;
  const {scoreboard, isInvite, inviteId} = useContext(AnswersContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    let results = 'finishedQuiz';
    if (!scoreboard && !scoreboard.hasOwnProperty('score')) {
      return;
    }
    if (score >= scoreboard?.[0]?.score || scoreboard.length === 0) {
      results = 'highScore';
    }

    if (isInvite) {
      if (!scoreboard && !scoreboard.hasOwnProperty('score')) {
        return;
      } else {
        const inviteScore = scoreboard.find(score => (score.id = inviteId));
        console.log(inviteScore);
        if (score > inviteScore) results = 'win';
        else if (score < inviteScore) results = 'lost';
        else results = 'tie';
      }
    }

    switch (results as string) {
      case 'win':
        setMessage({
          title: 'You won!',
          message:
            'You just scored better than your friend! 🥳Here’s a cake for you:',
          icon: '🎂',
          isInvite: true,
        });
        break;
      case 'lost':
        setMessage({
          title: 'Oh no, you lost!',
          message:
            'Seems like your friend knows more than you do, more luck next time! No cake for you. 😓',
          icon: '😭',
          isInvite: true,
        });
        break;
      case 'tie':
        setMessage({
          title: 'It’s a tie!',
          message:
            'Seems like your friend and you know the same, you can play another quiz!',
          icon: '🟰',
          isInvite: true,
        });
        break;
      case 'highScore':
        setMessage({
          title: 'Congratulations!',
          message: ` You’ve just made high score on scoreboard with ${score} right answers on this quiz!`,
          isInvite: false,
        });
        break;
      default:
        setMessage({
          title: 'Nice!',
          message: `You’ve scored ${score} right answers on this quiz! Go on, call your friend to play with you and see who’s better!`,
          isInvite: false,
        });
    }
  }, [scoreboard]);

  return (
    <View className="bg-primary h-full">
      <Heading
        navigation={navigation}
        iconName={false}
        isInvitationShown={false}
      />

      <EndMessage
        Component={InviteEndFunction}
        navigation={navigation}
        msg={message}
        quizId={quizId}
      />
      <Scoreboard quizId={quizId} />
    </View>
  );
};

export default EndScreen;
