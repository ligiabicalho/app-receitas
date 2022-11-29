import React from 'react';
import ProfilePicture from '../images/profileIcon.svg'
import SearchIcon from '../images/searchIcon.svg'

function Header({ title }) {
  return (
    <header className='header-div'>
      <h1 data-testid='page-title'>{title}</h1>
      <img src={ProfilePicture} alt='imagem de perfil' data-testid='profile-top-btn' />
      {title === 'Meals' || title === 'Drinks' ? <img src={SearchIcon} alt='ícone de pesquisa' data-testid='search-top-btn' /> : ''}
    </header>
  );
}

export default Header;
