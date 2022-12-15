import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import AppContext from '../context/AppProvider';
import App from '../App';
import { getUserEmail } from '../services/localStorage';
import '@testing-library/jest-dom';

describe('Testando se no componente Login...', () => {
  const ID_EMAIL = 'email-input';
  const ID_PASSWORD = 'password-input';
  const ID_LOGIN_BTN = 'login-submit-btn';

  test('se email, senha e o botão Enter são renderizados corretamente', () => {
    renderWithRouter(<AppContext><App /></AppContext>, {});

    const emailField = screen.getByTestId(ID_EMAIL);
    const passwordField = screen.getByTestId(ID_PASSWORD);
    const loginBtn = screen.getByTestId(ID_LOGIN_BTN);

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();
  });

  test('se o botao Enter permanece desabilitado com email e senha errados', () => {
    renderWithRouter(<AppContext><App /></AppContext>, {});

    const emailField = screen.getByTestId(ID_EMAIL);
    const passwordField = screen.getByTestId(ID_PASSWORD);
    const loginBtn = screen.getByTestId(ID_LOGIN_BTN);

    userEvent.type(emailField, 'teste');
    userEvent.type(passwordField, '123456');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();
  });
  test('se as funções de formato de email e habilitar o botão Enter funcionam corretamente', () => {
    renderWithRouter(<AppContext><App /></AppContext>, {});

    const emailField = screen.getByTestId(ID_EMAIL);
    const passwordField = screen.getByTestId(ID_PASSWORD);
    const loginBtn = screen.getByTestId(ID_LOGIN_BTN);

    userEvent.type(emailField, 'teste@test.com');
    userEvent.type(passwordField, '1234567');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginBtn).not.toBeDisabled();
    userEvent.click(screen.getByRole('button', { name: 'Enter' }));
    // expect(history.location.pathname).toBe('/meals');

    const userLocalStorage = getUserEmail();
    expect(userLocalStorage.email).toContain('teste@test.com');
  });
});
