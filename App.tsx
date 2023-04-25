/// <reference types="nativewind/types" />

import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import SignIn from './src/screens/SignInScreen/SignInScreen';
import UserScreen from './src/screens/UserScreen/UserScreen';

export const App = () => {
  return (
    <View className="h-full">
      {/* <SignIn /> */}
      <UserScreen />
    </View>
  );
};

export default App;
