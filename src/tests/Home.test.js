/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Home - Página de pesquisa', () => {
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
    const input = screen.getByTestId('search_input');
    const invalidUser = 'invalid9a9a9a9a9a9a9a9a9a9a9a9a9aa9invalid';
    userEvent.type(input, invalidUser);

    const searchButton = screen.getByTestId('search_button');
    userEvent.click(searchButton);

    const warning = await screen.findAllByText('Usuário não encontrado no github. Verifique se você digitou o nome corretamente');

    expect(warning[0]).toBeInTheDocument();
  });


  it('Testa se há um input de busca em que, caso seja passado um usuário válido, a página redireciona o usuário para a tela de perfil', () => {
    renderWithRouter(<App />);

    const input = screen.getByTestId('search_input');
    const searchButton = screen.getByTestId('search_button');
    const user = 'namexbalboa';

    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();

    userEvent.type(input, user);
    expect(input).toHaveValue(user);

    userEvent.click(searchButton);

    setTimeout(() => {
      expect(location.href).toContain(`/user/${user}/reps`);
    }, 5000);
  });
});

