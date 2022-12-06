import React from 'react';
import { useLocation } from 'react-router-dom';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';

function Recipes() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      { pathname === '/meals' ? <Meals /> : <Drinks /> }
    </div>
  );
}

export default Recipes;
