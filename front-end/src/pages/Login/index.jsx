import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import UserService from '../../service/user.service';
import './login.css';
import rockGlass from '../../images/rockGlass.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    new UserService()
      .login(email, password)
      .then((res) => {
        const { token } = res.data;
        console.log(token);
        localStorage.setItem('token', token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  return (
    <div className="container">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <label htmlFor="setName">
        Nome:
        <input
          type="text"
          id="setName"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="setPassword">
        Senha:
        <input
          type="password"
          id="setPassword"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <div>
        <button type="submit" onClick={ signup }>
          Login
        </button>
        <button type="submit" onClick={ () => history.push('/register') }>
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default Login;
