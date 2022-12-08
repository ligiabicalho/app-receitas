export const getUserEmail = () => JSON.parse(localStorage.getItem('user'));

export const saveUserEmail = (email) => localStorage
  .setItem('user', JSON.stringify({ email }));

export const inProgress = () => JSON.parse(localStorage.getItem('inProgressRecipes'))
|| { drinks: {}, meals: {} };
