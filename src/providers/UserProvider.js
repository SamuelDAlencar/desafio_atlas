import PropTypes from 'prop-types';
import React, { useState } from 'react';
import UserContext from '../contexts/UserContext';

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.any
};
