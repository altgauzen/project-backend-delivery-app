import { useHistory } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import UserService from '../../service/user.service';
import './login.css';
import rockGlass from '../../images/rockGlass.svg';
import ErrorLogin from '../../components/ErrorLogin';
import contextValue from '../../context/context';
import Utils from '../../utils/functions/index';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const { setUser } = useContext(contextValue);

  const history = useHistory();

  useEffect(() => {
    const userLocal = Utils.getLocalStorage('user');
    if (userLocal) {
      switch (userLocal.role) {
        case 'customer':
          history.push('/customer/products');
          break;
        case 'administrator':
          history.push('/admin/manage');
          break;
        default:
          history.push('/seller/products');
          break;
      }
    }
  }, [])

  const signup = () => {
    new UserService()
      .login(email, password)
      .then((res) => {
        const { token, user } = res.data;
        console.log(token, user);
        localStorage.setItem('token', token);
        Utils.setLocalStorage('user', user);
        setUser(user);
        switch (user.role) {
        case 'customer':
          history.push('/customer/products');
          break;
        case 'administrator':
          history.push('/admin/manage');
          break;
        default:
          history.push('/seller/products');
          break;
        }
      })
      .catch((err) => {
        setError(true);
        setMessageError(err.message);
        console.log('ERRO -> ', err);
      });
  };
  const number = 6;
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
      {
        error ? <ErrorLogin
          datatestid="common_login__element-invalid-email"
          message={ messageError }
        /> : ''
      }
    </div>
  );
}

export default Login;
