// if (!JSON.parse(localStorage.getItem('user'))) {
//   localStorage.setItem('user', JSON.stringify({}));
// }
/* if (!localStorage.getItem('inProgressRecipes')) {
  localStorage.setItem('inProgressRecipes', {});
} */

export const getUserEmail = () => JSON.parse(localStorage.getItem('user'));

export const saveUserEmail = (email) => localStorage
  .setItem('user', JSON.stringify({ email }));

export const inProgress = () => localStorage.getItem('inProgressRecipes');

/* if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
  localStorage.setItem('favoriteRecipes', JSON.stringify([]));
} */
