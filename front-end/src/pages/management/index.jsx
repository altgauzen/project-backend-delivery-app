import React, { useState } from 'react';
import ADMService from '../../service/adm.service';
import AdmNavbar from '../../components/Header/AdmNavbar';
import FormManagement from '../../components/formManagement';

function Management() {
  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [password, setPassword] = useState('a');
  const [validPassword, setValidPassword] = useState(false);
  const [role, setRole] = useState();

  const handlerInput = ({ target: { value } }, set) => {
    if (value === 'Cliente') return set(value.replace('Cliente', 'customer'));
    if (value === 'Vendedor') return set(value.replace('Vendedor', 'seller'));
  };
  const signup = () => {
    new ADMService().register(name, email, password, role)
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
  const ValidateName = ({ target: { value } }) => {
    const minLength = 12;
    if (value.length > minLength) setValidName(true);
    else setValidName(false);
    setName(value);
  };
  const validateEmail = ({ target: { value } }) => {
    const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validaEmail.test(value)) setValidEmail(true);
    else setValidEmail(false);
    setEmail(value);
  };
  const validatePassword = ({ target: { value } }) => {
    const minLength = 6;
    if (value.length >= minLength) setValidPassword(true);
    else setValidPassword(false);
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
      <AdmNavbar />
      <FormManagement
        handleButtonRegister={ handleButtonRegister }
        submit={ submit }
        validateEmail={ validateEmail }
        validatePassword={ validatePassword }
        ValidateName={ ValidateName }
        handlerInput={ handlerInput }
        messageError={ messageError }
        setRole={ setRole }
        error={ error }
      />
    </div>
  );
}

export default Management;
