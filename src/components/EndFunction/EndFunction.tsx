import React, {useContext, useState} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import Input from '../Input/Input';
import AppButton from '../Button/AppButton';
import api from '../../api/methods';
import {AnswersContext} from '../../../App';
import Toast from 'react-native-simple-toast';

interface EndFunctionProps {
  navigation: any;
  quizId: string;
}

const EndFunction = ({navigation, quizId}: EndFunctionProps) => {
  const [friendUsername, setFriendUsername] = useState('');
  const {userId} = useContext(AnswersContext);

  const sendInvite = async requestBody => {
    if (requestBody.username === '') {
      Toast.show("You need to write in friend's username!", 5);
    } else {
      await api.sendInvitation(requestBody).then(response => {
        if (response?.status === 200) {
          Toast.show(`${response.data}!`, 10);
          setFriendUsername('');
        } else if (response === 'Request failed with status code 503') {
          Toast.show(`User already invited!`, 10);
        } else {
          Toast.show(`User doesn't exist!`, 10);
        }
      });
    }
  };

  return (
    <View>
      <Input
        styles="text-[16px]  px-[20px] bg-white rounded-[50px] my-5"
        placeholder="Enter friend's username..."
        setState={setFriendUsername}
        value={friendUsername}
      />
      <View className="flex-row items-center mb-4">
        <AppButton
          onPress={() => {
            Keyboard.dismiss();
            sendInvite({
              userId: userId,
              quizId: quizId,
              username: friendUsername,
            });
          }}
          text="Invite"
          textStyle="text-white text-[18px]"
          styles="bg-primary w-[100px] h-[50px] rounded-[60px]"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text className="text-primary text-center text-[20px] ml-10 font-bold">
            Back to quizzes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EndFunction;
