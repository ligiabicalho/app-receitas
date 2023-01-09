import PropTypes from 'prop-types';

function BtnsDoneFave(props) {
  const { allRecipes, filterMeal, filterDrinks } = props;
  return (
    <div className="tag-buttons">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ allRecipes }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ filterMeal }
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ filterDrinks }
      >
        Drinks
      </button>
    </div>
  );
}

BtnsDoneFave.propTypes = {
  allRecipes: PropTypes.func,
  filterMeal: PropTypes.func,
  filterDrinks: PropTypes.func,
}.isRequired;

export default BtnsDoneFave;
