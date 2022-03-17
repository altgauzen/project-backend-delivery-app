import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";
import UserService from "../../service/user.service";
import ErrorLogin from "../../components/ErrorLogin";
import { Form, Button, Card } from "react-bootstrap";

function Register() {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [password, setPassword] = useState("a");
  const [validPassword, setValidPassword] = useState(false);

  const history = useHistory();

  const signup = () => {
    new UserService()
      .register(name, email, password)
      .then(() => {
        history.push("/customer/products");
      })
      .catch((err) => {
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
    <div className="container mt-5">
      <Card className="mt-5">
        <Card.Title style={{textAlign: 'center'}}>Cadastro</Card.Title>
        <Card.Body>
          <Form action="" method="post" className="formContainer">
            <label className="form-label" htmlFor="name">
              Nome
              <input
                className="form-control"
                type="text"
                id="name"
                data-testid="common_register__input-name"
                minLength="12"
                onChange={(event) => ValidateName(event)}
                placeholder="12 caracteres"
              />
            </label>
            <label className="form-label" htmlFor="email">
              Email
              <input
                className="form-control"
                type="email"
                id="email"
                data-testid="common_register__input-email"
                onChange={(event) => validateEmail(event)}
                placeholder="seu-email@site.com.br"
              />
            </label>
            Senha
            <label className="form-label" htmlFor="password">
              <input
                className="form-control"
                type="password"
                id="password"
                data-testid="common_register__input-password"
                minLength="6"
                onChange={(event) => validatePassword(event)}
                placeholder="******"
              />
            </label>
            <Button
              type="submit"
              data-testid="common_register__button-register"
              disabled={submit()}
              onClick={handleButtonRegister}
            >
              CADASTRAR
            </Button>
            {error ? (
              <ErrorLogin
                datatestid="common_register__element-invalid_register"
                message={messageError}
              />
            ) : (
              ""
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
