import React, { useMemo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  drinksFetch,
  mealsFetch,
  mealCathegoryFetch,
  drinkCathegoryFetch } from '../services/requestAPI';
import AppContext from './AppContext';
import { searchIngredients,
  searchName,
  searchFirst } from '../services/searchResults';

function AppProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const [mealCathegory, setMealCathegory] = useState([]);
  const [drinkCathegory, setDrinkCathegory] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchSearch = async () => {
      if (search?.length > 0) {
        switch (searchRadio) {
        case 'ingredient-radio':
          searchIngredients(history, search, setMeals, setDrinks);
          setSearch('');
          break;
        case 'name-radio':
          searchName(history, search, setMeals, setDrinks);
          setSearch('');
          break;
        case 'first-radio':
          return search.length === 1
            && searchFirst(history, search, setMeals, setDrinks)
            && setSearch('');
        default:
          console.log('default');
        }
      }
    };

    fetchSearch();
  }, [search, searchRadio, history]);

  useEffect(() => {
    drinksFetch().then((result) => {
      setDrinks(result);
    });
    drinkCathegoryFetch().then((result) => {
      setDrinkCathegory(result);
    });
  }, []);

  useEffect(() => {
    mealsFetch().then((result) => {
      setMeals(result);
    });
    mealCathegoryFetch().then((result) => {
      setMealCathegory(result);
    });
  }, []);

  const values = useMemo(
    () => ({
      search,
      setSearch,
      searchRadio,
      setSearchRadio,
      drinks,
      meals,
      drinkCathegory,
      mealCathegory,
      setMeals,
      setDrinks,
    }),
    [
      drinks,
      meals,
      search,
      searchRadio,
      drinkCathegory, mealCathegory],
  );

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
