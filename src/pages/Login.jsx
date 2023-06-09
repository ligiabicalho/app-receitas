import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { saveUserEmail } from '../services/localStorage';
import '../styles/Login.css';

export default function Login({ history }) {
  const [login, setLogin] = useState({
    isDisabled: true,
    email: '',
    password: '',
  });

  useEffect(() => {
    const verifyField = () => {
      const regex = /\S+@\S+\.\S+/;
      const verifyEmail = regex.test(login.email);
      const passwordMinLen = 6;
      const verifyPassword = login.password.length > passwordMinLen;
      setLogin((prevState) => (
        { ...prevState, isDisabled: !(verifyEmail && verifyPassword) }));
    };

    verifyField();
  }, [login.email, login.password]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    saveUserEmail(login.email);
    history.push('/app-receitas/meals');
  };

  return (
    <div className="login-page">
      <div className="login-h1">
        <img src="https://i.pinimg.com/originals/ce/58/ac/ce58ac51f8c46cc817940d962e3e1f61.png" alt="logo" />
        <h1>RECIPES APP</h1>
        <h3>Login</h3>
      </div>
      <form className="form-login">
        <label htmlFor="email">
          <input
            placeholder="Email"
            className="input-login"
            id="email"
            name="email"
            type="email"
            value={ login.email }
            data-testid="email-input"
            onChange={ handleChange }
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            placeholder="Senha"
            className="input-login"
            id="password"
            name="password"
            type="password"
            value={ login.password }
            data-testid="password-input"
            onChange={ handleChange }
            required
          />
        </label>
        <br />
        <button
          className="button-login"
          type="button"
          data-testid="login-submit-btn"
          disabled={ login.isDisabled }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
