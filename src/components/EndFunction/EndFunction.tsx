import React, {useContext, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Input from '../Input/Input';
import AppButton from '../Button/AppButton';
import api from '../../api/methods';
import {AnswersContext} from '../../../App';
import {AdornmentSide} from 'react-native-paper/lib/typescript/src/components/TextInput/Adornment/enums';

interface EndFunctionProps {
  navigation: any;
  quizId: string;
}

const EndFunction = ({navigation, quizId}: EndFunctionProps) => {
  const [message, setMessage] = useState('');
  const [friendUsername, setFriendUsername] = useState('');
  const {userId} = useContext(AnswersContext);

  const sendInvite = async requestBody => {
    await api.sendInvitation(requestBody).then(response => {
      if (response?.status === 200) {
        console.log(response.data);
        setMessage(response.data);
      } else {
        console.log(response.error);
      }
    });
  };

  return (
    <View>
      <View className=" px-[20px] bg-white rounded-[50px] my-5">
        <Input
          styles="text-[16px]"
          placeholder="Enter friend's username..."
          setState={setFriendUsername}
        />
      </View>
      <View className="flex-row items-center mb-4">
        <AppButton
          onPress={() =>
            sendInvite({
              userId: userId,
              quizId: quizId,
              username: friendUsername,
            })
          }
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
