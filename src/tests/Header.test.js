import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';
import RenderWithRouter from './helpers/RenderWithRouter';
import Profile from '../components/Profile';

describe('Testa o componente Header', () => {
  test('se o componente Header é renderizado na página de login', () => {
    RenderWithRouter(<App />);
    const title = screen.queryByTestId('page-title');
    expect(title).not.toBeInTheDocument();
  });

  test('se na página "/meals", o Header e seus elementos são renderizados', async () => {
    RenderWithRouter(<Meals />);
    const meals = screen.getByText(/meals/i);
    const profilePic = screen.getByTestId('profile-top-btn');
    const searchIcon = screen.getByTestId('search-top-btn');
    const input = screen.queryByTestId('search-input');

    expect(meals).toBeInTheDocument();
    expect(profilePic).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(input).not.toBeInTheDocument();

    userEvent.click(searchIcon);
    await waitFor(() => {
      expect(screen.getByTestId('search-input')).toBeInTheDocument();
    });

    userEvent.click(searchIcon);
    await waitFor(() => {
      expect(input).not.toBeInTheDocument();
    });
  });
  test('se ao clicar no botão profile, é redirecionado para a rota "/profile"', () => {
    const { history } = RenderWithRouter(<Meals />);
    const profilePic = screen.getByTestId('profile-top-btn');
    userEvent.click(profilePic);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
  test('se na página "/drinks", o Header e seus elementos são renderizados', () => {
    RenderWithRouter(<Drinks />);
    const drinks = screen.getByText(/drinks/i);
    const searchIcon = screen.queryByTestId('search-top-btn');
    expect(drinks).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
  test('se na página "/profile", o Header e seus elementos são renderizados', () => {
    RenderWithRouter(<Profile />);
    const profile = screen.getByText(/profile/i);
    const searchIcon = screen.queryByTestId('search-top-btn');
    expect(profile).toBeInTheDocument();
    expect(searchIcon).not.toBeInTheDocument();
  });
});
