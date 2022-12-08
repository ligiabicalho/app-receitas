// if (!JSON.parse(localStorage.getItem('user'))) {
//   localStorage.setItem('user', JSON.stringify({}));
// }
/* if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
  localStorage.setItem('inProgressRecipes', JSON.stringify({}));
} */

export const getUserEmail = () => JSON.parse(localStorage.getItem('user'));

export const saveUserEmail = (email) => localStorage
  .setItem('user', JSON.stringify({ email }));

export const inProgress = () => localStorage.getItem('inProgressRecipes');
