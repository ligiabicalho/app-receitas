import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import AppContext from '../context/AppProvider';
import App from '../App';

describe('Testando se no componente Login...', () => {
  test('se email, senha e o botão Enter são renderizados corretamente', () => {
    renderWithRouter(<AppContext><App /></AppContext>, {});

    const emailField = screen.getByTestId('email-input');
    const passwordField = screen.getByTestId('password-input');
    const loginBtn = screen.getByTestId('login-submit-btn');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();
  });

  test('se as funções de formato de email e habilitar o botão Enter funcionam corretamente', () => {
    renderWithRouter(<AppContext><App /></AppContext>, {});

    const emailField = screen.getByTestId('email-input');
    const passwordField = screen.getByTestId('password-input');
    const loginBtn = screen.getByTestId('login-submit-btn');

    userEvent.type(emailField, 'teste.teste.test@test.com');
    userEvent.type(passwordField, '123456');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();
  });
});
