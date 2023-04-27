import React from 'react';
import {Text, View} from 'react-native';

const array = [
  {
    id: 'PeraPeric',
    username: 'Pera Peric',
    points: '26',
  },
  {
    id: 'PeraPeric1',
    username: 'Pera Peric',
    points: '26',
  },
  {
    id: 'PeraPeric2',
    username: 'Pera Peric',
    points: '26',
  },
  {
    id: 'PeraPeric3',
    username: 'Pera Peric',
    points: '26',
  },
  {
    id: 'PeraPeric4',
    username: 'Pera Peric',
    points: '26',
  },
];

const Scoreboard = () => {
  let scores = array.map((score, i) => {
    return (
      <View key={score.id} className="flex flex-row justify-between mx-2">
        <Text className="text-primary text-[15px] font-bold">
          {i + 1}. {score.username}
        </Text>
        <Text className="text-primary text-[15px] font-bold">
          {score.points}
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
