import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './index.css';

export default function User() {
  const { user: { data: user } } = useContext(UserContext);

  return (
    <>
      <img src={user.avatar_url} className='user_thumb_img' />
      <h1 className='user_name_h1'>
        {user.name}
      </h1>
      <h2 className='user_username_h2'>
        {user.login}
      </h2>
    </>
  );
}
