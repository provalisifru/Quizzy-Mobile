import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import api from '../../../api/methods';
import {AnswersContext} from '../../../../App';

interface ScoreboardProps {
  quizId: string;
}

const Scoreboard = ({quizId}: ScoreboardProps) => {
  const {scoreboard, setScoreboard, setIsLoadingScoreboard} =
    useContext(AnswersContext);

  const getScoreboard = (quizId: string) => {
    setIsLoadingScoreboard(true);
    api.getScoreboard(quizId).then(response => {
      if (response?.status === 200) {
        setScoreboard(response.data);
      } else {
        console.log('Error', response.error);
      }
      setIsLoadingScoreboard(false);
    });
  };

  useEffect(() => {
    getScoreboard(quizId);
  }, []);

  let scores = scoreboard.map((score: any, i: number) => {
    return (
      <View key={i} className="flex flex-row justify-between mx-2">
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
    <ScrollView className="bg-secondary rounded-xl m-4 p-2">
      <Text className="font-bold text-primary text-[24px] self-center underline m-2">
        SCOREBOARD
      </Text>
      {scores}
    </ScrollView>
  );
};

export default Scoreboard;
