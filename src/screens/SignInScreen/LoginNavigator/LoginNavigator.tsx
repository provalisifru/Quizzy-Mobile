import React from 'react';

import SignIn from '../../SignInScreen/SignInScreen';
import UserScreen from '../../UserScreen/UserScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={SignIn} />
        <Stack.Screen name="Home" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
