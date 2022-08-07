import PropTypes from "prop-types"
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Repository({ repository }) {
  console.log(repository);

  return (
    <h1>{ repository.name }</h1>
  );
}
Repository.propTypes = {
  repository: PropTypes.object
};
