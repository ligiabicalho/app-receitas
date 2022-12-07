import PropTypes from 'prop-types';

function CardDetails(props) {
  const { recipeIdState, ingredients, type, measures } = props;
  return (
    <div>
      <h1
        data-testid="recipe-title"
      >
        {type === 'drink' ? recipeIdState.strDrink : recipeIdState.strMeal}
      </h1>
      <img
        data-testid="recipe-photo"
        src={ type === 'drink'
          ? recipeIdState.strDrinkThumb : recipeIdState.strMealThumb }
        alt="foto da receita"
      />
      <h2>Categoria da receita</h2>
      <p data-testid="recipe-category">
        {recipeIdState.strCategory}
        {type === 'drink' && recipeIdState.strAlcoholic}

      </p>
      <h2>Ingredientes</h2>
      {ingredients.map((ingredient, index) => (
        <p
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {ingredient !== undefined
            && ingredient !== null
            && `${ingredient} ${measures[index]}`}
        </p>))}
      <h2>Instruções</h2>
      <p data-testid="instructions">{recipeIdState.strInstructions}</p>
      {type === 'meals'
        && (<iframe
          width="420"
          height="315"
          src={ recipeIdState ? recipeIdState
            .strYoutube.replace('/watch?v=', '/embed/') : null }
          title={ `receita ${recipeIdState.strMeal}` }
          allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="video"
        />)}
    </div>
  );
}

CardDetails.propTypes = {
  recipeIdState: PropTypes.object,
  ingredients: PropTypes.array,
  measures: PropTypes.array,
  type: PropTypes.string,
}.isRequired;

export default CardDetails;
