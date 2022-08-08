import axios from 'axios';

const fetchRepos = async (username) => {
  const repositories = await axios.get(`https://api.github.com/users/${username}/repos`);

  return repositories;
};

export default fetchRepos;
