import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import AppContext from '../context/AppProvider';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';

describe('testando component searchBar', () => {
  test('testa se a barra e os radios estão na tela', async () => {
    renderWithRouter(<Meals />)
    const input = screen.queryByTestId('search-input');
    const ingredientRadio = screen.queryByTestId('ingredient-radio');
    const nameRadio = screen.queryByTestId('name-radio')
    const oneLetterRadio = screen.queryByTestId('first-radio')
    const searchIcon = screen.getByTestId('search-top-btn');

    expect(ingredientRadio).not.toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
    expect(nameRadio).not.toBeInTheDocument();
    expect(oneLetterRadio).not.toBeInTheDocument();

    userEvent.click(searchIcon);
    userEvent.type(input, 'egg');
    userEvent.click(ingredientRadio)
    await waitFor(() => {
      expect(screen.getByTestId('search-input')).toBeInTheDocument();
      expect(ingredientRadio).toBeInTheDocument();
      expect(nameRadio).toBeInTheDocument();
      expect(oneLetterRadio).toBeInTheDocument();
    });
  });
});