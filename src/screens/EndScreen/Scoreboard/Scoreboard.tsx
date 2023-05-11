import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AnswersContext} from '../../../../App';

const Scoreboard = () => {
  const {scoreboard} = useContext(AnswersContext);

  let topScoreboard = scoreboard.filter((item, id) => id < 10);

  let scores = topScoreboard.map((score: any, i: number) => {
    return (
      <View key={i} className="flex flex-row justify-between mx-2">
        <Text className="text-primary text-[20px] font-bold">
          {i + 1}. {score.username}
        </Text>
        <Text className="text-primary text-[20px] font-bold">
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
