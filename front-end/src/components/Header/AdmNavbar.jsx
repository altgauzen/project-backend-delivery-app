import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './navbar.css';
import context from '../../context/context'

function AdmNavbar() {
  const history = useHistory();
  const { user } = useContext(context);

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header className="containerNavbar">
      <div data-testid="customer_products__element-navbar-link-products">
        GERENCIAR USUÁRIOS
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

AdmNavbar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
};

export default AdmNavbar;
