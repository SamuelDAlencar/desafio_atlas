import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return ({
    ...render(
      <Router
        location={history.location}
        navigator={history}>
        <ToastContainer />
        {component}
      </Router>),
    history,
  });
};

export default renderWithRouter;
