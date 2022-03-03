import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './register.css';
import UserService from '../../service/user.service';
import ErrorLogin from '../../components/ErrorLogin';

function Register() {
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [password, setPassword] = useState('a');
  const [validPassword, setValidPassword] = useState(false);

  const history = useHistory();

  const signup = () => {
    new UserService()
      .register(name, email, password)
      .then((res) => {
        const a = res.data;
        history.push('/customer/products');
      })
      .catch((err) => {
        setError(true);

        setMessageError(err.message);
        console.log('ERRO -> ', err);
      });
  };

  const ValidateName = ({ target: { value } }) => {
    const minLength = 12;
    if (value.length > minLength) {
      setValidName(true);
    } else {
      setValidName(false);
    }
    setName(value);
  };

  const validateEmail = ({ target: { value } }) => {
    const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validaEmail.test(value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    setEmail(value);
  };

  const validatePassword = ({ target: { value } }) => {
    const minLength = 6;
    if (value.length >= minLength) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
    setPassword(value);
  };

  const submit = () => {
    if (validEmail && validPassword && validName) return false;
    return true;
  };


  const handleButtonRegister = (e) => {
    e.preventDefault()
    signup();
  };

  return (
    <div className='container'>
      <h1>Cadastro</h1>
      <form action="" method="post" className='formContainer'>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            data-testid="common_register__input-name"
            minLength="12"
            onChange={ (event) => ValidateName(event) }
            placeholder="12 caracteres"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="common_register__input-email"
            onChange={ (event) => validateEmail(event) }
            placeholder="seu-email@site.com.br"
          />
        </label>
        Senha:
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            data-testid="common_register__input-password"
            minLength="6"
            onChange={ (event) => validatePassword(event) }
            placeholder="******"
          />
        </label>
        <button
          type="submit"
          data-testid='common_register__button-register'
          disabled={ submit() }
          onClick={handleButtonRegister}
        >
          CADASTRAR
        </button>
        {error ? <ErrorLogin datatestid="common_register__element-invalid_register" message={ messageError } /> : ''}
      </form>
    </div>
  );
}

export default Register;
