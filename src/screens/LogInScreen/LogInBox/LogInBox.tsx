import {Text, TouchableOpacity, View, Alert} from 'react-native';
import Input from '../../../components/Input/Input';
import AppButton from '../../../components/Button/AppButton';
import api from '../../../api/methods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnswersContext} from '../../../../App';
import {useState, useContext} from 'react';

interface LogInBoxProps {
  navigation: any;
}

const LogInBox = ({navigation}: LogInBoxProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setIsGuest, setUserId} = useContext(AnswersContext);

  const handleGuestLogin = () => {
    setIsGuest(true);
    navigation.navigate('Home');
  };

  const command = async () => {
    await api.logIn(username, password).then(response => {
      if (response?.status === 200) {
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('password', password);
        setUserId(response.data.id);
        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Login failed',
          'Invalid username and password combination, please try again.',
          [{text: 'OK'}],
        );
      }
    });
  };

  return (
    <View className="flex items-center">
      <View className="bg-secondary w-[370px] py-[30px] px-[10px] rounded-[60px]">
        <Text className="text-primary text-center text-[26px] my-5">
          Number 1. online quiz in the world
        </Text>
        <View className="m-2 px-[20px] bg-white rounded-[60px] my-5">
          <Input
            value={username}
            placeholder="Enter username..."
            setState={setUsername}
          />
        </View>
        <View className="m-2 px-[20px] bg-white rounded-[60px]">
          <Input
            value={password}
            placeholder="Enter password..."
            setState={setPassword}
          />
        </View>
        <AppButton
          onPress={command}
          text="Sign In"
          textStyle="text-white text-[18px]"
          styles="bg-primary mt-[20px] mx-auto w-[100px] h-[50px] rounded-[60px]"
        />
        <TouchableOpacity onPress={handleGuestLogin}>
          <Text className="text-primary text-center mt-[10px] text-[20px] font-bold">
            Continue as guest
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInBox;
