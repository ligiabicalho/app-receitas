const meals = require('./meals');
const oneMeal = require('./oneMeal');
const emptyMeals = require('./emptyMeals');
const drinks = require('./drinks');
const oneDrink = require('./oneDrink');
const emptyDrinks = require('./emptyDrinks');
const oneDrinkId15997 = require('./oneDrinkId15997');

const fetchModules = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (
      url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
        || url === 'https://www.themealdb.com/api/json/v1/1/random.php'
        || url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771'
        || url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977'
    ) {
      return Promise.resolve(oneMeal);
    } if (
      url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Aquamarine'
        || url === 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        || url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319'
    ) {
      return Promise.resolve(oneDrink);
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997') {
      return Promise.resolve(oneDrinkId15997);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=xablau') {
      return Promise.resolve(emptyMeals);
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=xablau') {
      return Promise.resolve(emptyDrinks);
    } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') {
      return Promise.resolve(drinks);
    } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
      return Promise.resolve(meals);
    }
    return Promise.reject(new Error('Invalid url'));
  },
});

export default fetchModules;
