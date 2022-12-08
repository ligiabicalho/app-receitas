import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { fetchDrinkDetails, fetchMealDetails } from '../services/fetchAPI';
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';
import AppContext from '../context/AppContext';

function RecipeInProgress(props) {
  const { match: { params: { id } } } = props;
  const location = useLocation().pathname;

  const { recipeIdState,
    // setRecipeIdState,
    ingredients,
    setIngredients,
    measures,
    setMeasures } = useContext(AppContext);

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
