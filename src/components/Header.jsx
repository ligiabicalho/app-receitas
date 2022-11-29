import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfilePicture from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const history = useHistory();
  const handleClick = () => {
    history.push('/profile');
  };

  return (
    <header className="header-div">
      <h1 data-testid="page-title">{title}</h1>
      <button onClick={ handleClick } type="button">
        <img
          src={ ProfilePicture }
          alt="imagem de perfil"
          data-testid="profile-top-btn"
        />
      </button>
      { ((title === 'Meals' || title === 'Drinks')
        ? (
          <img
            src={ SearchIcon }
            alt="ícone de pesquisa"
            data-testid="search-top-btn"
          />)
        : '') }
    </header>
  );
}

Header.propTypes = ({
  title: PropTypes.string,
}).isRequired;

export default Header;
