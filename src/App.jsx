import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import DoneRecipes from './components/DoneRecipes';
import RecipeDetails from './pages/RecipeDetails';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <AppProvider>
      <Route exact path="/" component={ Login } />
      <Route path="/meals" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/meals/:id" component={ RecipeDetails } />
      <Route path="/drinks/:id" component={ RecipeDetails } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </AppProvider>
  );
}

export default App;
