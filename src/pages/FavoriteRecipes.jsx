import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import blackHeart from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../styles/Favorites.css';

function FavoriteRecipes() {
/*   const [filter, setFilter] = useState('all'); */
  const [favorited, setFavorited] = useState([]);
  const [copied, setCopied] = useState('');
  useEffect(() => {
    const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localFavorites !== null) {
      setFavorited(localFavorites);
    }
  }, []);
  return (
    <div>
      <Header title="Favorite Recipes" />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-meal-btn">Meals</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      {favorited.map((e, index) => (
        <div key={ e.id } className="favorite-line">
          <img
            src={ e.image }
            alt="Imagem da receita"
            className="favorite-images"
            data-testid={ `${index}-horizontal-image` }
          />
          <p
            className="text"
            data-testid={ `${index}-horizontal-top-text` }
          >
            {e.type === 'meal' ? e.nationality : e.alcoholicOrNot }
            {' '}
            -
            {' '}
            { e.category }
          </p>
          <p
            className="text"
            data-testid={ `${index}-horizontal-name` }
          >
            { e.name }

          </p>
          <button type="button" className="icons">
            <img
              src={ blackHeart }
              alt="Desfavoritar"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>
          <button
            type="button"
            className="icons"
            onClick={ () => {
              copy(e.type === 'meal' ? `${window.location.origin}/meals/${e.id}`
                : `${window.location.origin}/drinks/${e.id}`);
              setCopied(e.id);
            } }
          >
            {e.id === copied ? 'Link copied!'
              : (
                <img
                  src={ shareIcon }
                  alt="compartilhar"
                  data-testid={ `${index}-horizontal-share-btn` }
                />)}
          </button>
        </div>))}
    </div>
  );
}

export default FavoriteRecipes;
