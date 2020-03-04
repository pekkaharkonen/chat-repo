import Axios from 'axios';

const loginURL = '/api/auth/login';

export const loginUser = async user => {
  try {
    let response = await Axios.post(loginURL, user);
    return response.data.token;
  } catch (err) {
    console.error(err.message);
  }
};
