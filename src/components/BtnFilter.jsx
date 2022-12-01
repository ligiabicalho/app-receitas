import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';

function BtnFilter() {
  const { mealCathegory, drinkCathegory } = useContext(AppContext);
  const location = useLocation();
  const { pathname } = location;
  const cinco = 5;

  return (
    <div>
      { (pathname === '/meals') && mealCathegory.map((c, i) => (
        i < cinco && (
          <button
            data-testid={ `${c.strCategory}-category-filter` }
            type="button"
            key={ c.strCategory }
          >
            { c.strCategory }
          </button>
        )
      ))}
      { (pathname === '/drinks') && drinkCathegory.map((d, i) => (
        i < cinco && (
          <button
            data-testid={ `${d.strCategory}-category-filter` }
            type="button"
            key={ d.strCategory }
          >
            { d.strCategory }
          </button>
        )
      ))}
    </div>
  );
}

export default BtnFilter;
