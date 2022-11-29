import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Route exact path="/" component={ Login } />
        <Route path="/meals" component={ Recipes } />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
