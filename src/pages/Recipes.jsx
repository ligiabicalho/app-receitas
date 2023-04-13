import React from 'react';
import { useLocation } from 'react-router-dom';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';

function Recipes() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      { pathname === '/app-receitas/meals' && <Meals /> }
      { pathname === '/app-receitas/drinks' && <Drinks /> }
    </div>
  );
}

export default Recipes;
