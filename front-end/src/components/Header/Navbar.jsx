import React from 'react';
import { useHistory } from 'react-router-dom';
import contextValue from '../../context/context';
import './navbar.css';

function Navbar() {
  const history = useHistory();
  const { user } = React.useContext(contextValue);

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header className="containerHeader">
      <div data-testid="customer_products__element-navbar-link-products">
        PRODUTOS
      </div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/orders') }
      >
        <span>MEUS PEDIDOS</span>
      </button>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
      </div>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        SAIR
      </button>
    </header>
  );
}

export default Navbar;
