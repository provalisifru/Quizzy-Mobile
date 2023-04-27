import {Text, View} from 'react-native';

interface EndMessageProps {
  navigation: any;
  Component: any;
  title: string;
  message: string;
  icon: string;
}

const EndMessage = ({
  navigation,
  title,
  message,
  Component,
  icon,
}: EndMessageProps) => {
  return (
    <View className="bg-secondary rounded-[70px] flex flex-column items-center m-4 p-2">
      <Text className="text-primary font-bold text-[32px]">{title}</Text>
      <Text className="text-primary text-[18px] mx-6 my-1">{message}</Text>
      <Component icon={icon} navigation={navigation} />
    </View>
  );
};

export default EndMessage;
