import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import App from '../App';

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
});
