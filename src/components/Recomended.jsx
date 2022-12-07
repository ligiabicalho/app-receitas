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
        slidesToShow={ 2 }
        slidesToScroll={ 2 }
      >
        { drinks.length > 0 && drinks.map((d, i) => (
          i <= number
          && (
            <>
              <img
                data-testid={ `${i}-recommendation-card` }
                src={ d.strDrinkThumb }
                alt={ d.strDrink }
              />
              <p
                key={ d.idDrink }
                data-testid={ `${i}-recommendation-title` }
              >
                {d.strDrink}
              </p>
            </>
          )
        ))}
      </Carousel>
    );
  }
  if (par === 'drinks') {
    return (
      <Carousel
        slidesToShow={ 2 }
        slidesToScroll={ 2 }
      >
        { meals.length > 0 && meals.map((m, i) => (
          i <= number
          && (
            <>
              <img
                data-testid={ `${i}-recommendation-card` }
                src={ m.strMealThumb }
                alt={ m.strMeal }
              />
              <p
                key={ m.idMeal }
                data-testid={ `${i}-recommendation-title` }
              >
                {m.strMeal}
              </p>
            </>
          )
        ))}
      </Carousel>
    );
  }
}

Recomended.propTypes = {
  par: PropTypes.string.isRequired,
};

export default Recomended;
