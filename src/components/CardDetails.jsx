import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import copy from 'clipboard-copy';
import { inProgress } from '../services/localStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import { fetchDrinkDetails, fetchMealDetails } from '../services/fetchAPI';
import AppContext from '../context/AppContext';

function CardDetails(props) {
  const { type, id } = props;
  const location = useLocation().pathname;
  const history = useHistory();
  const [copyState, setCopyState] = useState(false);
  const [startBtn, setStartBtn] = useState('Start');

  const { recipeIdState,
    setRecipeIdState,
    ingredients,
    setIngredients,
    measures,
    setMeasures } = useContext(AppContext);

  useEffect(() => {
    const progressArray = Object.keys(inProgress());
    const progressArray2 = Object.keys(inProgress()[progressArray[0]]);
    if (progressArray2.includes(id)) {
      setStartBtn('Continue');
    }
  }, []);

  useEffect(() => {
    if (location.includes('meals')) {
      const getMealsDetails = async () => {
        const mealRecipeDetails = await fetchMealDetails(id);
        setRecipeIdState(mealRecipeDetails);
      };

      getMealsDetails();
    }
    if (location.includes('drinks')) {
      const getDrinksDetails = async () => {
        const drinkRecipeDetails = await fetchDrinkDetails(id);
        setRecipeIdState(drinkRecipeDetails);
      };

      getDrinksDetails();
    }
  }, []);

  useEffect(() => {
    const { strIngredient1, strIngredient2, strIngredient3, strIngredient4,
      strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
      strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14,
      strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19,
      strIngredient20 } = recipeIdState;

    const ingredientArray = [strIngredient1, strIngredient2, strIngredient3,
      strIngredient4, strIngredient5, strIngredient6,
      strIngredient7, strIngredient8, strIngredient9,
      strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14,
      strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19,
      strIngredient20];
    setIngredients(ingredientArray);

    const { strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6,
      strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
      strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,
      strMeasure19, strMeasure20 } = recipeIdState;

    const measuresArray = [strMeasure1, strMeasure2, strMeasure3, strMeasure4,
      strMeasure5, strMeasure6, strMeasure7, strMeasure8,
      strMeasure9, strMeasure10, strMeasure11,
      strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17,
      strMeasure18, strMeasure19, strMeasure20];
    setMeasures(measuresArray);
  }, [recipeIdState]);

  const handleClick = () => {
    // localstorage
    history.push('/done-recipes');
  };

  const isDisabled = () => {
    // comparar nº de checks com nº ingredients
  };

  return (
    <div>
      <h1
        data-testid="recipe-title"
      >
        {type === 'drink' ? recipeIdState.strDrink : recipeIdState.strMeal}
      </h1>
      <img
        data-testid="recipe-photo"
        src={ type === 'drink'
          ? recipeIdState.strDrinkThumb : recipeIdState.strMealThumb }
        alt="foto da receita"
      />
      <h2>Categoria da receita</h2>
      <p data-testid="recipe-category">
        {recipeIdState.strCategory}
        {type === 'drink' && recipeIdState.strAlcoholic}

      </p>
      <h2>Ingredientes</h2>
      {ingredients.map((ingredient, index) => (
        <p
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {ingredient !== undefined
            && ingredient !== null
            && `${ingredient} ${measures[index]}`}
        </p>))}
      <h2>Instruções</h2>
      <p data-testid="instructions">{recipeIdState.strInstructions}</p>
      {type === 'meals'
        && (<iframe
          width="420"
          height="315"
          src={ recipeIdState && recipeIdState
            .strYoutube.replace('/watch?v=', '/embed/') }
          title={ `receita ${recipeIdState.strMeal}` }
          allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="video"
        />)}
      <div className="start-finish-btn">
        {location.includes('in-progress')
          ? (
            <button
              type="button"
              data-testid="finish-recipe-btn"
              disabled={ isDisabled }
              onClick={ handleClick }
            >
              Finish recipe
            </button>
          )
          : (
            <button
              type="button"
              data-testid="start-recipe-btn"
              onClick={ () => (type === 'meals'
                ? (history.push(`/meals/${id}/in-progress`))
                : (history.push(`/drinks/${id}/in-progress`))) }
            >
              { startBtn }
              {' '}
              Recipe
            </button>
          )}
        <button
          data-testid="share-btn"
          type="button"
          onClick={ () => {
            copy(window.location.href);
            setCopyState(true);
          } }
        >
          <img src={ shareIcon } alt="share button" />
        </button>
        <button data-testid="favorite-btn" type="button">
          <img src={ whiteHeart } alt="favorite button" />
        </button>
        {copyState ? <p>Link copied!</p> : ''}
      </div>
    </div>
  );
}

CardDetails.propTypes = {
  recipeIdState: PropTypes.object,
  ingredients: PropTypes.array,
  measures: PropTypes.array,
  type: PropTypes.string,
}.isRequired;

export default CardDetails;
