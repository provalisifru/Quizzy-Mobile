import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import api from '../../../../api/methods';

import Icon from 'react-native-vector-icons/FontAwesome';
import {AnswersContext} from '../../../../../App';

const InviteBox = ({navigation}) => {
  const [invites, setInvites] = useState([]);

  const {getQuizInfo, quizInfo, userId} = useContext(AnswersContext);

  useEffect(() => {
    const command = async () => {
      await api.getInvitations(userId).then(response => {
        if (response?.status === 200) {
          setInvites(response.data);
        } else {
          console.log(response.error);
        }
      });
    };
    command();
  }, [invites]);

  const invitationAccept = quizId => {
    getQuizInfo(quizId ?? '');
    navigation.navigate('QuizInfo', {
      quizId: quizInfo.quizId,
      category: quizInfo.category,
      name: quizInfo.name,
      description: quizInfo.description,
      time: quizInfo.time,
    });
  };

  const invitationDecline = invId => {
    api.declineInvitation(invId);
  };

  const invitationList = invites.map((invite, id) => {
    return (
      <View key={id}>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[20px] text-primary m-4 w-[65%] font-bold">
            {invite.username} invited you to play {invite.quizName}
          </Text>
          <View className="flex flex-row w-[20%] justify-between mr-4">
            <TouchableOpacity onPress={() => invitationAccept(invite.quizId)}>
              <Icon name="check" size={30} color="#2CD833" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => invitationDecline(invite.id)}>
              <Icon name="close" size={30} color="#DD1515" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-primary w-[95%] h-[5px] m-auto"></View>
      </View>
    );
  });

  return (
    <ScrollView className="bg-secondary flex flex-column m-3">
      <Text className="text-primary text-[40px] text-center font-bold m-2 ">
        Invitations
      </Text>
      {invitationList}
    </ScrollView>
  );
};

export default InviteBox;
