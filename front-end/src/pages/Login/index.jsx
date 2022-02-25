import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import UserService from '../../service/user.service';
import './login.css';
import rockGlass from '../../images/rockGlass.svg';
import ErrorLogin from '../../components/ErrorLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const signup = () => {
    new UserService()
      .login(email, password)
      .then((res) => {
        const { token } = res.data;
        console.log(token);
        localStorage.setItem('token', token);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  const number = 6;
  const history = useHistory();
  let handleButton = true;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= number) {
    handleButton = false;
  }
  return (
    <div className="container">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <label htmlFor="setName">
        login:
        <input
          data-testid="common_login__input-email"
          type="email"
          id="setName"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="setPassword">
        Senha:
        <input
          data-testid="common_login__input-password"
          type="password"
          id="setPassword"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <div>
        <button
          data-testid="common_login__button-login"
          type="submit"
          onClick={ signup }
          disabled={ handleButton }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
          onClick={ () => history.push('/register') }
        >
          Cadastre-se
        </button>
      </div>
      {error ? <ErrorLogin /> : ''}
    </div>
  );
}

export default Login;
