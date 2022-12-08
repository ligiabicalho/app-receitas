import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDrinkDetails, fetchMealDetails } from '../services/fetchAPI';
import Recomended from '../components/Recomended';

function RecipeDetails(props) {
  const { match: { params: { id } } } = props;
  const location = useLocation().pathname;
  const [recipeIdState, setRecipeIdState] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

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

  if (location.includes('drinks')) {
    return (
      <div>
        <h1 data-testid="recipe-title">{ recipeIdState.strDrink }</h1>
        <img
          data-testid="recipe-photo"
          src={ recipeIdState.strDrinkThumb }
          alt="foto da bebida da receita"
        />
        <h2>Categoria da receita</h2>
        <p data-testid="recipe-category">
          { recipeIdState.strCategory }
          {recipeIdState.strAlcoholic}

        </p>
        <h2>Ingredientes</h2>
        {ingredients.map((ingredient, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} ${measures[index]}`}
          </p>))}
        <h2>Instruções</h2>
        <p data-testid="instructions">{ recipeIdState.strInstructions }</p>
        <Recomended par="drinks" />
      </div>
    );
  }

  if (location.includes('meals')) {
    return (
      <div>
        <h1 data-testid="recipe-title">{recipeIdState.strMeal}</h1>
        <img
          src={ recipeIdState.strMealThumb }
          alt="Foto da receita"
          data-testid="recipe-photo"
        />
        <h2>Categoria da receita</h2>
        <p data-testid="recipe-category">{ recipeIdState.strCategory }</p>
        <h2>Ingredientes</h2>
        {ingredients.map((mealingredient, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${mealingredient} ${measures[index]}`}
          </p>))}
        <h2>Instruções</h2>
        <p data-testid="instructions">{ recipeIdState.strInstructions }</p>
        <h2>Video</h2>
        <iframe
          width="420"
          height="315"
          src={ recipeIdState ? recipeIdState
            .strYoutube.replace('/watch?v=', '/embed/') : null }
          title={ `receita ${recipeIdState.strMeal}` }
          allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="video"
        />
        <Recomended par="meals" />
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
