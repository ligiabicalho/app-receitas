import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';
import RenderWithRouter from './helpers/RenderWithRouter';

describe('Testa o componente Footer', () => {
  test('se o componente Footer é renderizado nas páginas de Meals com todos seus elementos', () => {
    RenderWithRouter(<Meals />);
    const footer = screen.getByTestId('footer');
    const mealIcon = screen.getByTestId('meals-bottom-btn');
    const drinkIcon = screen.getByTestId('drinks-bottom-btn');

    expect(footer).toBeInTheDocument();
    expect(mealIcon).toBeInTheDocument();
    expect(drinkIcon).toBeInTheDocument();
  });
  test('se ao clicar no botão Drinks, é redirecionado para a rota "/drinks"', () => {
    const { history } = RenderWithRouter(<Meals />);
    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(drinkIcon);
    const { pathname } = history.location;
    expect(pathname).toBe('/drinks');
  });
  test('se ao clicar no botão Meals, é redirecionado para a rota "/meals"', () => {
    const { history } = RenderWithRouter(<Drinks />);
    const mealIcon = screen.getByTestId('meals-bottom-btn');
    userEvent.click(mealIcon);
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });
});
