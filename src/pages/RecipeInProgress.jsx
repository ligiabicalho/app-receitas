import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';
import AppContext from '../context/AppContext';

function RecipeInProgress() {
  const location = useLocation().pathname;

  const { recipeIdState,
    ingredients,
    measures,
  } = useContext(AppContext);

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
