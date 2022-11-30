import React from 'react';
import { useHistory } from 'react-router-dom';
import drinksIcon from '../images/drinkIcon.svg';
import mealsIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();

  const handleMealClick = () => {
    history.push('/meals');
  };

  const handleDrinkClick = () => {
    history.push('/drinks');
  };

  return (
    <footer data-testid="footer" className="footer">
      <button type="button" onClick={ handleDrinkClick }>
        <img
          data-testid="drinks-bottom-btn"
          src={ drinksIcon }
          alt="ìcone de Drinks"
        />
      </button>
      <button type="button" onClick={ handleMealClick }>
        <img
          data-testid="meals-bottom-btn"
          src={ mealsIcon }
          alt="ìcone de Meals"
        />
      </button>
    </footer>
  );
}

export default Footer;
