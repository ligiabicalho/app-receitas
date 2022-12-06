import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Header from './Header';
import Footer from './Footer';
import BtnFilter from './BtnFilter';

function Meals() {
  const { meals } = useContext(AppContext);

  console.log(meals);
  const eleven = 11;
  return (
    <div>
      <Header title="Meals" />
      <BtnFilter />
      <section>
        { meals.length > 0 && meals.map((m, i) => (
          i <= eleven
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
      <Footer />
    </div>
  );
}

export default Meals;
