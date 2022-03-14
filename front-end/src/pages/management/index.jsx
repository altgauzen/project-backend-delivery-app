import React, { useState, useEffect } from 'react';
import ADMService from '../../service/adm.service';
import AdmNavbar from '../../components/Header/AdmNavbar';
import Utils from '../../utils/functions/index';
import ErrorLogin from '../../components/ErrorLogin';

function Management() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [validCampus, setValidCampus] = useState({
    name: false,
    email: false,
    password: false,
    role: false,
  });
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const handlerInput = ({ target: { value, id } }, set) => {
    setValidCampus({
      ...validCampus,
      [id]: Utils[`validate${id[0].toUpperCase() + id.substr(1)}`](value),
    });
    set({ ...user, [id]: value });
  };

  useEffect(() => {
    const campus = Object.keys(validCampus).filter((key) => validCampus[key] === false);
    setDisabled(!!campus.length);
  }, [validCampus]);

  const signup = () => {
    new ADMService().register(user, localStorage.getItem('token'))
      .then((res) => {
        setError(false);
        console.table(res);
      })
      .catch((err) => {
        setError(true);
        setMessageError(err.message);
        console.log('ERRO -> ', err);
      });
  };

  const handleButtonRegister = (e) => {
    e.preventDefault();
    signup();
  };
  return (
    <div>
      <AdmNavbar />
      <div>
        <h1>cadastrar novo usuário</h1>
        <form action="" method="post" className="formContainer">
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              data-testid="admin_manage__input-name"
              minLength="12"
              onChange={ (event) => handlerInput(event, setUser) }
              placeholder="12 caracteres"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              data-testid="admin_manage__input-email"
              onChange={ (event) => handlerInput(event, setUser) }
              placeholder="seu-email@site.com.br"
            />
          </label>
          Senha:
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              data-testid="admin_manage__input-password"
              minLength="6"
              onChange={ (event) => handlerInput(event, setUser) }
              placeholder="******"
            />
          </label>
          <select
            id="role"
            value={ user.role }
            data-testid="admin_manage__select-role"
            onChange={ (event) => handlerInput(event, setUser) }
          >
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
          </select>
          <button
            type="submit"
            data-testid="admin_manage__button-register"
            disabled={ disabled }
            onClick={ handleButtonRegister }
          >
            CADASTRAR
          </button>
          {error ? (
            <ErrorLogin
              datatestid="admin_manage__element-invalid-register"
              message={ messageError }
            />
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
}

export default Management;
