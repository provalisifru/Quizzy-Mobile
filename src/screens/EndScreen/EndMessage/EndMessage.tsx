import {ActivityIndicator, Text, View} from 'react-native';
import EndFunction from '../../../components/EndFunction/EndFunction';
import {AnswersContext} from '../../../../App';
import {useContext} from 'react';

interface EndMessageProps {
  navigation: any;
  Component: any;
  msg: object;
  quizId: string;
}

const EndMessage = ({navigation, Component, msg, quizId}: EndMessageProps) => {
  const {isLoadingScoreboard} = useContext(AnswersContext);

  console.log(msg);

  return (
    <View className="bg-secondary rounded-[70px] flex flex-column items-center m-4 p-2">
      <Text className="text-primary font-bold text-[32px]">{msg.title}</Text>
      {isLoadingScoreboard ? (
        <View className="mt-[50px]">
          <ActivityIndicator
            animating={isLoadingScoreboard}
            size={100}
            color="#155263"
          />
        </View>
      ) : null}
      <Text className="text-primary text-[18px] mx-6 my-1">{msg.message}</Text>
      {msg.isInvite ? (
        <Component icon={msg.icon} navigation={navigation} />
      ) : (
        <EndFunction navigation={navigation} quizId={quizId} />
      )}
    </View>
  );
};

export default EndMessage;
