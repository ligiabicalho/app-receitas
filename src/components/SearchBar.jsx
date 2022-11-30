import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  // const [ text, setText ] = useState('');
  const { search, setSearch, setSearchRadio } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleChangeRadio = ({ target }) => {
    const { id } = target;
    setSearchRadio(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="searchBar">
        <input
          id="seachBar"
          type="text"
          name="text"
          value={ search }
          onChange={ handleChange }
          data-testid="search-input"
        />
      </label>
      <label
        htmlFor="ingredient-radio"
      >
        <input
          name="check-food"
          id="ingredient-radio"
          type="radio"
          onChange={ handleChangeRadio }
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>
      <label
        htmlFor="name-radio"
      >
        <input
          name="check-food"
          id="name-radio"
          type="radio"
          onChange={ handleChangeRadio }
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label
        htmlFor="first-radio"
      >
        <input
          name="check-food"
          id="first-radio"
          type="radio"
          onChange={ handleChangeRadio }
          data-testid="first-letter-search-radio"
        />
        First letter
      </label>
      <button
        type="submit"
        data-testid="exec-search-btn"
        // onClick={on}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
