/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('User - Página de repositórios do usuário', () => {
  beforeEach(() => {
    renderWithRouter(<App />);

    const input = screen.getByTestId('search_input');
    const searchButton = screen.getByTestId('search_button');
    const user = 'SamuelDAlencar';

    userEvent.type(input, user);
    userEvent.click(searchButton);
  });

  it('Trecho no cabeçalho com o texto "Repositories"', () => {
    setTimeout(() => {
      const header = screen.getByText('Repositories');

      expect(header).toBeInTheDocument();
    }, 3000);
  });

  it('', () => {

  });
  it('', () => {

  });
  it('', () => {

  });
  it('', () => {

  });
  it('', () => {

  });
});

