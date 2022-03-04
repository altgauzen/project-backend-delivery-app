import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ user }) {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <navbar style={ { display: 'flex', width: '100%' } }>
      <div data-testid="customer_products__element-navbar-link-products">
        PRODUTOS
      </div>
      <div data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</div>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
      </div>
      <div
        role="button"
        tabIndex={ user.id }
        data-testid="customer_products__element-navbar-link-logout"
        onKeyDown={ () => logout }
        onClick={ () => logout }
      >
        SAIR
      </div>
    </navbar>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Navbar;
