import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { drinksFetch, mealsFetch } from '../services/requestAPI';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [drinks, setDrinks] = useState({});
  const [meals, setMeals] = useState({});
  useEffect(() => {
    drinksFetch().then((result) => {
      setDrinks(result);
    });
  }, []);

  useEffect(() => {
    mealsFetch().then((result) => {
      setMeals(result);
    });
  }, []);

  const values = useMemo(() => ({
    drinks,
    meals,
  }), [drinks, meals]);

  return (
    <AppContext.Provider value={ values }>
      <div className="provider">
        {children}
      </div>
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default AppProvider;
