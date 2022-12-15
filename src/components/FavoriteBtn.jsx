import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import AppContext from '../context/AppContext';

function FavoriteBtn({ id }) {
  const { recipeIdState } = useContext(AppContext);
  const [favorites, setFavorites] = useState(false);

  const { idMeal, strMeal, strArea, strCategory, strMealThumb,
    idDrink, strAlcoholic, strDrinkThumb, strDrink } = recipeIdState;

  useEffect(() => {
    const storageData = localStorage.getItem('favoriteRecipes');
    if (storageData !== null) {
      const notNull = JSON.parse(storageData) || [];
      const filteredId = notNull.find((e) => e.id === id);
      setFavorites(filteredId);
    }
    // const storageData = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    // const filteredId = storageData.find((e) => e.id === id);
    // setFavorites(filteredId);
  }, []);

  const createStorage = () => {
    if (strMeal?.length > 0) {
      const recipeStorage = {
        id: idMeal,
        type: 'meal',
        nationality: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      };
      return recipeStorage;
    }
    const recipeData = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    return recipeData;
  };

  const addToLocalStorage = (recipe) => {
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    favoriteRecipes.push(recipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  };

  const handleFavorite = () => {
    const storageData = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (storageData.map((e) => e.id).includes(id)) {
      const removeFav = storageData.filter((recipes) => recipes.id === !id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(removeFav));
      setFavorites(false);
    } else {
      const recipeData = createStorage();
      addToLocalStorage(recipeData);
      setFavorites(true);
    }
  };

  return (
    <button
      type="button"
      onClick={ () => {
        handleFavorite();
      } }
    >
      <img
        src={ favorites ? blackHeart : whiteHeart }
        data-testid="favorite-btn"
        alt="favorite button"
      />
    </button>
  );
}

FavoriteBtn.propTypes = ({
  id: PropTypes.string,
}).isRequired;

export default FavoriteBtn;
