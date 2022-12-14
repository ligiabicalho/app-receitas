import React, { useContext, useEffect, useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import AppContext from '../context/AppContext';

function FavoriteBtn() {
  const { recipeIdState, favoriteId, setFavoriteId } = useContext(AppContext);
  /*   const [favorites, setFavorites] = useState([]); */

  const { idMeal, strMeal, strArea, strCategory, strMealThumb,
    idDrink, strAlcoholic, strDrinkThumb, strDrink } = recipeIdState;

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('favoriteRecipes')) || [{
      id: '',
      type: '',
      nationality: '',
      category: '',
      alcoholicOrNot: '',
      name: '',
      image: '',
      doneDate: '',
      tags: '',
    }];
    const filteredId = storageData?.map((e) => e.id);
    /*     setFavorites(storageData); */
    setFavoriteId(...favoriteId, filteredId);
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
    const recipeData = createStorage();
    addToLocalStorage(recipeData);
  };

  return (
    <button
      type="button"
      onClick={ () => {
        handleFavorite();
      } }
    >
      <img
        src={ /* favorites
          .includes(idMeal || idDrink) || */ favoriteId
            .includes(idMeal || idDrink) ? blackHeart : whiteHeart
        }
        data-testid="favorite-btn"
        alt="favorite button"
      />
    </button>
  );
}

export default FavoriteBtn;
