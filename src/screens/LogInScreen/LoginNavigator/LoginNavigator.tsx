import React from 'react';

import LogIn from '../../LogInScreen/LogInScreen';
import UserScreen from '../../UserScreen/UserScreen';
import InvitationScreen from '../../UserScreen/InvitationScreen/InvitationScreen';
import QuizInfo from '../../QuizInfo/QuizInfo';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={UserScreen} />
        <Stack.Screen name="Invitation" component={InvitationScreen} />
        <Stack.Screen name="QuizInfo" component={QuizInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
