import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';
import RenderWithRouter from './helpers/RenderWithRouter';

describe('Testa o componente Header', () => {
  test('se o componente Header é renderizado na página de login', () => {
    RenderWithRouter(<App />);
    const title = screen.queryByTestId('page-title');

    expect(title).not.toBeInTheDocument();
  });

  test('se na página "/meals", o Header e seus elementos são renderizados', () => {
    RenderWithRouter(<Meals />);
    const meals = screen.getByText(/meals/i);
    const profilePic = screen.getByTestId('profile-top-btn');
    const searchIcon = screen.getByTestId('search-top-btn');

    expect(meals).toBeInTheDocument();
    expect(profilePic).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
  test('se na página "/meals", o Header e seus elementos são renderizados', () => {
    RenderWithRouter(<Drinks />);
    const drinks = screen.getByText(/drinks/i);

    expect(drinks).toBeInTheDocument();
  });
});
