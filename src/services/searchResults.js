import { fetchIngredients, fetchName, fetchFirstLetter } from './fetchAPI';

export const searchIngredients = async (history, search, setMeals, setDrinks) => {
  const recipeIngredients = await fetchIngredients(search, history.location);
  const alert = 'Sorry, we havent found any recipes for these filters.';
  if (recipeIngredients !== null) {
    setMeals(recipeIngredients);
    setDrinks(recipeIngredients);
    if (recipeIngredients?.length === 1) {
      return history.location.pathname === '/meals'
        ? history.push(`/meals/${recipeIngredients[0].idMeal}`)
        : history.push(`/drinks/${recipeIngredients[0].idDrink}`);
    }
  } else global.alert(alert);
};

export const searchName = async (history, search, setMeals, setDrinks) => {
  const recipeName = await fetchName(search, history.location);
  if (recipeName !== null) {
    setMeals(recipeName);
    setDrinks(recipeName);
    console.log('recipeName', recipeName);
    if (recipeName?.length === 1) {
      return history.location.pathname === '/meals'
        ? history.push(`/meals/${recipeName[0].idMeal}`)
        : history.push(`/drinks/${recipeName[0].idDrink}`);
    }
  } else global.alert('Sorry, we haven\'t found any recipes for these filters.');
};

export const searchFirst = async (history, search, setMeals, setDrinks) => {
  const recipeFirst = await fetchFirstLetter(search, history.location);
  if (recipeFirst !== null) {
    setMeals(recipeFirst);
    setDrinks(recipeFirst);
    console.log('recipeFirst', recipeFirst);
    if (recipeFirst?.length === 1) {
      return history.location.pathname === '/meals'
        ? history.push(`/meals/${recipeFirst[0].idMeal}`)
        : history.push(`/drinks/${recipeFirst[0].idDrink}`);
    }
  } else global.alert('Sorry, we haven\'t found any recipes for these filters.');
};
