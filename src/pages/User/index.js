import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Repository from '../../components/Repository';
import UserContext from '../../contexts/UserContext';
import './index.css';

export default function User() {
  const { user: { data: user } } = useContext(UserContext);
  const [repositories, setRepositories] = useState();

  const getRepos = async () => {
    const repositories = await axios.get(`https://api.github.com/users/${user.login}/repos`);

    setRepositories(repositories.data);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <main className='user_main'>
      <section className='user_profile_section'>
        <img src={user.avatar_url} className='user_thumb_img' />
        <h1 className='user_name_h1'>
          {user.name}
        </h1>
        <h2 className='user_username_h2'>
          {user.login}
        </h2>
      </section>
      <section className='user_reps_section'>
        {repositories
          && repositories.map((repository) => {
            return <Repository
              key={repository.id}
              repository={repository}
            />;
          })}
      </section>
    </main>
  );
}
