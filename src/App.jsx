import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Route exact path="/" component={ Login } />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
