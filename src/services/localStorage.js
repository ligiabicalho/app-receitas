if (!JSON.parse(localStorage.getItem('doneRecipes'))) {
  localStorage.setItem('doneRecipes', JSON.stringify([]));
}

export const getUserEmail = () => JSON.parse(localStorage.getItem('user'));

export const saveUserEmail = (email) => localStorage
  .setItem('user', JSON.stringify({ email }));

export const inProgress = () => {
  const progressJson = localStorage.getItem('inProgressRecipes');
  const progressValidation = progressJson
    ? JSON.parse(progressJson) : { drinks: {}, meals: {} };
  return progressValidation;
};
