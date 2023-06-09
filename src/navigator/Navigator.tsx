import LogIn from '../screens/LogInScreen/LogInScreen';
import UserScreen from '../screens/UserScreen/UserScreen';
import InvitationScreen from '../screens/InvitationScreen/InvitationScreen';
import QuizInfo from '../screens/QuizInfo/QuizInfo';
import Quiz from '../screens/QuizScreen/QuizScreen';
import EndScreen from '../screens/EndScreen/EndScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={UserScreen} />
        <Stack.Screen name="Invitation" component={InvitationScreen} />
        <Stack.Screen name="QuizInfo" component={QuizInfo} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="EndScreen" component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
