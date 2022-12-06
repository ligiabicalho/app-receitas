import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';
import RenderWithRouter from './helpers/RenderWithRouter';
import Profile from '../pages/Profile';
import AppProvider from '../context/AppProvider';

describe('Testa o componente Header', () => {
  const seachId = 'search-top-btn';
  const testIdPageTitle = 'page-title';
  const lastElement = '11-recipe-card';
  test('se o componente Header é renderizado na página de login', () => {
    RenderWithRouter(<AppProvider><App /></AppProvider>);
    const title = screen.queryByTestId(testIdPageTitle);
    expect(title).not.toBeInTheDocument();
  });

  test('se na página "/meals", o Header e seus elementos são renderizados', async () => {
    RenderWithRouter(<AppProvider><Meals /></AppProvider>);
    const meals = screen.getByText(/meals/i);
    const profilePic = screen.getByTestId('profile-top-btn');
    const searchIcon = screen.getByTestId(seachId);
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
    const { history } = RenderWithRouter(<AppProvider><Meals /></AppProvider>);
    const profilePic = screen.getByTestId('profile-top-btn');
    userEvent.click(profilePic);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
  test('se na página "/drinks", o Header e seus elementos são renderizados', () => {
    RenderWithRouter(<AppProvider><Drinks /></AppProvider>);
    const drinks = screen.getByText(/drinks/i);
    const searchIcon = screen.queryByTestId(seachId);
    expect(drinks).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
  test('se na página "/profile", o Header e seus elementos são renderizados', () => {
    RenderWithRouter(<AppProvider><Profile /></AppProvider>);
    const profile = screen.getByText(/profile/i);
    const searchIcon = screen.queryByTestId(seachId);
    expect(profile).toBeInTheDocument();
    expect(searchIcon).not.toBeInTheDocument();
  });
  test('se na página "/drinks", o Header e seus elementos são renderizados', async () => {
    const { history } = RenderWithRouter(<AppProvider><Drinks /></AppProvider>);
    const drinks = await screen.findByTestId('page-title');
    const section = await screen.findByTestId('drinks-div');
    const recipeInTheDocument = await screen.findByTestId(lastElement);
    const recipeNotInTheDocument = screen.queryByTestId('12-recipe-card');
    const { pathname } = history.location;

    waitFor(() => {
      expect(pathname).toBe('/drinks');
      expect(section.childElementCount).toEqual('12');
      expect(section.childElementCount).not.toBeGreaterThan('12');
      expect(section.childElementCount).not.toBeLessThan('12');
      expect(drinks).toBeInTheDocument();
      expect(recipeInTheDocument).toBeInTheDocument();
      expect(recipeNotInTheDocument).not.toBeInTheDocument();
    });
  });
  test('se na página "/meals" as receitas são renderizadas', async () => {
    const { history } = RenderWithRouter(<AppProvider><Meals /></AppProvider>);
    const meals = await screen.findByTestId(testIdPageTitle);
    const section = await screen.findByTestId('meals-div');
    const recipeInTheDocument = await screen.findByTestId(lastElement);
    const recipeNotInTheDocument = screen.queryByTestId('12-recipe-card');
    const { pathname } = history.location;

    waitFor(() => {
      expect(pathname).toBe('/meals');
      expect(section.childElementCount).toEqual('12');
      expect(section.childElementCount).not.toBeGreaterThan('12');
      expect(section.childElementCount).not.toBeLessThan('12');
      expect(meals).toBeInTheDocument();
      expect(recipeInTheDocument).toBeInTheDocument();
      expect(recipeNotInTheDocument).not.toBeInTheDocument();
    });
  });
  test('se é redirecionado ao clicar no link das receitas', async () => {
    const { history } = RenderWithRouter(<AppProvider><Meals /></AppProvider>);
    const drinksBtn = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(drinksBtn);
    const recipeInTheDocument = screen.queryByTestId(lastElement);
    const { pathname } = history.location;

    waitFor(() => {
      excpect(recipeInTheDocument).toBeInTheDocument();
      userEvent.click(recipeInTheDocument);
      expect(pathname).toBe('/drinks/15853');
    });
  });
  test('Testa as rotas do recipes', async () => {
    const { history } = RenderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });
    const title = screen.getByRole('heading', { level: 1, name: 'Meals' });
    expect(history.location.pathname).toBe('/meals');
    expect(title).toBeInTheDocument();
  });
  test('Testa a rota de Drinks', async () => {
    const { history } = RenderWithRouter(<App />);
    act(() => {
      history.push('/drinks');
    });
    const title = screen.getByRole('heading', { level: 1, name: 'Drinks' });
    expect(history.location.pathname).toBe('/drinks');
    expect(title).toBeInTheDocument();
  });
});
