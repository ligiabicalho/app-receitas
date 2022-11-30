import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { drinksFetch, mealsFetch } from '../services/requestAPI';
import AppContext from './AppContext';
import { fetchIngredients, fetchName, fetchFirstLetter } from '../services/fetchAPI';

function AppProvider({ children }) {
  const [drinks, setDrinks] = useState({});
  const [search, setSearch] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const [recipes, setRecipes] = useState({});
  const [meals, setMeals] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      let resultRecipe = [];
      if (searchRadio === 'ingredient-radio') {
        resultRecipe = await fetchIngredients(search);
      }
      if (searchRadio === 'name-radio') {
        resultRecipe = await fetchName(search);
      }
      if (searchRadio === 'first-radio') {
        resultRecipe = await fetchFirstLetter(search);
      }
      console.log('resultRecipe', resultRecipe);
      setRecipes(resultRecipe);
    };

    fetchAPI();
  }, [search, searchRadio]);

  useEffect(() => {
    drinksFetch().then((result) => {
      setDrinks(result);
    });
  }, []);
  useEffect(() => {
    mealsFetch().then((result) => {
      setMeals(result);
    });
  }, []);

  const values = useMemo(() => ({
    search,
    setSearch,
    searchRadio,
    setSearchRadio,
    recipes,
    drinks,
    meals,
  }), [drinks, meals, search, searchRadio, recipes]);

  return (
    <AppContext.Provider value={ values }>
      <div className="provider">
        {children}
      </div>
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default AppProvider;
