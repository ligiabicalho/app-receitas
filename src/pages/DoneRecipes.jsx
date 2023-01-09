import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BtnsDoneFave from '../components/BtnsDoneFave';
import CardDoneFave from '../components/CardDoneFave';
import '../styles/DoneRecipes.css';

function DoneRecipes() {
  const [filter, setFilter] = useState('all');
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    // const localDones = JSON.parse(localStorage.getItem('doneRecipes'));
    const localDones = [
      {
        id: '52771',
        type: 'meal',
        nationality: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        doneDate: '23/06/2020',
        tags: ['Pasta', 'Curry', 'Tag3'],
      },
      {
        id: '178319',
        type: 'drink',
        nationality: '',
        category: 'Cocktail',
        alcoholicOrNot: 'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        doneDate: '23/06/2020',
        tags: [],
      },
    ];
    setDoneRecipes(localDones);
  }, []);

  const filterMeal = () => {
    const localDones = JSON.parse(localStorage.getItem('doneRecipes'));
    const mealFiltered = localDones.filter((e) => e.type === 'meal');
    setDoneRecipes(mealFiltered);
    setFilter('meal');
    console.log(filter);
  };

  const filterDrinks = () => {
    const localDones = JSON.parse(localStorage.getItem('doneRecipes'));
    const drinkFiltered = localDones.filter((e) => e.type === 'drink');
    setDoneRecipes(drinkFiltered);
    setFilter('drink');
  };

  const allRecipes = () => {
    const localDones = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(localDones);
    setFilter('all');
  };

  return (
    <div>
      <Header title="Done Recipes" />
      <BtnsDoneFave
        allRecipes={ allRecipes }
        filterMeal={ filterMeal }
        filterDrinks={ filterDrinks }
      />
      <CardDoneFave recipes={ doneRecipes } status="done" />
    </div>

  );
}

export default DoneRecipes;
