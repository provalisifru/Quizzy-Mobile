import React from 'react';

import {View} from 'react-native';

import Heading from '../../../feature/Heading/Heading';
import InviteBox from './InviteBox/InviteBox';

interface InvitationScreenProps {
  navigation: any;
}

const InvitationScreen = ({navigation}: InvitationScreenProps) => {
  return (
    <View className="bg-primary v-full h-full">
      <Heading navigation={navigation} iconName={false} />
      <InviteBox />
    </View>
  );
};

export default InvitationScreen;
