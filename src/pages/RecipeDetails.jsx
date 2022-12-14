import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';
import '../styles/RecipeDetails.css';

function RecipeDetails(props) {
  const { match: { params: { id } } } = props;
  const location = useLocation().pathname;

  if (location.includes('drinks')) {
    return (
      <div>
        <CardDetails
          id={ id }
          type="drink"
        />
        <Recomended par="drinks" />
      </div>
    );
  }

  if (location.includes('meals')) {
    return (
      <div>
        {' '}
        <CardDetails
          id={ id }
          type="meals"
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
