/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import MockAdapter from 'axios-mock-adapter';
import mockValidUser from './mocks/validUser';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import repos from './mocks/repos';

describe('User - Página de repositórios do usuário', () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);

    mock
      .onGet('https://api.github.com/users/user123')
      .reply(200, mockValidUser);
    mock
      .onGet('https://api.github.com/users/user123/repos')
      .reply(200, repos);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByTestId('search_input');
    const searchButton = screen.getByTestId('search_button');
    const user = 'user123';

    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();

    userEvent.type(input, user);
    expect(input).toHaveValue(user);

    userEvent.click(searchButton);
  });

  it('Cabeçalho com a tag "h3" que possui o texto "Repositories"', async () => {
    const header = await screen.findByTestId('user_header');
    const title = await screen.findByTestId('user_header_h3');

    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Repositories');
  });

  it('Tag "section" com o conteudo do perfil do usuário', async () => {
    const userSection = await screen.findByTestId('user_profile_section');
    const userThumb = await screen.findByTestId('user_profile_thumb');
    const userName = await screen.findByTestId('user_profile_name');
    const userLogin = await screen.findByTestId('user_profile_login');
    const userBio = await screen.findByTestId('user_profile_bio');
    const userFollowers = await screen.findByTestId('user_profile_followers');
    const userFollowing = await screen.findByTestId('user_profile_following');

    expect(userSection).toBeInTheDocument();
    expect(userThumb).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(userLogin).toBeInTheDocument();
    expect(userBio).toBeInTheDocument();
    expect(userFollowers).toBeInTheDocument();
    expect(userFollowing).toBeInTheDocument();
  });

  it('A tag "section" contem os dados corretos do usuário', async () => {
    const userThumb = await screen.findByTestId('user_profile_thumb');
    const userName = await screen.findByTestId('user_profile_name');
    const userLogin = await screen.findByTestId('user_profile_login');
    const userBio = await screen.findByTestId('user_profile_bio');
    const userFollowers = await screen.findByTestId('user_profile_followers');
    const userFollowing = await screen.findByTestId('user_profile_following');

    expect(userThumb).toHaveAttribute('src', mockValidUser.avatar_url);
    expect(userName).toHaveTextContent(mockValidUser.name);
    expect(userLogin).toHaveTextContent(mockValidUser.login);
    expect(userBio).toHaveTextContent(mockValidUser.bio);
    expect(userFollowers).toHaveTextContent(mockValidUser.followers);
    expect(userFollowing).toHaveTextContent(mockValidUser.following);
  });

  it('Tag "section" com os repositórios do usuário', async () => {
    const userRepSection = await screen.findByTestId('user_reps_section');

    expect(userRepSection).toBeInTheDocument();
  });
});

