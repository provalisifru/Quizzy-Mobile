import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface InstructionsPopUpProps {
  time: string;
  command: any;
}

const InstructionsPopup = ({time, command}: InstructionsPopUpProps) => {
  return (
    <View className="flex items-left bg-ternary m-5 ">
      <View className="flex flex-row justify-between ">
        <Text className="text-black text-[15px] font-bold">
          In this quiz you will have {time} minutes to finish it, you have two
          types of help:
        </Text>
        <View className="absolute right-[-18px] top-[-22px]">
          <Icon onPress={command} name="close" size={30} color="black" />
        </View>
      </View>

      <View className="flex flex-column justify-center align-center mt-5 ">
        <View className="mb-3 flex flex-row  justify-around items-center ">
          <Icon name="star-half-o" size={30} color="black" />
          <Text className="font-bold text-black text-[16px] w-[80%]">
            Help 1 - hides half of incorrect answers
          </Text>
        </View>

        <View className="mb-3 flex flex-row items-center justify-around ml-1">
          <Icon name="lightbulb-o" size={30} color="black" />
          <Text className="font-bold text-black text-[16px] w-[80%]">
            Help 2 - gives you a hint to right answers
          </Text>
        </View>

        <View className="mb-3 flex flex-row items-center justify-around">
          <IonIcon name="stopwatch" size={30} color="black" />
          <Text className="font-bold text-black text-[16px] w-[80%]">
            Time - time left until end of the quiz
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InstructionsPopup;
