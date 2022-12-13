import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Header from './Header';
import Footer from './Footer';
import BtnFilter from './BtnFilter';
import '../styles/Meals.css';

function Meals() {
  const { meals } = useContext(AppContext);
  const eleven = 11;
  return (
    <div>
      <Header title="Meals" />
      <BtnFilter />
      <section
        className="card-meals"
        data-testid="meals-div"
      >
        { meals.length > 0 && meals.map((m, i) => (
          i <= eleven
          && (
            <Link key={ m.idMeal } to={ `/meals/${m.idMeal}` }>
              <div
                // className=""
                data-testid={ `${i}-recipe-card` }
              >
                <p data-testid={ `${i}-card-name` }>{m.strMeal}</p>
                <img
                  className="img-meals"
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
