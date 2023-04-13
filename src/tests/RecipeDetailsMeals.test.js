import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import RenderWithRouter from './helpers/RenderWithRouter';
import App from '../App';
import fetchModules from '../../cypress/mocks/fetch';
import '@testing-library/jest-dom';

describe('testa as branches da tela RecipeDetails', () => {
  afterEach(() => jest.clearAllMocks());
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockImplementation(fetchModules);
  });

  it('testa a tela Recipe Details', async () => {
    const { history } = RenderWithRouter(<App />);
    act(() => {
      history.push('/app-receitas/meals');
    });

    const firstElement = await screen.findByTestId('0-card-name');
    expect(firstElement).toBeInTheDocument();
    userEvent.click(firstElement);
    expect(history.location.pathname).toBe('/app-receitas/meals/52977');
    const recipeTitle = await screen.findByRole('heading', { level: 1, name: 'Spicy Arrabiata Penne' });
    expect(recipeTitle).toBeInTheDocument();

    const btnProgress = await screen.findByTestId('start-recipe-btn');
    userEvent.click(btnProgress);
    expect(history.location.pathname).toBe('/app-receitas/meals/52977/in-progress');
  });
});
