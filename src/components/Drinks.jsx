import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AppContext from '../context/AppContext';
import Header from './Header';
import BtnFilter from './BtnFilter';

function Drinks() {
  const { drinks } = useContext(AppContext);
  const eleven = 11;
  return (
    <div>

      <Header title="Drinks" />
      <BtnFilter />
      <section>
        {drinks.length > 0 && drinks.map((d, i) => (
          i <= eleven
          && (
            <Link to={ `/drinks/${d.idDrink}` }>
              <div
                key={ d.idDrink }
                data-testid={ `${i}-recipe-card` }
              >
                <img
                  data-testid={ `${i}-card-img` }
                  src={ d.strDrinkThumb }
                  alt={ `${i}-card-name` }
                />
                <p data-testid={ `${i}-card-name` }>{d.strDrink}</p>
              </div>
            </Link>
          )
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Drinks;
