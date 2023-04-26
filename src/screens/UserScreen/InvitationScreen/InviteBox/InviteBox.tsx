import React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const InviteBox = () => {
  const invites = ['John Walker', 'Aston Martin', 'Gospodin u Crnom'];

  const invitationList = invites.map((invite, id) => {
    return (
      <View key={id}>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[20px] text-primary m-4 w-[65%] font-bold">
            {invite} invited you to play Football players quiz
          </Text>
          <View className="flex flex-row w-[20%] justify-between mr-4">
            <TouchableOpacity>
              <Icon
                //   onPress={() => navigation.navigate('Invitation')}
                name="check"
                size={30}
                color="#2CD833"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                //   onPress={() => navigation.navigate('Invitation')}
                name="close"
                size={30}
                color="#DD1515"
              />
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
