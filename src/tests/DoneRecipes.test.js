import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/RenderWithRouter';
import AppProvider from '../context/AppProvider';
import '@testing-library/jest-dom';
import App from '../App';

describe('Testa a pagina Done Recipes', () => {
  const doneRecipes = [
    {
      id: '52771',
      type: 'meal',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry', 'Tag3'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

  beforeEach(() => {
    const { history } = renderWithRouter(<AppProvider><App /></AppProvider>, {});

    const emailField = screen.getByTestId('email-input');
    const passwordField = screen.getByTestId('password-input');

    userEvent.type(emailField, 'teste@test.com');
    userEvent.type(passwordField, '1234567');
    userEvent.click(screen.getByRole('button', { name: 'Enter' }));

    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const doneBtn = screen.getByTestId('profile-done-btn');
    userEvent.click(doneBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/done-recipes');

    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  });

  it('se todas as receitas finalizadas são renderizadas na tela', () => {
    const filterAll = screen.getByTestId('filter-by-all-btn');
    expect(filterAll).toBeInTheDocument();
    userEvent.click(filterAll);

    const doneRecipe0 = screen.getByTestId('0-horizontal-name');
    expect(doneRecipe0).toHaveTextContent(doneRecipes[0].name);

    const doneRecipe1 = screen.getByTestId('1-horizontal-name');
    expect(doneRecipe1).toHaveTextContent(doneRecipes[1].name);
  });
  it('se os botões de filtrar por drink é renderizados na tela e funciona corretamente', () => {
    const filterDrinks = screen.getByTestId('filter-by-drink-btn');
    expect(filterDrinks).toBeInTheDocument();

    userEvent.click(filterDrinks);
    const drinkDoneRecipe = screen.getByTestId('0-horizontal-name');
    expect(drinkDoneRecipe).toHaveTextContent(doneRecipes[1].name);
  });
  it('se os botões de filtrar por drink é renderizados na tela e funciona corretamente', () => {
    const filterMeals = screen.getByTestId('filter-by-meal-btn');
    expect(filterMeals).toBeInTheDocument();

    userEvent.click(filterMeals);
    const mealDoneRecipe = screen.getByTestId('0-horizontal-name');
    expect(mealDoneRecipe).toHaveTextContent(doneRecipes[0].name);
  });
});
