import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import api from '../../../api/methods';

interface ScoreboardProps {
  quizId: string;
}

const Scoreboard = ({quizId}: ScoreboardProps) => {
  const [scoreboard, setScoreboard] = useState<string[]>([]);

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

  let scores = scoreboard.map((score: any, i: number) => {
    return (
      <View key={score.id} className="flex flex-row justify-between mx-2">
        <Text className="text-primary text-[15px] font-bold">
          {i + 1}. {score.username}
        </Text>
        <Text className="text-primary text-[15px] font-bold">
          {score.score}
        </Text>
      </View>
    );
  });

  return (
    <View className="bg-secondary rounded-xl m-4 p-2">
      <Text className="font-bold text-primary text-[24px] self-center underline m-2">
        SCOREBOARD
      </Text>
      {scores}
    </View>
  );
};

export default Scoreboard;
