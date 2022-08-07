import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Repository from '../../components/Repository';
import UserContext from '../../contexts/UserContext';
import './index.css';

export default function User() {
  const { user, setUser } = useContext(UserContext);
  const [repositories, setRepositories] = useState();
  const [userName] = useState(
    window.location.pathname.split('/')[2]
  );

  const getUser = async () => {
    if (!user) {
      try {
        const user = await axios.get(`https://api.github.com/users/${userName}`);

        setUser(user.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getRepos = async () => {
    const repositories = await axios.get(`https://api.github.com/users/${userName}/repos`);

    setRepositories(repositories.data);
  };

  useEffect(() => {
    getUser();
    getRepos();
  }, []);

  return (
    user && <main className='user_main'>
      <header className='user_header'>
        <h3 className='user_header_h3'>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="user_header_svg">
            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
          </svg>
          Repositories
        </h3>
      </header>
      <section className='user_profile_section'>
        <img src={user.avatar_url} className='user_thumb_img' />
        <h1 className='user_name_h1'>
          {user.name}
        </h1>
        <p className='user_username_p'>
          {user.login}
        </p>
        <p className='user_bio_p'>{user.bio}</p>
        <button className='user_follow_button'>Follow</button>
        <section className='user_follow_section'>
          {/* svg abaixo retirado diretamente do Github */}
          <svg className='user_follow_svg' text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
            <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
          </svg>
          <p
            className='user_follow_p'
          >
            <b>{user.followers}</b> followers
          </p>
          <span>&nbsp;·&nbsp;</span>
          <p
            className='user_follow_p'
          >
            <b>{user.following}</b> following
          </p>
        </section>
        <section className='user_blog_section'>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="user_blog_svg octicon-link">
            <path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
          </svg>
          <a href={user.blog} className='user_blog_p'>
            {user.blog}
          </a>
        </section>
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
