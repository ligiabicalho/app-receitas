import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function CardDoneFave(props) {
  const { recipes, status } = props;
  const [copied, setCopied] = useState('');
  return (
    recipes.map((recipe, index) => (
      <div key={ recipe.id } className="done-fave-line">
        <Link
          to={ recipe.type === 'meal' ? `/meals/${recipe.id}`
            : `/drinks/${recipe.id}` }
        >
          <img
            src={ recipe.image }
            alt="Imagem da receita"
            className="done-fave-images"
            data-testid={ `${index}-horizontal-image` }
          />
          <p
            className="text"
            data-testid={ `${index}-horizontal-name` }
          >
            { recipe.name }
          </p>
          <p
            className="text"
            data-testid={ `${index}-horizontal-top-text` }
          >
            {recipe.type === 'meal' ? recipe.nationality : recipe.alcoholicOrNot }
            {' '}
            -
            {' '}
            { recipe.category }
          </p>
        </Link>
        {status === 'done'
          && (
            <>
              <p
                className="text"
                data-testid={ `${index}-horizontal-done-date` }
              >
                Done in:
                {' '}
                { recipe.doneDate }
              </p>
              { recipe.tags.map((tag, i) => i < 2 && (
                <p key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
                  {tag}
                </p>
              )) }
            </>)}
        <button
          type="button"
          className="icons"
          onClick={ () => {
            copy(recipe.type === 'meal' ? `${window.location.origin}/meals/${recipe.id}`
              : `${window.location.origin}/drinks/${recipe.id}`);
            setCopied(recipe.id);
          } }
        >
          {recipe.id === copied ? 'Link copied!'
            : (
              <img
                src={ shareIcon }
                alt="compartilhar"
                data-testid={ `${index}-horizontal-share-btn` }
              />)}
        </button>
      </div>))
  );
}

CardDoneFave.propTypes = {
  recipes: PropTypes.array,
  status: PropTypes.string,
}.isRequired;

export default CardDoneFave;
