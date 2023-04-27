import axios from 'axios';

const url = 'https://quizzywebapi.azurewebsites.net';

const logIn = async (username, password) => {
  try {
    const response = await axios.post(`${url}/api/users/login`, {
      username,
      password,
    });

    if (response.status === 200) {
      console.log('Sign in successful:', response.data.message);
    } else {
      console.log('Sign in failed:', response.data.message);
    }
  } catch (error) {
    console.error('Error during sign-in:', error.message);
  }
};

export default logIn;
