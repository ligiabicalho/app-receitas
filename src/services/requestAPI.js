export const mealsFetch = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const results = await response.json();
    // console.log(results);
    return results.meals;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const drinksFetch = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const results = await response.json();
    return results.drinks;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const mealCathegoryFetch = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const results = await response.json();
    return results.meals;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const drinkCathegoryFetch = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const results = await response.json();
    return results.drinks;
  } catch (e) {
    throw new Error(e.message);
  }
};
