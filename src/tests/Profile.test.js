import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import App from '../App';
import Profile from '../pages/Profile';
import AppProvider from '../context/AppProvider';

describe('Testando se no componente Login...', () => {
  const ID_EMAIL = 'email-input';
  const ID_PASSWORD = 'password-input';
  const ID_LOGIN_BTN = 'login-submit-btn';

  test('se o botao Enter permanece desabilitado com email e senha errados', () => {
    renderWithRouter(<App />);

    const emailField = screen.getByTestId(ID_EMAIL);
    const passwordField = screen.getByTestId(ID_PASSWORD);
    const loginBtn = screen.getByTestId(ID_LOGIN_BTN);

    userEvent.type(emailField, 'teste@test.com');
    userEvent.type(passwordField, '1234567');
    userEvent.click(loginBtn);

    const profileBtn = screen.getByTestId('profile-top-btn');

    userEvent.click(profileBtn);

    const email = screen.findByTestId('page-title');
    const doneBtn = screen.findByTestId('profile-done-btn');
    const favBtn = screen.findByTestId('profile-favorite-btn');
    const LogoutBtn = screen.findByTestId('profile-logout-btn');

    waitFor(() => {
      expect(email).toBeInTheDocument();
      expect(email).toBe('teste@test.com');
      expect(doneBtn).toBeInTheDocument();
      expect(favBtn).toBeInTheDocument();
      expect(LogoutBtn).toBeInTheDocument();
    });
  });
  test('rota do botão de Favorite Recipes', () => {
    const { history } = renderWithRouter(<AppProvider><Profile /></AppProvider>);
    const favBtn = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favBtn);
    const { pathname } = history.location;

    waitFor(() => expect(pathname).toBe('/favorite-recipes'));
  });

  test('rota do botão de Done Recipes', () => {
    const { history } = renderWithRouter(<AppProvider><Profile /></AppProvider>);
    const doneBtn = screen.getByTestId('profile-done-btn');
    userEvent.click(doneBtn);
    const { pathname } = history.location;

    waitFor(() => expect(pathname).toBe('/done-recipes'));
  });

  test('rota do botão de Logout', () => {
    const { history } = renderWithRouter(<AppProvider><Profile /></AppProvider>);
    const logoutBtn = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutBtn);
    const { pathname } = history.location;

    waitFor(() => expect(pathname).toBe('/'));
  });
});
