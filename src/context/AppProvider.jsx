import React, { useMemo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  drinksFetch,
  mealsFetch,
  mealCathegoryFetch,
  drinkCathegoryFetch } from '../services/requestAPI';
import AppContext from './AppContext';
import { fetchIngredients, fetchName, fetchFirstLetter } from '../services/fetchAPI';

function AppProvider({ children }) {
  const [drinks, setDrinks] = useState({});
  const [meals, setMeals] = useState({});
  const [search, setSearch] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const [mealCathegory, setMealCathegory] = useState([]);
  const [drinkCathegory, setDrinkCathegory] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchSearchMeals = async () => {
      if (searchRadio === 'ingredient-radio') {
        setMeals(await fetchIngredients(search, location));
      }
      if (searchRadio === 'name-radio') {
        setMeals(await fetchName(search, location));
      }
      if (searchRadio === 'first-radio' && search.length === 1) {
        setMeals(await fetchFirstLetter(search, location));
      }
    };
    const fetchSearchDrink = async () => {
      if (searchRadio === 'ingredient-radio') {
        setDrinks(await fetchIngredients(search, location));
      }
      if (searchRadio === 'name-radio') {
        setDrinks(await fetchName(search, location));
      }
      if (searchRadio === 'first-radio' && search.length === 1) {
        setDrinks(await fetchFirstLetter(search, location));
      }
    };

    fetchSearchMeals();
    fetchSearchDrink();
  }, [search, searchRadio, location]);

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
