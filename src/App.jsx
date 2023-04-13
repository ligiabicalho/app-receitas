import React from 'react';
import { Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import RecipeDetails from './pages/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <AppProvider>
      <Route exact path="/app-receitas" component={ Login } />
      <Route path="/app-receitas/meals" component={ Recipes } />
      <Route exact path="/app-receitas/drinks" component={ Recipes } />
      <Route exact path="/app-receitas/drinks/:id" component={ RecipeDetails } />
      <Route exact path="/app-receitas/meals/:id" component={ RecipeDetails } />
      <Route exact path="/app-receitas/drinks/:id/in-progress" component={ RecipeInProgress } />
      <Route
        exact
        path="/app-receitas/meals/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route path="/app-receitas/profile" component={ Profile } />
      <Route path="/app-receitas/done-recipes" component={ DoneRecipes } />
      <Route path="/app-receitas/favorite-recipes" component={ FavoriteRecipes } />
    </AppProvider>
  );
}

export default App;
