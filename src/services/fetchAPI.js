export const fetchIngredients = async (search, location) => {
  if (location.pathname === '/meals') {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes.meals;
  }
  if (location.pathname === '/drinks') {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes.drinks;
  }
};

export const fetchName = async (search, location) => {
  if (location.pathname === '/meals') {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes.meals;
  }
  if (location.pathname === '/drinks') {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes.drinks;
  }
};

export const fetchFirstLetter = async (search, location) => {
  try {
    if (location.pathname === '/meals') {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
      const response = await fetch(url);
      const recipes = await response.json();
      return recipes.meals;
    }
    if (location.pathname === '/drinks') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
      const response = await fetch(url);
      const recipes = await response.json();
      return recipes.drinks;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilteredMeal = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const recipes = await response.json();
  return recipes.meals;
};

export const fetchFilteredDrink = async (category) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const recipes = await response.json();
  return recipes.drinks;
};

export const fetchMealDetails = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await response.json();
  return json.meals[0];
};

export const fetchDrinkDetails = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await response.json();
  return json.drinks[0];
};
