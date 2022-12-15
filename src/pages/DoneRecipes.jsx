import React from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  return (
    <div>
      <Header title="Done Recipes" />
      <div className="filter-btns">
        Filters:
        <button
          data-testid="filter-by-all-btn"
          type="button"
          // onClick={ }
        >
          All
        </button>
        <button
          data-testid="filter-by-meal-btn"
          type="button"
          // onClick={ }
        >
          Meals
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          // onClick={ }
        >
          Drinks
        </button>
      </div>
      <div className="done-recipes-cards">
        Recipes Cards
        <div className="card">
          <p
            data-testid="0-horizontal-name"
          >
            Nome da receita

          </p>
          <img
            width={ 100 }
            data-testid="0-horizontal-image"
            src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            alt="recipe"
          />
          <p
            data-testid="0-horizontal-top-text"
          >
            Categoria da receita

          </p>
          <p
            data-testid="0-horizontal-done-date"
          >
            Data da Receita

          </p>
          <p
            data-testid="0-horizontal-share-btn"
          >
            Compartilhar Receita

          </p>
          <span
            data-testid="0-Pasta-horizontal-tag"
          >
            Tags da Receita

          </span>
          <span
            data-testid="0-Curry-horizontal-tag"
          >
            Tags da Receita

          </span>
        </div>
        <div className="card">
          <p
            data-testid="1-horizontal-name"
          >
            Nome da receita

          </p>
          <img
            width={ 100 }
            data-testid="1-horizontal-image"
            src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            alt="recipe"
          />
          <p
            data-testid="1-horizontal-top-text"
          >
            Categoria da receita

          </p>
          <p
            data-testid="1-horizontal-done-date"
          >
            Data da Receita

          </p>
          <p
            data-testid="1-horizontal-share-btn"
          >
            Compartilhar Receita

          </p>
          <span
            data-testid="1-Pasta-horizontal-tag"
          >
            Tags da Receita

          </span>
          <span
            data-testid="1-Curry-horizontal-tag"
          >
            Tags da Receita

          </span>
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;
