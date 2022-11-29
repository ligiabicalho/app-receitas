if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({}));
}

export const getUserEmail = () => JSON.parse(localStorage.getItem('user'));

export const saveUserEmail = (email) => localStorage
  .setItem('user', JSON.stringify({ email }));
