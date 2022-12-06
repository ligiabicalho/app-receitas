import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Header from './Header';
import Footer from './Footer';
import BtnFilter from './BtnFilter';

function Meals() {
  const { meals } = useContext(AppContext);
  const mealsIndex = 11;
  return (
    <div>
      <Header title="Meals" />
      <BtnFilter />
      <section data-testid="meals-div">
        { meals.length > 0 && meals.map((m, i) => (
          i <= mealsIndex
          && (
            <Link to={ `/meals/${m.idMeal}` }>
              <div
                data-testid={ `${i}-recipe-card` }
                key={ m.idMeal }
              >
                <p data-testid={ `${i}-card-name` }>{m.strMeal}</p>
                <img
                  data-testid={ `${i}-card-img` }
                  src={ m.strMealThumb }
                  alt={ m.strMeal }
                />
              </div>
            </Link>
          )
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Meals;
