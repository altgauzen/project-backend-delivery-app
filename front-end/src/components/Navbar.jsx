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
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        SAIR
      </button>
    </navbar>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    email: PropTypes.string,
    password: PropTypes.string,
    role: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
};

export default Navbar;
