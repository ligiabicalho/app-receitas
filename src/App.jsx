import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';

function App() {
  return (
    <AppProvider>
      <Route exact path="/" component={ Login } />
    </AppProvider>
  );
}

export default App;
