import allMeals from '../tests/helpers/mocks/meals';
import allDrinks from '../tests/helpers/mocks/drinks';
import mealCategories from '../tests/helpers/mocks/mealCategories';
import drinkCategories from '../tests/helpers/mocks/drinkCategories';

export const mealsFetch = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const results = await response.json();
    // console.log(results);
    return results.meals;
  } catch (e) {
    console.log(e.message);
    return allMeals.meals;
    // throw new Error(e.message);
  }
};

export const drinksFetch = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const results = await response.json();
    return results.drinks;
  } catch (e) {
    console.log(e.message);
    return allDrinks.drinks;
    // throw new Error(e.message);
  }
};

export const mealCathegoryFetch = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const results = await response.json();
    return results.meals;
  } catch (e) {
    console.log(e.message);
    return mealCategories.meals;
    // throw new Error(e.message);
  }
};

export const drinkCathegoryFetch = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const results = await response.json();
    return results.drinks;
  } catch (e) {
    console.log(e.message);
    return drinkCategories.drinks;
    // throw new Error(e.message);
  }
};
