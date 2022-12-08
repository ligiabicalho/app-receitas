import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import copy from 'clipboard-copy';
import { fetchDrinkDetails, fetchMealDetails } from '../services/fetchAPI';
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';
import AppContext from '../context/AppContext';
import { inProgress } from '../services/localStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

function RecipeDetails(props) {
  const { match: { params: { id } } } = props;
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

  // Deixar essa parte comentada para funcionar o código no navegador. No cypress não da problema pois tem mock do storage. Req 30.
  useEffect(() => {
    if (inProgress()) {
      const inProgressJson = JSON.parse(inProgress());
      const progressArray = Object.keys(inProgressJson);
      const progressArray2 = Object.keys(inProgressJson[progressArray[0]]);
      if (progressArray2.includes(id)) {
        setStartBtn('Continue');
      }
    }
  }, []);

  if (location.includes('drinks')) {
    return (
      <div>
        {recipeIdState !== undefined
        && <CardDetails
          recipeIdState={ recipeIdState }
          ingredients={ ingredients }
          type="drink"
          measures={ measures }
        />}
        <Recomended par="drinks" />
        <button
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => (history.push(`/drinks/${id}/in-progress`)) }
        >
          { startBtn }
          {' '}
          Recipe
        </button>
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
    );
  }

  if (location.includes('meals')) {
    return (
      <div>
        {recipeIdState !== undefined
          && <CardDetails
            recipeIdState={ recipeIdState }
            ingredients={ ingredients }
            type="meals"
            measures={ measures }
          />}
        <Recomended par="meals" />
        <button
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => (history.push(`/meals/${id}/in-progress`)) }
        >
          { startBtn }
          {' '}
          Recipe
        </button>
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
        {copyState ? <p>Link copied!</p> : null}
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipeDetails;
