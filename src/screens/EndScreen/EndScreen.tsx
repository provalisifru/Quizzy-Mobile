import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import EndMessage from './EndMessage/EndMessage';

import InviteEndFunction from '../../components/InviteEndFunction/InviteEndFunction';
import Scoreboard from './Scoreboard/Scoreboard';
import Heading from '../../feature/Heading/Heading';
import {RouteProp} from '@react-navigation/native';
import {AnswersContext} from '../../../App';
import {useContext, useEffect, useState} from 'react';
import api from '../../api/methods';

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
  const {scoreboard, isInvite, inviteId, setScoreboard, isGuest} =
    useContext(AnswersContext);
  const [message, setMessage] = useState({});
  const [result, setResult] = useState('finishedQuiz');

  const getScoreboard = (quizId: string) => {
    api.getScoreboard(quizId).then(response => {
      if (response?.status === 200) {
        setScoreboard(response.data);
      } else {
        console.log('Error', response.error);
      }
    });
  };
  useEffect(() => {
    getScoreboard(quizId);
  }, []);

  useEffect(() => {
    if (isGuest) {
      setResult('guest');
    }
    if (!scoreboard && !scoreboard.hasOwnProperty('score')) {
      return;
    }
    if (scoreboard.length > 0 || scoreboard.length === 0) {
      if (score >= scoreboard?.[0]?.score) {
        setResult('highScore');
      }
    }

    if (isInvite) {
      if (scoreboard.length > 0) {
        const inviteScore = scoreboard.find(score => score.userId === inviteId);
        if (score > inviteScore.score) setResult('win');
        else if (score < inviteScore.score) setResult('lost');
        else setResult('tie');
      }
    }

    switch (result as string) {
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
          message: `You’ve just made high score on scoreboard with ${score} right answers on this quiz!`,
          isInvite: false,
        });
        break;
      case 'guest':
        setMessage({
          title: 'Congratulations',
          message: `You’ve scored ${score} right answers on this quiz! In order to submit your score to scoreboard and invite your friends you need to Login!`,
        });
      default:
        setMessage({
          title: 'Nice!',
          message: `You’ve scored ${score} right answers on this quiz! Go on, call your friend to play with you and see who’s better!`,
          isInvite: false,
        });
    }
  }, [scoreboard]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
    </TouchableWithoutFeedback>
  );
};

export default EndScreen;
