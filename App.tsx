/// <reference types="nativewind/types" />

import React from 'react';
import {ScrollView, Text} from 'react-native';

import SignIn from './src/screens/SignInScreen/SignInScreen';
import UserScreen from './src/screens/UserScreen/UserScreen';

export const App = () => {
  return (
    <ScrollView>
      <SignIn />
      <UserScreen />
    </ScrollView>
  );
};

export default App;
