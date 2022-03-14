import React from 'react';
import PropTypes from 'prop-types';
import ErrorLogin from '../ErrorLogin';

function FormManagement({
  messageError,
  validateEmail,
  validatePassword,
  ValidateName,
  handlerInput,
  handleButtonRegister,
  setRole,
  submit,
  error,
}) {
  const [option] = React.useState(['Vendedor', 'Cliente']);

  return (
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
            onChange={ (event) => ValidateName(event) }
            placeholder="12 caracteres"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="admin_manage__input-email"
            onChange={ (event) => validateEmail(event) }
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
            onChange={ (event) => validatePassword(event) }
            placeholder="******"
          />
        </label>
        <select
          data-testid="admin_manage__select-role"
          name="columm"
          onClick={ (event) => handlerInput(event, setRole) }
        >
          {option.map((item, index) => (
            <option key={ index } value={ item }>
              {item}
            </option>
          ))}
        </select>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ submit() }
          onClick={ handleButtonRegister }
        >
          CADASTRAR
        </button>
        {error ? (
          <ErrorLogin
            datatestid="common_register__element-invalid_register"
            message={ messageError }
          />
        ) : (
          ''
        )}
      </form>
    </div>
  );
}

FormManagement.propTypes = {
  messageError: PropTypes.string.isRequired,
  validateEmail: PropTypes.func.isRequired,
  validatePassword: PropTypes.func.isRequired,
  ValidateName: PropTypes.func.isRequired,
  handlerInput: PropTypes.func.isRequired,
  handleButtonRegister: PropTypes.func.isRequired,
  setRole: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default FormManagement;
