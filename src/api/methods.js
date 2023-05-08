import axios from 'axios';

const url = 'https://quizzywebapi.azurewebsites.net';

const logIn = async (username, password) => {
  try {
    const response = await axios.post(`${url}/api/users/login`, {
      username,
      password,
    });
    return response;
  } catch (error) {
    return error.message;
  }
};

const getQuizzes = async () => {
  try {
    const response = await axios.get(`${url}/api/quizzes`, {});
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getQuiz = async quizId => {
  try {
    const response = await axios.get(`${url}/api/quizzes/${quizId}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

const getCategories = async () => {
  try {
    const response = await axios.get(`${url}/api/quizzes/category`, {});
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getScoreboard = async quizId => {
  try {
    const response = await axios.get(`${url}/api/scoreboards/${quizId}`, {});
    return response;
  } catch (error) {
    return error.message;
  }
};

const getInvitations = async userId => {
  try {
    const response = await axios.get(
      `${url}/api/invites/invited/${userId}`,
      {},
    );
    return response;
  } catch (error) {
    return error.message;
  }
};

const declineInvitation = async invId => {
  try {
    const response = await axios.patch(
      `${url}/api/invites/deactivate/${invId}`,
      {},
    );
    return response;
  } catch (error) {
    return error.message;
  }
};

const sendInvitation = async requestBody => {
  try {
    const response = await axios.post(`${url}/api/invites`, requestBody);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default {
  logIn,
  getQuizzes,
  getQuiz,
  getCategories,
  getScoreboard,
  getInvitations,
  declineInvitation,
  sendInvitation,
};
