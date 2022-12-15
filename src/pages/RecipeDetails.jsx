import PropTypes from 'prop-types';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import Recomended from '../components/Recomended';
import CardDetails from '../components/CardDetails';
import shareIcon from '../images/shareIcon.svg';
import '../styles/RecipeDetails.css';
import FavoriteBtn from '../components/FavoriteBtn';


function RecipeDetails() {
  const { id } = useParams();
  const location = useLocation().pathname;
  const history = useHistory();

  if (location.includes('drinks')) {
    return (
      <div>
        <CardDetails
          id={ id }
          type="drink"
        />
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
        <FavoriteBtn id={ id } />
        {copyState ? <p>Link copied!</p> : ''}
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
