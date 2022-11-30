export const fetchIngredients = async (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
  const response = await fetch(url);
  const recipes = await response.json();
  return recipes;
};

export const fetchName = async (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  const response = await fetch(url);
  const recipes = await response.json();
  return recipes;
};

export const fetchFirstLetter = async (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
  const response = await fetch(url);
  const recipes = await response.json();
  return recipes;
};
