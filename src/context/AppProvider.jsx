import React, { useMemo, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  drinksFetch,
  mealsFetch,
  mealCathegoryFetch,
  drinkCathegoryFetch } from '../services/requestAPI';
import AppContext from './AppContext';
import { fetchIngredients, fetchName, fetchFirstLetter } from '../services/fetchAPI';

function AppProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const [mealCathegory, setMealCathegory] = useState([]);
  const [drinkCathegory, setDrinkCathegory] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const searchIngredients = async () => {
    const recipeIngredients = await fetchIngredients(search, location);
    const alert = 'Sorry, we havent found any recipes for these filters.';
    if (recipeIngredients !== null) {
      setMeals(recipeIngredients);
      setDrinks(recipeIngredients);
      setSearch('');
      if (recipeIngredients?.length === 1) {
        return location.pathname === '/meals'
          ? history.push(`/meals/${recipeIngredients[0].idMeal}`)
          : history.push(`/drinks/${recipeIngredients[0].idDrink}`);
      }
    } else global.alert(alert);
  };

  const searchName = async () => {
    const recipeName = await fetchName(search, location);
    if (recipeName !== null) {
      setMeals(recipeName);
      setDrinks(recipeName);
      setSearch('');
      console.log('recipeName', recipeName);
      if (recipeName?.length === 1) {
        return location.pathname === '/meals'
          ? history.push(`/meals/${recipeName[0].idMeal}`)
          : history.push(`/drinks/${recipeName[0].idDrink}`);
      }
    } else global.alert('Sorry, we haven\'t found any recipes for these filters.');
  };

  const searchFirstLetter = async () => {
    const recipeFirst = await fetchFirstLetter(search, location);
    if (recipeFirst !== null) {
      setMeals(recipeFirst);
      setDrinks(recipeFirst);
      setSearch('');
      console.log('recipeFirst', recipeFirst);
      if (recipeFirst?.length === 1) {
        return location.pathname === '/meals'
          ? history.push(`/meals/${recipeFirst[0].idMeal}`)
          : history.push(`/drinks/${recipeFirst[0].idDrink}`);
      }
    } else global.alert('Sorry, we haven\'t found any recipes for these filters.');
  };

  useEffect(() => {
    const fetchSearch = async () => {
      if (search?.length > 0) {
        switch (searchRadio) {
        case 'ingredient-radio':
          searchIngredients();
          break;
        case 'name-radio':
          searchName();
          break;
        case 'first-radio':
          return search.length === 1 && searchFirstLetter();
        default:
          console.log('default');
        }
      }
    };

    fetchSearch();
  }, [search, searchRadio, location, history]);

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
