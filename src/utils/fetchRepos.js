import axios from 'axios';

const fetchRepos = async (username) => {
  try {
    const repositories = await axios.get(`https://api.github.com/users/${username}/repos`);
    console.log(repositories);
    return repositories;
  } catch (error) {
    if (error.response.status == 404) {
      return false;
    }
  }
};

export default fetchRepos;
