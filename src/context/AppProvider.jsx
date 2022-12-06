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
  const [drinks, setDrinks] = useState({});
  const [meals, setMeals] = useState({});
  const [search, setSearch] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const [mealCathegory, setMealCathegory] = useState([]);
  const [drinkCathegory, setDrinkCathegory] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const searchIngredients = async () => {
    const recipe = await fetchIngredients(search, location);
    setMeals(recipe);
    setDrinks(recipe);
    setSearch('');
    console.log('recipe', recipe);
    return (recipe.length === 1 && recipe[0].idMeal)
      ? history.push(`/meals/${recipe[0].idMeal}`)
      : history.push(`/drinks/${recipe[0].idDrink}`);
  };

  const searchName = async () => {
    const recipe = await fetchName(search, location);
    setMeals(recipe);
    setDrinks(recipe);
    setSearch('');
    console.log('recipe', recipe);
    return (recipe.length === 1 && recipe[0].idMeal)
      ? history.push(`/meals/${recipe[0].idMeal}`)
      : history.push(`/drinks/${recipe[0].idDrink}`);
  };

  const searchFirstLetter = async () => {
    const recipe = await fetchFirstLetter(search, location);
    setMeals(recipe);
    setDrinks(recipe);
    setSearch('');
    console.log('recipe', recipe);
    return (recipe.length === 1 && recipe[0].idMeal)
      ? history.push(`/meals/${recipe[0].idMeal}`)
      : history.push(`/drinks/${recipe[0].idDrink}`);
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
          // break;
        default:
          console.log('default');
        }
      }
    };
    // const fetchSearchDrink = async () => {
    //   if (searchRadio === 'ingredient-radio') {
    //     setDrinks(await fetchIngredients(search, location));
    //   }
    //   if (searchRadio === 'name-radio') {
    //     setDrinks(await fetchName(search, location));
    //   }
    //   if (searchRadio === 'first-radio' && search.length === 1) {
    //     setDrinks(await fetchFirstLetter(search, location));
    //   }
    // };

    fetchSearch();
    // fetchSearchDrink();
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
