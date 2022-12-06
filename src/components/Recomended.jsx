import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'nuka-carousel/lib/carousel';
import AppContext from '../context/AppContext';

function Recomended(props) {
  const { meals } = useContext(AppContext);
  const { drinks } = useContext(AppContext);
  const { par } = props;
  const number = 5;
  if (par === 'meals') {
    console.log(meals);
    return (
      <Carousel
        autoplay
        slidesToShow={ 2 }
        slidesToScroll={ 2 }
      >
        { drinks.length > 0 && drinks.map((d, i) => (
          i <= number
          && (
            <>
              <img
                data-testid="recommendation-card"
                src={ d.strDrinkThumb }
                alt={ `${i}-card-name` }
              />
              <p data-testid={ `${i}-recommendation-title` }>{d.strDrink}</p>
            </>
          )
        ))}
      </Carousel>
    );
  }
  if (par === 'drinks') {
    console.log('entrou drinks');
    console.log(drinks);
    return (
      <section className="recomended-drinks">
        { meals.length > 0 && meals.map((m, i) => (
          i <= number
          && (
            <div
              key={ m.idMeal }
              data-testid={ `data-testid="${i}-recommendation-card` }
            >
              <p data-testid={ `${i}-recommendation-title` }>{m.strMeal}</p>
              <img
                className="recomended-drinks-img"
                data-testid={ `${i}-card-img` }
                src={ m.strMealThumb }
                alt={ m.strMeal }
              />
            </div>
          )
        ))}
      </section>
    );
  }
  console.log('entrou em nenhunm');
  console.log(par);
}

Recomended.propTypes = {
  par: PropTypes.string.isRequired,
};

export default Recomended;
