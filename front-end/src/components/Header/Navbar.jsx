import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../../context/context';
import './navbar.css';
import { Button } from "react-bootstrap";

function Navbar() {
  const history = useHistory();
  const { user } = useContext(context);
  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header className="containerNavbar">
      <div
      data-testid="customer_products__element-navbar-link-products"
      onClick={ () => history.push('/customer/products') }
      >
        PRODUTOS
      </div>
      <Button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/orders') }
      >
        <span>MEUS PEDIDOS</span>
      </Button>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
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

export default Navbar;
