import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import AppProvider from '../context/AppProvider';
import '@testing-library/jest-dom';
import FavoriteRecipes from '../pages/FavoriteRecipes';

describe('Testa a página de favoritos', () => {
/*   test('Se a página favoriteRecipes é renderizada', () => {
    const { history } = renderWithRouter(<AppProvider><FavoriteRecipes /></AppProvider>);
    const { pathname } = history.location;
    const filterAll = screen.getByTestId('filter-by-all-btn');
    const filterMeals = screen.getByTestId('filter-by-meal-btn');
    const filterDrinks = screen.getByTestId('filter-by-drink-btn');

    expect(pathname).toBe('/favorite-recipes');
    expect(filterAll).toBeInTheDocument();
    expect(filterMeals).toBeInTheDocument();
    expect(filterDrinks).toBeInTheDocument();
  }); */
});
