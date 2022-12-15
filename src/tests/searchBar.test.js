import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import AppProvider from '../context/AppProvider';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';

describe('testando component searchBar', () => {
  it('testa se a barra e os radios estão na tela', async () => {
    renderWithRouter(
      <AppProvider>
        <Meals />
      </AppProvider>,
    );

    const searchIcon = screen.getByTestId('search-top-btn');
    expect(searchIcon).toBeInTheDocument();

    userEvent.click(searchIcon);

    const input = screen.getByTestId('search-input');
    const radioIngredients = screen.getByTestId('ingredient-search-radio');
    const radioName = screen.getByTestId('name-search-radio');
    const radioLetter = screen.getByTestId('first-letter-search-radio');
    const submitButton = screen.getByTestId('exec-search-btn');

    expect(input).toBeInTheDocument();
    expect(radioIngredients).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioLetter).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  it('testa o filtro de primeira letra', () => {
    renderWithRouter(
      <AppProvider>
        <Drinks />
      </AppProvider>,
    );

    jest.spyOn(global, 'alert');
    global.alert.mockImplementation(() => {});

    const searchIcon = screen.getByTestId('search-top-btn');

    userEvent.click(searchIcon);
    const input = screen.getByTestId('search-input');
    const radioLetter = screen.getByTestId('first-letter-search-radio');
    const submitButton = screen.getByTestId('exec-search-btn');

    userEvent.type(input, 'e');
    userEvent.click(radioLetter);
    userEvent.click(submitButton);

    expect(global.alert).not.toBeCalled();

    userEvent.type(input, 'egg');
    userEvent.click(radioLetter);
    userEvent.click(submitButton);

    expect(global.alert).toBeCalled();
  });
});
