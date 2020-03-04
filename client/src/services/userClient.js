import Axios from 'axios';

const userApiURL = '/api/users';

export const registerUser = async user => {
  try {
    let response = await Axios.post(userApiURL, user);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err.message);
  }
};
