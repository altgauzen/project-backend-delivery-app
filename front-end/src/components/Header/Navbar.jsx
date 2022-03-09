import React from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './navbar.css';

function Navbar({ user }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header className="containerHeader">
      <div data-testid="customer_products__element-navbar-link-products">
        PRODUTOS
      </div>
      <div data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</div>
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

Navbar.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string,
  }).isRequired,
};

export default Navbar;
