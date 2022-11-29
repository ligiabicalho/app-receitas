import React from 'react';

function Login() {
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
            // value={ email }
            data-testid="email-input"
            // onChange={ handleChange }
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
            // value={ password }
            data-testid="password-input"
            // onChange={ handleChange }
            required
          />
        </label>
        <br />
        <button
          type="button"
          data-testid="login-submit-btn"
          // disabled={ disable }
          // onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
