import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Header from './Header';

function Drinks() {
  const { drinks } = useContext(AppContext);
  const eleven = 11;
  return (
    <div>
      <Header title="Drinks" />
      <section>
        {drinks.length > 0 && drinks.filter((m, i) => i <= eleven).map((m, i) => (
          <div
            key={ m.idDrink }
            data-testid={ `${i}recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ m.strDrinkThumb }
              alt={ `${index}-card-name` }
            />
            <p data-testid={ `${index}-card-name` }>{m.strDrink}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Drinks;
