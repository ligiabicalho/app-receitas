export const getUserEmail = () => JSON.parse(localStorage.getItem('user'));

export const saveUserEmail = (email) => localStorage
  .setItem('user', JSON.stringify({ email }));

export const inProgress = () => {
  const progressJson = localStorage.getItem('inProgressRecipes');
  const progressValidation = progressJson
    ? JSON.parse(progressJson) : { drinks: {}, meals: {} };
  return progressValidation;
};

/* if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
  localStorage.setItem('favoriteRecipes', JSON.stringify([]));
} */
