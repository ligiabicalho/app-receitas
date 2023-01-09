import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/RenderWithRouter';
import AppProvider from '../context/AppProvider';
import '@testing-library/jest-dom';
import App from '../App';

describe('Testa a pagina Favorite Recipes', () => {
  const idHorizName0 = '0-horizontal-name';
  const favoriteRecipes = [
    {
      id: '52771',
      type: 'meal',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
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
    const faveBtn = screen.getByTestId('profile-favorite-btn');
    userEvent.click(faveBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorite-recipes');

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  });

  it('se todas as receitas finalizadas são renderizadas na tela', () => {
    const filterAll = screen.getByTestId('filter-by-all-btn');
    expect(filterAll).toBeInTheDocument();
    userEvent.click(filterAll);

    const doneRecipe0 = screen.getByTestId(idHorizName0);
    expect(doneRecipe0).toHaveTextContent(favoriteRecipes[0].name);

    const doneRecipe1 = screen.getByTestId('1-horizontal-name');
    expect(doneRecipe1).toHaveTextContent(favoriteRecipes[1].name);
  });
  it('se os botões de filtrar por drink é renderizados na tela e funciona corretamente', () => {
    const filterDrinks = screen.getByTestId('filter-by-drink-btn');
    expect(filterDrinks).toBeInTheDocument();

    userEvent.click(filterDrinks);
    const drinkDoneRecipe = screen.getByTestId(idHorizName0);
    expect(drinkDoneRecipe).toHaveTextContent(favoriteRecipes[1].name);
  });
  it('se os botões de filtrar por drink é renderizados na tela e funciona corretamente', () => {
    const filterMeals = screen.getByTestId('filter-by-meal-btn');
    expect(filterMeals).toBeInTheDocument();

    userEvent.click(filterMeals);
    const mealDoneRecipe = screen.getByTestId(idHorizName0);
    expect(mealDoneRecipe).toHaveTextContent(favoriteRecipes[0].name);
  });
  it('se o botão de compartilhar copia o link', () => {
    const shareBtn = screen.getByTestId('0-horizontal-share-btn');
    expect(shareBtn).toHaveAttribute('alt', 'compartilhar');

    // userEvent.click(shareBtn);
    // expect(shareBtn).toHaveTextContent('Link copied!');
  });
});
