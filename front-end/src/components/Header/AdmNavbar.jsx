import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './navbar.css';
import context from '../../context/context';
import { Button } from "react-bootstrap";

function AdmNavbar() {
  const history = useHistory();
  const { user } = useContext(context);

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header border="primary" className="containerNavbar">
      <div data-testid="customer_products__element-navbar-link-products">
        GERENCIAR USUÁRIOS
      </div>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user.name }
      </div>
      <Button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        SAIR
      </Button>
    </header>
  );
}

export default AdmNavbar;
