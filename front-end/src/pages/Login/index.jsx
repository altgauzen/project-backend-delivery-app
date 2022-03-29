import { useHistory } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import UserService from '../../service/user.service';
import './login.css';
import rockGlass from '../../images/rockGlass.svg';
import ErrorLogin from '../../components/ErrorLogin';
import contextValue from '../../context/context';
import Utils from '../../utils/functions/index';
import { Form, Button, Card } from "react-bootstrap";

import logo from '../../images/logo.png';
import deliveryman from '../../images/deliveryman.png';

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
        history.push('/seller/orders');
        break;
      }
    }
  }, [history]);

  const signup = () => {
    new UserService()
      .login(email, password)
      .then((res) => {
        const { token, user } = res.data;
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
          history.push('/seller/orders');
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
    <div className="container mt-5">
      <object className="rocksGlass" type="image/svg+xml">
        Glass
      </object>
      <section className="section-login">
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Title>
            <img src={ logo } alt="logo website" className="logo-website" />
          </Card.Title>
          <label className="label" htmlFor="setName">
            Login:
            <input
              data-testid="common_login__input-email"
              type="email"
              id="setName"
              placeholder="seu-email@site.com.br"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
          <label className="label" htmlFor="setPassword">
            Senha:
            <input
              data-testid="common_login__input-password"
              type="password"
              id="setPassword"
              placeholder="******"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
          <div className="containerButton">
            <Button
              className="mt-3"
              data-testid="common_login__button-login"
              type="submit"
              onClick={ signup }
              disabled={ handleButton }
            >
              Login
            </Button>
            <Button
              className="mt-3" 
              data-testid="common_login__button-register"
              type="submit"
              onClick={ () => history.push('/register') }
            >
              Cadastre-se
            </Button>
          </div>
          {
            error ? <ErrorLogin
              datatestid="common_login__element-invalid-email"
              message={ messageError }
            /> : ''
          }
        </Card>
      </section>
    </div>
  );
}

export default Login;
