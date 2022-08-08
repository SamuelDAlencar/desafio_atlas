import axios from 'axios';

const fetchUser = async (input) => {
  try {
    const user = await axios.get(`https://api.github.com/users/${input}`);

    return user;
  } catch (error) {
    if (error.response.status == 404) {
      return false;
    }
  }
};

export default fetchUser;
