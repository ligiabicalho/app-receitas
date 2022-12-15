import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';

function RecipeDetails() {
  const { id } = useParams();
  const location = useLocation().pathname;

  switch (location) {
  case `/drinks/${id}`:
    return (
      <div>
        <CardDetails
          id={ id }
          type="drink"
        />
        <Recomended par="drinks" />
      </div>
    );
  default:
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
