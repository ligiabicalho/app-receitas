import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
/* import { fetchDrinkDetails, fetchMealDetails } from '../services/fetchAPI'; */
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';
import AppContext from '../context/AppContext';

function RecipeInProgress(/* props */) {
/*   const { match: { params: { id } } } = props; */
  const location = useLocation().pathname;

  const { recipeIdState,
    // setRecipeIdState,
    ingredients,
    /*     setIngredients, */
    measures,
    /*     setMeasures */ } = useContext(AppContext);

  // useEffect(() => {
  //   if (location.includes('meals')) {
  //     const getMealsDetails = async () => {
  //       const mealRecipeDetails = await fetchMealDetails(id);
  //       setRecipeIdState(mealRecipeDetails);
  //     };

  //     getMealsDetails();
  //   }
  //   if (location.includes('drinks')) {
  //     const getDrinksDetails = async () => {
  //       const drinkRecipeDetails = await fetchDrinkDetails(id);
  //       setRecipeIdState(drinkRecipeDetails);
  //     };

  //     getDrinksDetails();
  //   }
  // }, []);

  // useEffect(() => {
  //   const { strIngredient1, strIngredient2, strIngredient3, strIngredient4,
  //     strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
  //     strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14,
  //     strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19,
  //     strIngredient20 } = recipeIdState;

  //   const ingredientArray = [strIngredient1, strIngredient2, strIngredient3,
  //     strIngredient4, strIngredient5, strIngredient6,
  //     strIngredient7, strIngredient8, strIngredient9,
  //     strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14,
  //     strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19,
  //     strIngredient20];
  //   setIngredients(ingredientArray);

  //   const { strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6,
  //     strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
  //     strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,
  //     strMeasure19, strMeasure20 } = recipeIdState;

  //   const measuresArray = [strMeasure1, strMeasure2, strMeasure3, strMeasure4,
  //     strMeasure5, strMeasure6, strMeasure7, strMeasure8,
  //     strMeasure9, strMeasure10, strMeasure11,
  //     strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17,
  //     strMeasure18, strMeasure19, strMeasure20];
  //   setMeasures(measuresArray);
  // }, [recipeIdState]);

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
      </div>
    );
  }
}

RecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipeInProgress;
