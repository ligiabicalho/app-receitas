import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfilePicture from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

function Header({ title }) {
  const [inputOn, setInputOn] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  const handleBtnClick = () => {
    if (inputOn === true) {
      setInputOn(false);
    } else {
      setInputOn(true);
    }
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
          <button onClick={ handleBtnClick } type="button">
            <img
              src={ SearchIcon }
              alt="ícone de pesquisa"
              data-testid="search-top-btn"
            />
          </button>
        )
        : '') }
      { inputOn === true
        ? (
          <SearchBar />)
        : '' }
    </header>
  );
}

Header.propTypes = ({
  title: PropTypes.string,
}).isRequired;

export default Header;
