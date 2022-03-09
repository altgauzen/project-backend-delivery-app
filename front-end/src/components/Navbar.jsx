import React from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Navbar({ user }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <nav style={ { display: 'flex', width: '100%' } }>
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
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Navbar;
