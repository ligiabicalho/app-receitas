import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { saveUserEmail } from '../services/localStorage';

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
    history.push('/meals');
  };

  return (
    <div className="login-page">
      <h1>Recipes App</h1>
      <form>
        <label htmlFor="email">
          E-mail:
          <input
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
          Senha:
          <input
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
