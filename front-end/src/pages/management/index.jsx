import React, { useState, useEffect } from "react";
import ADMService from "../../service/adm.service";
import AdmNavbar from "../../components/Header/AdmNavbar";
import Utils from "../../utils/functions/index";
import ErrorLogin from "../../components/ErrorLogin";
import UserService from "../../service/user.service";
// import context from '../../context/context';
import { Form, Button, Card } from "react-bootstrap";
import "./management.css";

function Management() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [validCampus, setValidCampus] = useState({
    name: false,
    email: false,
    password: false,
    role: false,
  });
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const handlerInput = ({ target: { value, id } }, set) => {
    setValidCampus({
      ...validCampus,
      [id]: Utils[`validate${id[0].toUpperCase() + id.substr(1)}`](value),
    });
    set({ ...user, [id]: value });
  };
  useEffect(() => {
    new UserService()
      .allUser(localStorage.getItem("token"))
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (users.length) console.log(Object.values(users));

  // const removeUsedOptions = () => users.map((option, index) => (
  //   <p key={ index }>
  //     { option.name } { option.email} { option.role}
  //   </p>
  // ));
  useEffect(() => {
    const campus = Object.keys(validCampus).filter(
      (key) => validCampus[key] === false
    );
    setDisabled(!!campus.length);
  }, [validCampus]);

  const signup = () => {
    new ADMService()
      .register(user, localStorage.getItem("token"))
      .then((res) => {
        setError(false);
        console.table(res);
      })
      .catch((err) => {
        setError(true);
        setMessageError(err.message);
        console.log("ERRO -> ", err);
      });
  };

  const handleButtonRegister = (e) => {
    e.preventDefault();
    signup();
  };
  return (
    <div>
      <AdmNavbar />
      <div className="mt-5">
        <Card className="child">
        <Card.Header>
          <h1>cadastrar novo usuário</h1>
        </Card.Header>
        <Card.Body>
          <Form action="" method="post">
            <section className="containerRegister">
              <label className="label" htmlFor="name">
                Nome
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  data-testid="admin_manage__input-name"
                  minLength="12"
                  onChange={(event) => handlerInput(event, setUser)}
                  placeholder="12 caracteres"
                />
              </label>
              <label className="label" htmlFor="email">
                Email
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  data-testid="admin_manage__input-email"
                  onChange={(event) => handlerInput(event, setUser)}
                  placeholder="seu-email@site.com.br"
                />
              </label>
              <label className="label" htmlFor="password">
                Senha
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  data-testid="admin_manage__input-password"
                  minLength="6"
                  onChange={(event) => handlerInput(event, setUser)}
                  placeholder="******"
                />
              </label>
              <label className="label" htmlFor="role">
                Tipo
                <Form.Select
                  class="form-select"
                  id="role"
                  name="role"
                  value={user.role}
                  data-testid="admin_manage__select-role"
                  onChange={(event) => handlerInput(event, setUser)}
                >
                  <option id="cliente-role" value="customer">
                    Cliente
                  </option>
                  <option id="vendedor-role" value="seller">
                    Vendedor
                  </option>
                </Form.Select>
              </label>
            </section>

            <div className="submitButton">
              <Button
                className="mt-3"
                type="submit"
                data-testid="admin_manage__button-register"
                disabled={disabled}
                onClick={handleButtonRegister}
              >
                CADASTRAR
              </Button>
              {error ? (
                <ErrorLogin
                  datatestid="admin_manage__element-invalid-register"
                  message={messageError}
                />
              ) : (
                ""
              )}
            </div>
          </Form>
        </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Management;
