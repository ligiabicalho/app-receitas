import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Header from './Header';

function Meals() {
  const { meals } = useContext(AppContext);

  console.log(meals);
  const mealsIndex = 11;
  return (
    <div>
      <Header title="Meals" />
      <section>
        { meals.length > 0 && meals.map((m, i) => (
          i <= mealsIndex
          && (
            <div
              key={ m.idMeal }
              data-testid={ `${i}-recipe-card` }
            >
              <p data-testid={ `${i}-card-name` }>{m.strMeal}</p>
              <img
                data-testid={ `${i}-card-img` }
                src={ m.strMealThumb }
                alt={ m.strMeal }
              />
            </div>
          )
        ))}
      </section>
    </div>
  );
}

export default Meals;
