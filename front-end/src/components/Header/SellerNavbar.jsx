import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './navbar.css';
import context from '../../context/context';

function SellerNavbar() {
  const history = useHistory();
  const { user } = useContext(context);

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header className="containerNavbar">
      <div data-testid="customer_products__element-navbar-link-products">
        Pedidos
      </div>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user.name }
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

export default SellerNavbar;
