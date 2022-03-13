import React, { useState, useContext } from "react";
import ADMService from "../../service/adm.service.js";
import ErrorLogin from "../../components/ErrorLogin";
import AdmNavbar from "../../components/Header/AdmNavbar.jsx";
import contextValue from '../../context/context';

function Management() {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [password, setPassword] = useState("a");
  const [validPassword, setValidPassword] = useState(false);
  const [option, setOption] = useState(["Vendedor", "Cliente"]);
  const [role, setRole] = useState();
  const {
    user,
  } = useContext(contextValue);
  const handlerInput = ({ target: { value } }, set) => {
    if (value === "Cliente") {
      return set(value.replace("Cliente", "customer"));
    } else if (value === "Vendedor") {
      return set(value.replace("Vendedor", "seller"));
    }
  };

  console.log(role, typeof role, "aqui");
  const signup = () => {
    new ADMService().register(name, email, password, role).catch((err) => {
      setError(true);
      setMessageError(err.message);
      console.log("ERRO -> ", err);
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
    e.preventDefault();
    signup();
  };

  return (
    <div>
      <AdmNavbar user={ user }/>
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
              onChange={(event) => ValidateName(event)}
              placeholder="12 caracteres"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              data-testid="admin_manage__input-email"
              onChange={(event) => validateEmail(event)}
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
              onChange={(event) => validatePassword(event)}
              placeholder="******"
            />
          </label>
          <select
            data-testid="admin_manage__select-role"
            name="columm"
            onChange={(event) => handlerInput(event, setRole)}
          >
            {option.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="submit"
            data-testid="admin_manage__button-register"
            disabled={submit()}
            onClick={handleButtonRegister}
          >
            CADASTRAR
          </button>
          {error ? (
            <ErrorLogin
              datatestid="common_register__element-invalid_register"
              message={messageError}
            />
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}

export default Management;
