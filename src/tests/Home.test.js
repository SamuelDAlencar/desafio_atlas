/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockInvalidUser from './mocks/invalidUser';
// import mockValidUser from './mocks/validUser';
// import fetchUser from '../utils/fetchUser';

describe('Home - Página de pesquisa', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('Texto descritivo ("Buscar Repositório no Github")', () => {
    renderWithRouter(<App />);

    const text = screen.getByText(/Buscar Repositório no Github/i);

    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });

  it('Botão de pesquisa do usuário com o texto "search"', () => {
    renderWithRouter(<App />);

    const searchButton = screen.getByTestId('search_button');

    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeVisible();
    expect(searchButton).toHaveTextContent(/search/i);
  });

  it('Ao clicar no botão de pesquisa com o input vazio, deve ser acionado um aviso de erro', async () => {
    renderWithRouter(<App />);

    const searchButton = screen.getByTestId('search_button');
    userEvent.click(searchButton);

    const warning = await screen.findAllByText('Informe um nome de usuário válido do Github');

    expect(warning[0]).toBeInTheDocument();
  });

  it('Ao clicar no botão de pesquisa com o input preenchido, mas buscando um usuário inexistente, deve ser acionado um aviso de erro', async () => {
    renderWithRouter(<App />);

    mock.onGet('https://api.github.com/users/invalidUser').reply(404, mockInvalidUser);

    const input = screen.getByTestId('search_input');
    const invalidUser = 'invalidUser';
    userEvent.type(input, invalidUser);

    const searchButton = screen.getByTestId('search_button');
    userEvent.click(searchButton);

    const warning = await screen.findAllByText('Usuário não encontrado no github. Verifique se você digitou o nome corretamente');

    expect(warning[0]).toBeInTheDocument();
  });


  // it('Testa se há um input de busca em que, caso seja passado um usuário válido, a página redireciona o usuário para a tela de perfil', async () => {
  //   renderWithRouter(<App />);

  //   mock.onGet('https://api.github.com/users/user123').reply(200, mockValidUser);
    
  //   const input = screen.getByTestId('search_input');
  //   const searchButton = screen.getByTestId('search_button');
  //   const user = 'user123';

  //   expect(input).toBeInTheDocument();
  //   expect(input).toBeVisible();

  //   userEvent.type(input, user);
  //   expect(input).toHaveValue(user);

  //   userEvent.click(searchButton);

  //   const repositoriesField = await screen.findByText('Repositories');

  //   expect(repositoriesField).toBeInTheDocument();
  // });
});

