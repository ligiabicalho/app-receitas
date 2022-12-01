import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { fetchFilteredMeal, fetchFilteredDrink } from '../services/fetchAPI';
import { mealsFetch, drinksFetch } from '../services/requestAPI';

function BtnFilter() {
  const { mealCathegory, drinkCathegory, setMeals, setDrinks } = useContext(AppContext);
  const [buttonAll, setButtonAll] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const cinco = 5;

  const handleMealClick = async ({ target }) => {
    setButtonAll(true);
    const filtered = await fetchFilteredMeal(target.innerHTML);
    await setMeals(filtered);
    if (buttonAll === true) {
      const all = await mealsFetch();
      await setMeals(all);
      setButtonAll(false);
    }
  };

  const handleDrinkClick = async ({ target }) => {
    setButtonAll(true);
    const filtered = await fetchFilteredDrink(target.innerHTML);
    await setDrinks(filtered);
    if (buttonAll === true) {
      const all = await drinksFetch();
      await setDrinks(all);
      setButtonAll(false);
    }
  };

  const handleAllDrink = async () => {
    setButtonAll(false);
    const all = await drinksFetch();
    await setDrinks(all);
  };

  const handleAllMeal = async () => {
    setButtonAll(false);
    const all = await mealsFetch();
    await setMeals(all);
  };

  return (
    <div>
      { (pathname === '/meals') && (mealCathegory.map((c, i) => (
        i < cinco && (
          <button
            data-testid={ `${c.strCategory}-category-filter` }
            type="button"
            key={ c.strCategory }
            onClick={ handleMealClick }
          >
            { c.strCategory }
          </button>
        )
      )))}
      { (pathname === '/meals') && buttonAll && (
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ handleAllMeal }
        >
          All
        </button>)}
      { (pathname === '/drinks') && (drinkCathegory.map((d, i) => (
        i < cinco && (
          <button
            data-testid={ `${d.strCategory}-category-filter` }
            type="button"
            key={ d.strCategory }
            onClick={ handleDrinkClick }
          >
            { d.strCategory }
          </button>
        )
      )))}
      { (pathname === '/drinks') && buttonAll && (
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ handleAllDrink }
        >
          All
        </button>)}
    </div>
  );
}

export default BtnFilter;
