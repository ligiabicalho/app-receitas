import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import '../styles/SearchBar.css';

function SearchBar() {
  const [radio, setRadio] = useState('');
  const [text, setText] = useState('');
  const { setSearch, setSearchRadio } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };

  const handleChangeRadio = ({ target }) => {
    const { id } = target;
    setRadio(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(text);
    setSearchRadio(radio);
    if (text.length > 1 && radio === 'first-radio') {
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
          value={ text }
          onChange={ handleChange }
          data-testid="search-input"
        />
        <button
          className="search-input"
          type="submit"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </label>
      <div>
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
      </div>
    </form>
  );
}

export default SearchBar;
