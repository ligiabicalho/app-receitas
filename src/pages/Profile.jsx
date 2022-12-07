import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('user');
    if (userEmail !== null) {
      const intEmail = JSON.parse(userEmail);
      setEmail(intEmail.email);
    }
  }, []);

  const history = useHistory();

  const toDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const toFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Profile" />
      <div>
        <h1
          data-testid="profile-email"
        >
          { email }
        </h1>
        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ toDoneRecipes }
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ toFavoriteRecipes }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
