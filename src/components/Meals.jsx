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
        { meals.length > 0 && meals.filter(
          (m, i) => i <= mealsIndex,
        ).map((m, i) => (
          <div
            key={ m.idMeal }
            data-testid={ `${i}-recipe-card` }
          >
            {m.strMeal}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Meals;
