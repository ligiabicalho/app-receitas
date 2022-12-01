import React, { useContext } from 'react';
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
            <div
              key={ d.idDrink }
              data-testid={ `${i}-recipe-card` }
            >
              <p data-testid={ `${i}-card-name` }>{d.strDrink}</p>
              <img
                data-testid={ `${i}-card-img` }
                src={ d.strDrinkThumb }
                alt={ `${i}-card-name` }
              />
            </div>
          )
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Drinks;
