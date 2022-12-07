import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import AppContext from '../context/AppContext';

function Recomended(props) {
  const { meals } = useContext(AppContext);
  const { drinks } = useContext(AppContext);
  const { par } = props;
  const number = 2;
  const anotherNumber = 3;
  if (par === 'meals') {
    console.log(meals);
    return (
      <Carousel>
        { drinks.length > 0 && drinks.map((d, i) => (
          i <= number
          && (
            <Carousel.Item>
              <img
                data-testid={ `${i}-recommendation-card` }
                src={ d.strDrinkThumb }
                alt={ d.strDrink }
              />
              <img
                data-testid={ `${i + anotherNumber}-recommendation-card` }
                src={ drinks[i + anotherNumber].strDrinkThumb }
                alt={ drinks[i + anotherNumber].strDrink }
              />
              <Carousel.Caption>
                <p
                  key={ d.idDrink }
                  data-testid={ `${i}-recommendation-title` }
                >
                  {d.strDrink}
                </p>
                <p
                  key={ drinks[i + anotherNumber].idDrink }
                  data-testid={ `${i + anotherNumber}-recommendation-title` }
                >
                  {drinks[i + anotherNumber].strDrink}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        ))}
      </Carousel>
    );
  }
  if (par === 'drinks') {
    return (
      <Carousel>
        { meals.length > 0 && meals.map((m, i) => (
          i <= number
          && (
            <Carousel.Item>
              <img
                data-testid={ `${i}-recommendation-card` }
                src={ m.strMealThumb }
                alt={ m.strMeal }
              />
              <img
                data-testid={ `${i + anotherNumber}-recommendation-card` }
                src={ meals[i + anotherNumber].strMealThumb }
                alt={ meals[i + anotherNumber].strMeal }
              />
              <Carousel.Caption>
                <p
                  key={ m.idMeal }
                  data-testid={ `${i}-recommendation-title` }
                >
                  {m.strMeal}
                </p>
                <p
                  key={ meals[i + anotherNumber].idMeal }
                  data-testid={ `${i + anotherNumber}-recommendation-title` }
                >
                  {meals[i + anotherNumber].strMeal}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
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
