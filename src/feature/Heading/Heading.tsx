import React, {useContext} from 'react';
import Title from '../../components/Title/Title';
import {TouchableOpacity, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnswersContext} from '../../../App';

interface HeadingProps {
  navigation: any;
  iconName: boolean;
  isInvitationShown?: boolean;
}

const Heading = ({navigation, iconName, isInvitationShown}: HeadingProps) => {
  const {isGuest, setIsGuest} = useContext(AnswersContext);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');
    if (isGuest === true) {
      setIsGuest(false);
    }

    navigation.navigate('LogIn');
  };
  return (
    <View className="flex flex-row items-center justify-around my-[30px] bg-primary">
      <Title styles="text-secondary text-[40px] text-[40px]" />
      <View className="ml-[-30px]">
        {!isGuest && isInvitationShown ? (
          iconName ? (
            <TouchableOpacity onPress={() => navigation.navigate('Invitation')}>
              <Icon name="envelope" size={30} color="#FFC93C" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="envelope-open" size={30} color="#FFC93C" />
            </TouchableOpacity>
          )
        ) : null}
      </View>
      <AppButton
        onPress={handleLogout}
        text={isGuest ? 'Log in' : 'Log out'}
        textStyle="text-primary text-[20px]"
        styles="bg-secondary w-[90px] p-1 rounded-[60px]"
      />
    </View>
  );
};

export default Heading;
