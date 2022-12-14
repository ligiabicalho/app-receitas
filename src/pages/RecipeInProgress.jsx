import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';

function RecipeInProgress(props) {
  const { match: { params: { id } } } = props;
  const location = useLocation().pathname;

  if (location.includes('drinks')) {
    return (
      <div>
        <CardDetails
          type="drink"
          id={ id }
        />
        <Recomended par="drinks" />
      </div>
    );
  }

  if (location.includes('meals')) {
    return (
      <div>
        <CardDetails
          type="meals"
          id={ id }
        />
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
