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
      history.push('/app-receitas/drinks');
    });

    const firstElement = await screen.findByTestId('0-card-name');
    expect(firstElement).toBeInTheDocument();
    userEvent.click(firstElement);
    expect(history.location.pathname).toBe('/app-receitas/drinks/15997');
    const recipeTitle = await screen.findByRole('heading', { level: 1, name: 'GG' });
    expect(recipeTitle).toBeInTheDocument();

    const btnProgress = await screen.findByTestId('start-recipe-btn');
    userEvent.click(btnProgress);
    expect(history.location.pathname).toBe('/app-receitas/drinks/15997/in-progress');
  });
  it('testa a tela Recipe Details', () => {
    const { history } = RenderWithRouter(<App />);
    act(() => {
      history.push('/app-receitas/drinks');
    });

    const testElement = screen.queryByText(/test/i);
    expect(testElement).not.toBeInTheDocument();
  });
});
